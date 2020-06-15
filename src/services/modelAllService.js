import request from '@/utils/request';
import Api from '../utils/api';

export async function getMapJsonText() {
  return request(`${Api.mapInter}/632700_full.json`, {
    method: 'POST',
  });
}