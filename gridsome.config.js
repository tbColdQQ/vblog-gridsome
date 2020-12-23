// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'nj的VBlog',
  siteDescription: '个人博客',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://qm.tbcold.com:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['category'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ]
}
