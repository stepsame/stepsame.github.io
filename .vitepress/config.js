const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
  await generatePaginationPages(3)
  const posts = await getPosts()
  return {
    title: "Tommy Bu's Blog",
    base: '/',
    description: 'Code & Fun.',
    themeConfig: {
      siteTitle: "Tommy Bu's Blog",
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
      footer: {
        message: 'Powered by <a class="vitepress" target="_blank" href="//vitepress.vuejs.org/">VitePress - 1.0.0-alpha.29</a> | Theme by <a class="vitepress" target="_blank" href="//github.com/airene/vitepress-blog-pure">Vitepress-blog-pure</a>',
        copyright: 'Copyright © 2022-present Tommy Bu'
      },
      // custom
      pageSize: 3,
      posts: posts,
    },
  }
}

module.exports = config()
