import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'D:/work/antd-pro/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    "path": "/",
    "redirect": "/login",
    "exact": true
  },
  {
    "path": "/",
    "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "layouts" */'../../layouts'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../../layouts').default,
    "routes": [
      {
        "path": "/antdTest",
        "icon": "icon-project-manage",
        "routes": [
          {
            "path": "/antdTest/table",
            "icon": "bell",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__table__index" */'../table/index.js'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../table/index.js').default,
            "exact": true
          },
          {
            "path": "/antdTest/Calendar",
            "icon": "bell",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__Calendar__index" */'../Calendar/index.js'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../Calendar/index.js').default,
            "exact": true
          },
          {
            "path": "/antdTest/upload",
            "icon": "bell",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__upload__index" */'../upload/index.js'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../upload/index.js').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/work/antd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/D3",
        "icon": "icon-project-manage",
        "routes": [
          {
            "path": "/D3/table",
            "icon": "bell",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__D3__index" */'../D3/index.js'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../D3/index.js').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/work/antd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/echarts",
        "icon": "icon-project-manage",
        "routes": [
          {
            "path": "/Echarts/Bar",
            "icon": "bell",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__Echarts__Bar__index" */'../Echarts/Bar/index.js'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../Echarts/Bar/index.js').default,
            "exact": true
          },
          {
            "path": "/Echarts/Line",
            "icon": "bell",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__Echarts__Line__index" */'../Echarts/Line/index.js'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../Echarts/Line/index.js').default,
            "exact": true
          },
          {
            "path": "/Echarts/Pie",
            "icon": "bell",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__Echarts__Pie__index" */'../Echarts/Pie/index.js'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../Echarts/Pie/index.js').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/work/antd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/editor",
        "icon": "icon-project-manage",
        "routes": [
          {
            "path": "/editor/flow",
            "icon": "bell",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__editor__flow__index" */'../editor/flow/index.js'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../editor/flow/index.js').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/work/antd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/other",
        "icon": "icon-project-manage",
        "routes": [
          {
            "path": "/other/translateEn",
            "icon": "bell",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__Translate__index" */'../Translate/index.js'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../Translate/index.js').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/work/antd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/welcome",
        "name": "welcome",
        "icon": "smile",
        "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__Welcome" */'../Welcome'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../Welcome').default,
        "exact": true
      },
      {
        "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__404" */'../404'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../404').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('D:/work/antd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__404" */'../404'),
      LoadingComponent: require('D:/work/antd-pro/src/components/PageLoading/index').default,
    })
    : require('../404').default,
    "exact": true
  },
  {
    "component": () => React.createElement(require('D:/work/antd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return (
<RendererWrapper0>
          <Router history={history}>
      { renderRoutes(routes, props) }
    </Router>
        </RendererWrapper0>
  );
}
