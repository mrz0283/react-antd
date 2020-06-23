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
        icon: 'icon-project-manage',
        routes: [
          {
            path: '/antdTest/table',
            icon: 'bell',
            component: '../../src/pages/table/index.js',
          },
          {
            path: '/antdTest/Calendar',
            icon: 'bell',
            component: '../../src/pages/Calendar/index.js',
          },
          {
            path: '/antdTest/upload',
            icon: 'bell',
            component: '../../src/pages/upload/index.js',
          },
        ]
      },
      {
        path: '/D3',
        icon: 'icon-project-manage',
        routes: [
          {
            path: '/D3/table',
            icon: 'bell',
            component: '../../src/pages/D3/index.js',
          },
        ]
      },
      {
        path: '/echarts',
        icon: 'icon-project-manage',
        routes: [
          {
            path: '/Echarts/Bar',
            icon: 'bell',
            component: '../../src/pages/Echarts/Bar/index.js',
          },
          {
            path: '/Echarts/Line',
            icon: 'bell',
            component: '../../src/pages/Echarts/Line/index.js',
          },
          {
            path: '/Echarts/Pie',
            icon: 'bell',
            component: '../../src/pages/Echarts/Pie/index.js',
          },
        ]
      },
      {
        path: '/editor',
        icon: 'icon-project-manage',
        routes: [
          {
            path: '/editor/flow',
            icon: 'bell',
            component: '../../src/pages/editor/flow/index.js',
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