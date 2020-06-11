import request from '@/utils/request';
import Api from './api';

// export async function addRule(params) {
//     return request('/api/BLOCK_NAME', {
//       method: 'POST',
//       data: {
//         ...params,
//       },
//     });
//   }

let HttpFunctions = {};

for (let key in Api){
    let pathArr = Api[key].split(' ');
    let method = pathArr[0];
    let url = pathArr[1];
    HttpFunctions[key] = async function (params) {
        return request(url, {
          method,
          data: {
            ...params,
          },
        });
      }
}

export default HttpFunctions;



