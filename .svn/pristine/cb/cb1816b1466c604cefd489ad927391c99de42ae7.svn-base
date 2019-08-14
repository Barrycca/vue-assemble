import request from '@/utils/request'

export function loginByUsername(username, password) {
  return request.get('/common2/gettoken', {params: { UserName: username, pwd: password }}).then(res => res)
}

export function logout() {
  return request.get('/common2/Logout').then(res => res)
}
  
export function getUserInfo() {
  return request.get('/tools/submit_ajax.ashx?action=user_asyn_login').then(res => res)
}

export function picToBase(url) {
  return request.post('/tools/submit_ajax.ashx?action=pic_2_base64', {
     url: url
   }).then(res => res)
}