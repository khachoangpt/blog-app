import type { NextApiRequest, NextApiResponse } from "next";
import { blogsData } from "../../../public/data/blogsData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;
  const blog = blogsData.filter((field) => field.id == id);

  res.status(200).json(blog[0]);
}
