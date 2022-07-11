// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react";

import { prisma } from "../../../utils/prismaClient";

type Task ={
    id: String,
  
    name: String
    hours: number
    minutes: number
    seconds: number
  
    userId: String
  }

type Response = {
    tasks?: Task[]
    error?: String
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
    const session = await getSession({ req });

    // Makes sure the user is logged in and using POST
    if(!session) res.status(401).json({error: "You are not logged in"});
    if(req.method !== "GET") res.status(405).json({error: "Method not allowed"});

    // Gets the user (to use the user's id)
    const user = await prisma.user.findUnique({
        where: {
            email: session!.user!.email?.toString()
        }
    });

    const tasks = await prisma.task.findMany({
        where: {
            userId: user!.id.toString()
        }
    });

    if(tasks) {
        res.status(200).json({tasks: tasks});
    }
}
