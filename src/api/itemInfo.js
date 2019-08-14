/**
  * item模块接口列表
  */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/request'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const itemInfo = {
  //qs.stringify(params)
  // 场次，票价
  itemInfo(params) {
    return axios.get(`${base.sq}itemInfo}`, {
      params: params
    });
  }
}

export default itemInfo;