/**
  * observer模块接口列表
  */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/request'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const observer = {
  //qs.stringify(params)
  // observerList 观演人列表
  observerList(params) {
    return axios.get(`${base.sq}observerList}`, {
      params: params
    });
  },
  //新建修改 观演人
  changeObserver(params){
    return axios.get(`${base.sq}changeObserver}`, {
      params: params
    });
  },
  //获取观演人详情
  observerInfo(params){
    return axios.get(`${base.sq}observerInfo}`, {
      params: params
    });
  },
  //删除观演人
  deleteObserver(params) {
    return axios.get(`${base.sq}deleteObserver}`, {
      params: params
    });
  }
}

export default observer;