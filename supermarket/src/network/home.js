import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/apimobile.php',
    method: 'post',
    data: {
      act: 'index'
    }
  })
}

export function getHomeData() {
  return request({
    url: '/apimobile.php',
    method: 'post',
    data: {
      act: 'hotbelow'
    }
  })
}
