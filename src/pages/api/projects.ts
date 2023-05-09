// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data'
// type Data = {
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let projects = await prisma.projects.findMany();
    // let min = req.query.min ? parseInt(req.query.min as string) : 0
    // let max = req.query.max ? parseInt(req.query.max as string) : 100

    // let projects = data.projects.filter((project) => {
    //     return project.id >= min && project.id <= max
    // })

    res.status(200).json({ projects: projects })
}
