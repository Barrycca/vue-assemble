/**
  * index模块接口列表
  */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/request'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const indexList = {

  // 首页数据
  indexList(params) {
    return axios.get(`${base.sq}topic}`, {
      params: params
    });
  }
}

export default indexList;