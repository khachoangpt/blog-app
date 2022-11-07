import type { NextApiRequest, NextApiResponse } from "next";

const data = [
  {
    id: "1",
    image: "https://vibienxanh.vn/x.jpg",
    title: "Blog title 1",
    summary: `It is a long established fact that a reader will be distracted by
  the readable content of a page when looking at its layout. The
  point of using Lorem Ipsum is that it has a more-or-less normal
  distribution of letters, as opposed to using making it look like
  readable English.`,
  },
  {
    id: "2",
    image:
      "https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2021_05_25/vietnam_plans_activities_in_response_to_world_oceans_day.jpg",
    title: "Blog title 2",
    summary: `It is a long established fact that a reader will be distracted by
  the readable content of a page when looking at its layout. The
  point of using Lorem Ipsum is that it has a more-or-less normal
  distribution of letters, as opposed to using making it look like
  readable English.`,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;
  const blog = data.filter((field) => field.id == id);

  res.status(200).json(blog[0]);
}
