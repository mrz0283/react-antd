const routes = [
  {
    path: '/antdTest',
    name: 'antd示例',
    icon: 'icon-project-manage',
    children: [
      {
        path: '/antdTest/table',
        name: 'table',
        icon: 'bell',
      },
    ]
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'bell',
    component: './Welcome',
  },
  {
    path: '/404',
    name: '404',
    icon: 'smile',
    component: './404',
  },
];

export default routes;