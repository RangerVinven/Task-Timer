// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    taskName: string,
    taskHours: number,
    taskMinutes: number,
    taskSeconds: number    
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.send({
        taskName: req.query.id!.toString(),
        taskHours: 1,
        taskMinutes: 30,
        taskSeconds: 15
    });
}
