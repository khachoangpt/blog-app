// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { blogsData } from "../../public/data/blogsData";

type Data = {
  id: string;
  image: string;
  title: string;
  summary: string;
  content: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(blogsData);
}
