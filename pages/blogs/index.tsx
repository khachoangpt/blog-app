import { Col, Image, Menu, MenuProps, Row, Typography } from "antd";
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

const Blogs: React.FC = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Data[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  const handleClickMenu: MenuProps["onClick"] = async (e) => {};

  const openBlog = (id: string) => {
    router.push(`/blogs/${id}`);
  };
  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <Menu
        onClick={handleClickMenu}
        mode="horizontal"
        items={items}
        theme="dark"
      />
      <Row gutter={60}>
        {blogs.map((blog, index) => (
          <Col key={index} span={12} style={{ marginTop: "36px" }}>
            <Image
              onClick={() => openBlog(blog.id)}
              preview={false}
              src={blog.image}
              alt="blog"
              style={{
                width: "100%",
                aspectRatio: "16/9",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            />
            <Typography.Title style={{ marginTop: "12px" }} level={3}>
              {blog.title}
            </Typography.Title>
            <Typography.Text>{blog.summary}</Typography.Text>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
