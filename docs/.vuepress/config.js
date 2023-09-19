module.exports = {
  title: 'YH的个人博客',
  description: '杨豪的个人博客',
  theme: 'reco',
  base: '/yhBlog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
        { text: '首页', link: '/' },
        { 
            text: 'YH的 JavaScript 博客', 
            items: [
                { text: '博客园', link: 'https://www.cnblogs.com/yanghao-blogs' },
                { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
            ]
        }
    ],
    sidebar: [
      {
          title: '欢迎学习',
          path: '/',
          collapsable: false, // 不折叠
          children: [
              { title: "学前必读", path: "/" }
          ]
      },
      {
        title: "基础学习",
        path: '/handbook/firstPage',
        collapsable: false, // 不折叠
        children: [
          { title: "第一章", path: "/handbook/firstPage" },
          { title: "第二章", path: "/handbook/secondPage" }
        ],
      }
    ]
  }
}