/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    }
  ],
  siteMetadata: {
    title: "Gatsby Bootcamp",
    author: "Stanley Hayford"
  }
}
