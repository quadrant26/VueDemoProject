import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/apimobile.php',
    type: 'post',
    data: {
      act: 'index'
    }
  })
}

export function getHomeData() {
  return request({
    url: '/apimobile.php',
    type: 'post',
    params: {
      act: 'hotbelow'
    }
  })
}
