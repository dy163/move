import request from '@/utils/request'

/**
 * 27.获取资讯要闻轮播列表
 */
export const newsGetLunbo = formData => {
  return request({
    method: 'POST',
    url: '/news/getLunbo',
    data: formData
  })
}

/**
 * 28.获取资讯要闻快讯标题列表
 */
export const newsGetFlash = formData => {
  return request({
    method: 'POST',
    url: '/news/getFlash',
    data: formData
  })
}

/**
 * 29.获取资讯要闻置顶列表
 */
export const newsGetTop = formData => {
  return request({
    method: 'POST',
    url: '/news/getTop',
    data: formData
  })
}

/**
 * 30.获取资讯要闻热点事件滑动列表
 */
export const newsGetRoll = formData => {
  return request({
    method: 'POST',
    url: '/news/getRoll',
    data: formData
  })
}

/**
 * 31.获取资讯要闻热点事件列表
 */
export const newsGetHot = formData => {
  return request({
    method: 'POST',
    url: '/news/getHot',
    data: formData
  })
}


/**
 * 32.获取资讯要闻热点事件查看更多列表
 */
export const newsGetList = formData => {
    return request({
      method: 'POST',
      url: '/news/getList',
      data: formData
    })
  }

/**
 * 33.获取资讯要闻详情
 */
export const newsGetDetail = formData => {
  return request({
    method: 'POST',
    url: '/news/getDetail',
    data: formData
  })
}

/**
 * 34.获取资讯公告列表
 */
export const noteGetList = formData => {
  return request({
    method: 'POST',
    url: '/note/getList',
    data: formData
  })
}

/**
 * 35.获取资讯公告详情
 */
export const noteGetDetail = formData => {
  return request({
    method: 'POST',
    url: '/note/getDetail',
    data: formData
  })
}

/**
 * 36.获取资讯推送列表（推送详情走要闻详情接口）
 */
export const newsGetPush = formData => {
  return request({
    method: 'POST',
    url: '/news/getPush',
    data: formData
  })
}

/**
 * 37.获取资讯自选列表(自选详情走公告详情接口)
 */
export const noteGetMySelect = formData => {
  return request({
    method: 'POST',
    url: '/note/getMySelect',
    data: formData
  })
}

/**
 * 38.获取资讯自选更多列表
 */
export const noteGetMore = formData => {
  return request({
    method: 'POST',
    url: '/note/getMore',
    data: formData
  })
}