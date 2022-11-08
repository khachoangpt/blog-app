import { Menu, MenuProps } from "antd";
import React from "react";
import { useRouter } from "next/router";

export interface Props {
  children: React.ReactElement;
}

const items = [
  { label: "Posts", key: "posts" },
  { label: "About", key: "about" },
  { label: "Create Post", key: "create_post" },
];

const MainLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const handleClickMenu: MenuProps["onClick"] = async (e) => {
    switch (e.key) {
      case "posts":
        router.push("/blogs");
        break;
      case "about":
        router.push("/about");
        break;
      case "create_post":
        router.push("/create-blog");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        <Menu
          onClick={handleClickMenu}
          mode="horizontal"
          items={items}
          theme="dark"
        />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
