/* eslint-disable react/no-children-prop */
import React from "react";
import MainLayout from "../../layouts/main";

const AboutPage: React.FC = () => {
  return <MainLayout children={<div>About page</div>} />;
};

export default AboutPage;
