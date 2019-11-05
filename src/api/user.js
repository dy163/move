import request from '@/utils/request'

/**
 * 获取注册短信验证码
 */
export const getRegisterCode = (phone) => {
  let formData = new FormData()
  formData.append('phone', phone)
  formData.append('status', 'register')
  return request({
    method: 'POST',
    url: '/user/getRegisterCode',
    data: formData
  })
}
/**
 *校验注册短信验证码
 */
export const identifyRegisterCode = (phone, code) => {
  let formData = new FormData()
  formData.append('phone', phone)
  formData.append('code', code)
  formData.append('status', 'register')
  return request({
    method: 'POST',
    url: '/user/identifyRegisterCode',
    data: formData
  })
}
/**
 * 注册信息
 */
export const register = formData => {
  return request({
    method: 'POST',
    url: '/user/register',
    data: formData
  })
}

/**
 * 图片上传
 */
export const uploadImg = formData  => {
  return request({
    method: 'POST',
    url: '/file/uploadImg',
    data: formData
  })
}

/**
 * 账号（手机号或用户编号）密码登录
 */
export const login = formData  => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: formData
  })
}