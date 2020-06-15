import { getMapJsonText } from '../services/modelAllService';

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
    },
    reducers: {
        mapList(state, { payload }) {
          debugger
            return {
                ...state,
                cityList: payload || {},
            };
        },
    },
};
