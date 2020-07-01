import request from '@/utils/request';
import Api from '../utils/api';
import md5 from "js-md5";

export async function getMapJsonText() {
  return request(`${Api.mapInter}/632700_full.json`, {
    method: 'POST',
  });
}

export async function translateViews(parame) {
  const sign= md5(`20200624000504921${parame.content}1435660288M2bZtUmfBV2wAXlEyOaJ`)
  debugger
  return request(`${Api.translate}?appid=20200624000504921&salt=1435660288&from=${parame.from}&to=${parame.to}&q=${parame.content}&sign=${sign}`, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  });
}

export async function googleTtranslateView(parame) {
  // const sign= md5(`20200624000504921${parame.content}1435660288M2bZtUmfBV2wAXlEyOaJ`)
  // debugger
  return request(`${Api.googleTranslate}?client=webapp&sl=auto&tl=zh-CN&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=sos&dt=ss&dt=t&otf=1&ssel=0&tsel=0&xid=45662847&kc=3&tk=202160.382102&q=123`, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  });
}