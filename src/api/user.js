import request from '@/utils/request'
/**
 * 登录接口得函数
 */
export const login = ({ account, password }) => request({
  method: 'post',
  url: 'user/login',
  data: {
    account,
    password,
    status: 'register'
  }
})
/**
 * 获取注册短信验证码
 */
export const signRegister = ({ phone }) => {
  return request({
    method: 'POST',
    url: 'user/sendMessage',
    data: {
      phone,
      status: 'register'
    }
  })
}
