/* eslint-disable react/no-children-prop */
import { Button, Form, Input } from "antd";
import MainLayout from "../../layouts/main";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/router";

const CreateBlogPage: React.FC = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    const res = await axios.post("/api/create-blog", {
      id: uuidv4(),
      ...values,
    });
    if (res.status === 200) {
      console.log(res);

      router.push("/blogs");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <MainLayout
      children={
        <Form
          style={{ marginTop: "36px" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input title!" }]}
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            label="Summary"
            name="summary"
            rules={[{ required: true, message: "Please input summary!" }]}
          >
            <Input placeholder="Summary" />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[{ required: true, message: "Please input image!" }]}
          >
            <Input placeholder="Image url" />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: "Please input content!" }]}
          >
            <Input.TextArea rows={4} placeholder="Content" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Create Blog
            </Button>
          </Form.Item>
        </Form>
      }
    />
  );
};
export default CreateBlogPage;
