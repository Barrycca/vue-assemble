import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state:{
    token: getToken(),
    name:'',
    avatar: '',
    roles: [],
    vendorType:0,
    answer: []
  },
  mutations:{
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_VENDOR_TYPE: (state, type) => {
      state.vendorType = type
    },
    ADD: (state, name) => {
      state.answer.push(name);
      
    }
  },
  actions:{
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          let token = response.ResultData
          commit('SET_TOKEN', token)
          setToken(token)
          resolve() // 完成
        }).catch(error => {
          reject(error) // 失败
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          const data = response.ResultData
          const roles = data.PathNames
          if (roles && roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.Name)
          commit('SET_AVATAR', data.Avatar)
          commit('SET_VENDOR_TYPE', 1)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
}

export default user