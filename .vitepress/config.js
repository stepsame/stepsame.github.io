const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
  await generatePaginationPages(3)
  const posts = await getPosts()
  return {
    title: "Bu Tong's Blog",
    base: '/',
    description: 'Code & Fun.',
    themeConfig: {
      siteTitle: "Bu Tong's Blog",
      nav: [
        {text: 'Home', link: '/'},
        {text: 'Archives', link: 'pages/archives'},
        {text: 'Tags', link: 'pages/tags'},
        {text: 'About', link: 'pages/about'},
      ],
      socialLinks: [
        {icon: 'github', link: 'https://github.com/stepsame'},
        {icon: 'linkedin', link: 'https://www.linkedin.com/in/tong-bu-679b8289/'},
        {icon: 'twitter', link: 'https://twitter.com/butong_dev'},
      ],
      // custom
      pageSize: 3,
      posts: posts,
    },
  }
}

module.exports = config()
