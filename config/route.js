const routes = [
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
            name: 'table',
            icon: 'bell',
            component: '../../src/pages/table/index.js',
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