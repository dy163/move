import request from '@/utils/request'

/**
 * 15.获取股票列表
 */
export const getList = formData => {
  return request({
    method: 'POST',
    url: '/stock/getList',
    data: formData
  })
}

/**
 * 16.添加自选股
 */
export const mySelectStockAdd = formData => {
    return request({
      method: 'POST',
      url: '/mySelectStock/add',
      data: formData
    })
  }

/**
 * 17.获取自选股列表
 */
export const mySelectStockGetList = formData => {
  return request({
    method: 'POST',
    url: '/mySelectStock/getList',
    data: formData
  })
}

/**
 * 18.删除自选股
 */
export const mySelectStockDelete = formData => {
  return request({
    method: 'POST',
    url: '/mySelectStock/delete',
    data: formData
  })
}

/**
 * 19.查询账户信息
 */
export const accountGetAccount = formData => {
  return request({
    method: 'POST',
    url: '/account/getAccount',
    data: formData
  })
}

/**
 * 20.根据关键词搜索股票
 */
export const searchStock = formData => {
  return request({
    method: 'POST',
    url: '/stock/searchStock',
    data: formData
  })
}

/**
 * 21.添加搜索记录
 */
export const searchAdd = formData => {
  return request({
    method: 'POST',
    url: '/search/add',
    data: formData
  })
}

/**
 * 22.获取搜索记录列表
*/
export const searchGetList = formData => {
  return request({
    method: 'POST',
    url: '/search/getList',
    data: formData
  })
}

/**
 * 23.清空搜索记录列表
*/
export const searchClearList = formData => {
  return request({
    method: 'POST',
    url: '/search/clearList',
    data: formData
  })
}

/**
 * 24.获取持仓股票成功
*/
export const myBuyStockGetList = formData => {
  return request({
    method: 'POST',
    url: '/myBuyStock/getList',
    data: formData
  })
}

/**
 * 25.获取资金流水列表
*/
export const fundFlowGetList = formData => {
  return request({
    method: 'POST',
    url: '/fundFlow/getList',
    data: formData
  })
}

/**
 * 26.获取交割单列表
*/
export const deliveryOrderGetList = formData => {
  return request({
    method: 'POST',
    url: '/deliveryOrder/getList',
    data: formData
  })
}

/**
 * 39.获取历史委托查询列表
*/
export const entrustHistory = formData => {
  return request({
    method: 'POST',
    url: '/entrust/history',
    data: formData
  })
}

/**
 * 40.获取今日委托查询列表
*/
export const entrustTodayGetList = formData => {
  return request({
    method: 'POST',
    url: '/entrust/todaygetList',
    data: formData
  })
}