/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display`,
          `Alegreya Sans`// you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/assets/icon.png',
      },
    },
  ],
}
