/* eslint-disable @next/next/no-img-element */
import { Menu, MenuProps, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const items = [
  { label: "Posts", key: "posts" },
  { label: "About", key: "about" },
];

type Data = {
  id: string;
  image: string;
  title: string;
  summary: string;
};

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState<Data>({
    id: "",
    image: "",
    title: "",
    summary: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/blog/${id}`).then((res) => {
      setBlog(res.data);
    });
  }, [id]);
  const handleClickMenu: MenuProps["onClick"] = async (e) => {};
  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <Menu
        onClick={handleClickMenu}
        mode="horizontal"
        items={items}
        theme="dark"
      />
      <div>
        <Typography.Title style={{marginTop: "36px"}} level={1}>{blog.title}</Typography.Title>
        <img
          src={blog.image}
          alt="blog"
          style={{
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: "10px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        />
        <div>
          <Typography.Text>{blog.summary}</Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
