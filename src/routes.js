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
      {
        path: '/antdTest/Calendar',
        name: 'Calendar',
        icon: 'bell',
      },
      {
        path: '/antdTest/upload',
        name: 'upload',
        icon: 'bell',
      },
    ]
  },
  {
    path: '/D3',
    name: 'D3示例',
    icon: 'icon-project-manage',
    children: [
      {
        path: '/D3/table',
        name: '表格',
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