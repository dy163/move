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
    url: 'user/getRegisterCode',
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
    url: 'user/identifyRegisterCode',
    data: formData
  })
}
/**
 * 注册信息
 */
export const register = (
  phone,
  username,
  password,
  repassword,
  edu_bg,
  position,
  ID_card_reverse,
  ID_card_front,
  ID_card_and_myself,) => {
  let formData = new FormData()
  formData.append('phone', phone)
  formData.append('username', username)
  formData.append('password', password)
  formData.append('repassword', repassword)
  formData.append('ID_card_reverse', ID_card_reverse)
  formData.append('ID_card_front', ID_card_front)
  formData.append('ID_card_and_myself', ID_card_and_myself)
  formData.append('edu_bg', edu_bg)
  formData.append('position', position)
  return request({
    method: 'POST',
    url: 'user/register',
    data: formData
  })
}
