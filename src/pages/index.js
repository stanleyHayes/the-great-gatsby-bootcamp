import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Hello Gatsby</h1>
        <h2>I'm Userma'atre Setepenre, a fullstack web and mobile developer living in beautiful Ghana</h2>
        <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        <p>Want to know me? <Link to="/about">About me</Link></p>
      </div>
    </Layout>
  )
}

export default IndexPage
