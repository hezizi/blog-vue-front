import { BasicLayout } from '@/layouts'

export default [{
  path: '/',
  component: BasicLayout,
  children: [
    {
      // 首页
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    }, {
      // 文章详情
      path: '/article/:articleId',
      name: 'article',
      component: () => import('@/views/article'),
      props: true
    }, {
      // 标签
      path: '/tag',
      name: 'tag',
      component: () => import('@/views/tag')
    }, {
      // 归档
      path: '/archive',
      name: 'archive',
      component: () => import('@/views/archive')
    }, {
      // 关于
      path: '/about',
      name: 'about',
      component: () => import('@/views/about')
    }
  ]
}, {
  // 404页面
  path: '*',
  component: () => import('@/views/error/Error_404')
}]
