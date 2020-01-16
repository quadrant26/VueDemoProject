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

export function getHomeData(type, page) {
  return request({
    url: '/apimobile.php',
    method: 'post',
    data: {
      act: type,
      page: page || 1
    }
  })
}
