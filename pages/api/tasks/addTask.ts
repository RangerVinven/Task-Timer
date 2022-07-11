// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Response = {
    success?: string
    error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
    const session = await getSession({ req });

    // Makes sure the user is logged in and using POST
    if(!session) res.status(401).json({error: "You are not logged in"});
    if(req.method !== "POST") res.status(405).json({error: "Method not allowed"});

    // Gets the user (to use the user's id)
    const user = await prisma.user.findUnique({
        where: {
            email: session!.user!.email?.toString()
        }
    });

    // Makes sure the necessary data is present
    if(!req.body.task || !req.body.hours || !req.body.minutes || !req.body.seconds) res.status(500).json({error: "Missing data"});

    const task = await prisma.task.create({
        data: {
            userId: user!.id.toString(),

            name: req.body.task,
            hours: req.body.hours,
            minutes: req.body.minutes,
            seconds: req.body.seconds
        }
    });

    if(task.id) {        
        res.status(200).json({success: "Task added"});
    } else {
        res.status(500).json({error: "Something went wrong"});
    }
}
