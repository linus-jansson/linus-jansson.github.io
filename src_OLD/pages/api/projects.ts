// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data'
// type Data = {

// }

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let min = req.query.min ? parseInt(req.query.min as string) : 0
    let max = req.query.max ? parseInt(req.query.max as string) : 100

    let projects = data.projects.filter((project) => {
        return project.id >= min && project.id <= max
    })

    res.status(200).json({ projects: projects })
}
