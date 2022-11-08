import type { NextApiRequest, NextApiResponse } from "next";
import { blogsData } from "../../public/data/blogsData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    blogsData.push(req.body);
  }

  res.status(200).json(blogsData);
}
