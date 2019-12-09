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