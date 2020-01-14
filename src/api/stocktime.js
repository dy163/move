import request from '@/utils/request'

/**
 * 43.获取日k线数据
 */
export const klineDay = formData => {
  return request({
    method: 'POST',
    url: '/kline/day',
    data: formData
  })
}

/**
 * 44.获取周k线数据
 */
export const klineWeek = formData => {
  return request({
    method: 'POST',
    url: '/kline/week',
    data: formData
  })
}

/**
 * 45.获取月k线数据
 */
export const klineMonth = formData => {
  return request({
    method: 'POST',
    url: '/kline/month',
    data: formData
  })
}