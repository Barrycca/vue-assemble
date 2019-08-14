/**
  * address模块接口列表
  */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/request'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const address = {
  //qs.stringify(params)
  // addressList 购票人地址列表
  addressList(params) {
    return axios.get(`${base.sq}addressList}`, {
      params: params
    });
  },
  //新建修改 地址
  changeAddress(params){
    return axios.get(`${base.sq}changeAddress}`, {
      params: params
    });
  },
  //获取地址详情
  addressInfo(params){
    return axios.get(`${base.sq}addressInfo}`, {
      params: params
    });
  },
  //删除地址
  deleteAdress(params) {
    return axios.get(`${base.sq}deleteAdress}`, {
      params: params
    });
  }
}

export default address;