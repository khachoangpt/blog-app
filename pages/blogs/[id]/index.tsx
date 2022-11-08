/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import { Menu, MenuProps, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../../layouts/main";
import { Data } from "..";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState<Data>({
    id: "",
    image: "",
    title: "",
    summary: "",
    content: "",
  });

  useEffect(() => {
    axios.get(`/api/blog/${id}`).then((res) => {
      if (res.data === "") {
        router.push("/blogs");
      } else {
        setBlog(res.data);
      }
    });
  }, [id]);
  return (
    <MainLayout
      children={
        <div>
          <Typography.Title style={{ marginTop: "36px" }} level={1}>
            {blog.title}
          </Typography.Title>
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
            <Typography.Text>{blog.content}</Typography.Text>
          </div>
        </div>
      }
    />
  );
};

export default BlogDetail;
