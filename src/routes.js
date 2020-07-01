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
        name: '折线图',
        icon: 'bell',
      },
    ]
  },
  {
    path: '/Echarts',
    name: 'echarts示例',
    icon: 'icon-project-manage',
    children: [
      {
        path: '/Echarts/Bar',
        name: '柱状图',
        icon: 'bell',
      },
      {
        path: '/Echarts/Line',
        name: '折线图',
        icon: 'bell',
      },
      {
        path: '/Echarts/Pie',
        name: '饼状图',
        icon: 'bell',
      },
    ]
  },
  {
    path: '/editor',
    name: '拖拽',
    icon: 'icon-project-manage',
    children: [
      {
        path: '/editor/flow',
        name: '拖拽方块',
        icon: 'bell',
      },
    ]
  },
  {
    path: '/other',
    name: '其他',
    icon: 'icon-project-manage',
    children: [
      {
        path: '/other/translateEn',
        name: '翻译',
        icon: 'bell',
      },
    ]
  },
  // {
  //   path: '/translateEn',
  //   name: '翻译',
  //   icon: 'smile',
  // },
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