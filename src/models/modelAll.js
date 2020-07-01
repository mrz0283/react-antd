import { getMapJsonText, translateViews, googleTtranslateView  } from '../services/modelAllService';

export default {
  namespace: 'modelAll',
  state: {
  },

  effects: {
    *getMapJson({ payload, callback }, { call, put }) {
      const response = yield call(getMapJsonText, payload);
      yield put({
        type: 'mapList',
        payload: response,
      });
      if (callback) { callback(response); }
    },
    *translateView({ payload, callback }, { call, put }) {
      const response = yield call(translateViews, payload);
      if (callback) { callback(response); }
    },
    *googleTtranslateView({ payload, callback }, { call, put }) {
      const response = yield call(googleTtranslateView, payload);
      yield put({
        type: 'googleLanageList',
        payload: response,
      });
      if (callback) { callback(response); }
    },
  },
  reducers: {
    mapList(state, { payload }) {
      return {
        ...state,
        cityList: payload || {},
      };
    },
    googleLanageList(state, { payload }) {
      debugger
      // return {
      //     ...state,
      //     cityList: payload || {},
      // };
    },
  },
};
