const routes = [
  {
    path: '/',
    redirect: '/antdTest/table',
  },
  {
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/antdTest',
        name: 'antd示例',
        icon: 'icon-project-manage',
        routes: [
          {
            path: '/antdTest/table',
            name: '表格',
            icon: 'bell',
            component: '../../src/pages/table/index.js',
          },
          {
            path: '/antdTest/Calendar',
            name: '表格',
            icon: 'bell',
            component: '../../src/pages/Calendar/index.js',
          },
          {
            path: '/antdTest/upload',
            name: '表格',
            icon: 'bell',
            component: '../../src/pages/upload/index.js',
          },
        ]
      },
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];

export default routes;