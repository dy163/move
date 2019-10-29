import request from '@/utils/request'
/**
 * 登录接口得函数
 */
export const login = ({ mobile, code }) => request({
  method: '',
  url: '',
  data: {
    mobile,
    code
  }
})
