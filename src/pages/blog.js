import React from "react";
import Layout from "../components/layout";
import {graphql, useStaticQuery} from "gatsby";

const BlogPage = () => {

  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div>
        <h1>My Blog Page</h1>
        <ol>
          {
            data.allMarkdownRemark.edges.map((edge, index) => {
              return (
                <li key={index}>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <p>{new Date(edge.node.frontmatter.date).toDateString()}</p>
                </li>
              )
            })
          }
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage;
