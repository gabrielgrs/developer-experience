module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Developer Experience`,
        short_name: `DevXP`,
        start_url: `/`,
        background_color: `#0b0b0b`,
        theme_color: `darkred`,
        display: `fullscreen`,
        icon: 'src/images/logo192.png',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ],
}
