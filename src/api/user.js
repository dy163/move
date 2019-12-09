import request from '@/utils/request'

/**
 * 1.获取注册短信验证码
 */
export const getRegisterCode = (phone) => {
  const formData = new FormData()
  formData.append('phone', phone)
  formData.append('status', 'register')
  return request({
    method: 'POST',
    url: '/user/getRegisterCode',
    data: formData
  })
}
/**
 * 2.校验注册短信验证码
 */
export const identifyRegisterCode = (phone, code) => {
  const formData = new FormData()
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
 * 3.注册信息
 */
export const register = formData => {
  return request({
    method: 'POST',
    url: '/user/register',
    data: formData
  })
}

/**
 * 4.图片上传
 */
export const uploadImg = (file)  => {
  const formData = new FormData();
  formData.append("file", file.file);
  return request({
    method: 'POST',
    url: '/file/uploadImg',
    data: formData
  })
}

/**
 * 5.账号（手机号或用户编号）密码登录
 */
export const login = formData  => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: formData
  })
}

/**
 * 6.退出登录
 */
export const exit = ()  => {
  return request({
    method: 'POST',
    url: '/user/exit'
  })
}

/**
 * 7.获取修改密码短信验证码
 */
export const getResetPaCode = formData  => {
  return request({
    method: 'POST',
    url: '/user/getResetPaCode',
    data: formData
  })
}

/**
 * 8.校验修改密码短信验证码
 */
export const identifyResetPaCode = formData  => {
  return request({
    method: 'POST',
    url: '/user/identifyResetPaCode',
    data: formData
  })
}

/**
 * 9.修改密码
 */
export const resetPassword = formData  => {
  return request({
    method: 'POST',
    url: '/user/resetPassword',
    data: formData
  })
}

/**
 * 10.获取修改手机号短信验证码
 */
export const getUpdatePhoneCode = formData  => {
  return request({
    method: 'POST',
    url: '/user/getUpdatePhoneCode',
    data: formData
  })
}

/**
 * 11.获取修改手机号短信验证码
 */
export const updatePhone = formData  => {
  return request({
    method: 'POST',
    url: '/user/updatePhone',
    data: formData
  })
}

/**
 * 12.更改头像（先走上传接口获取上传图片路径）
 */
export const updateHeaderImg = formData  => {
  return request({
    method: 'POST',
    url: '/user/updateHeaderImg',
    data: formData
  })
}

/**
 * 13.更新个人简介
 */
export const updateIntro = formData  => {
  return request({
    method: 'POST',
    url: '/user/updateIntro',
    data: formData
  })
}

/**
 * 14.获取用户信息
 */
export const getUserInfo = formData  => {
  return request({
    method: 'POST',
    url: '/user/getUserInfo',
    data: formData
  })
}