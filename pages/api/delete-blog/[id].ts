import type { NextApiRequest, NextApiResponse } from "next";
import { blogsData } from "../../../public/data/blogsData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;
  const index = blogsData.findIndex((field) => field.id == id);
  blogsData.slice(index, 1);
  res.status(200).json(blogsData);
}
