import request from '@/utils/request'
/**
 * 27.获取资讯要闻列表
 */
export const newsGetList = formData => {
    return request({
      method: 'POST',
      url: '/news/getList',
      data: formData
    })
  }

/**
 * 28.获取资讯要闻详情
 */
export const newsGetDetail = formData => {
  return request({
    method: 'POST',
    url: '/news/getDetail',
    data: formData
  })
}

/**
 * 29.获取资讯公告列表
 */
export const noteGetList = formData => {
  return request({
    method: 'POST',
    url: '/note/getList',
    data: formData
  })
}

/**
 * 30.获取资讯公告列表
 */
export const noteGetDetail = formData => {
  return request({
    method: 'POST',
    url: '/note/getDetail',
    data: formData
  })
}

/**
 * 31.获取资讯推送列表（推送详情走要闻详情接口）
 */
export const newsGetPush = formData => {
  return request({
    method: 'POST',
    url: '/news/getPush',
    data: formData
  })
}

/**
 * 32.获取资讯自选列表(自选详情走公告详情接口)
 */
export const noteGetMySelect = formData => {
  return request({
    method: 'POST',
    url: '/note/getMySelect',
    data: formData
  })
}