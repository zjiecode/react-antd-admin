import React from 'react';
import { Icon } from 'antd';

// 定义某个表的querySchema
// schema的结构和含义参考下面的例子
// 注意: 所有的key不能重复

module.exports = [
  {
    key: 'id',  // 传递给后端的字段名
    title: 'ID',  // 前端显示的名称
    placeholder: 'ID',  // 提示语, 可选
    // 数据类型, 前端会根据数据类型展示不同的输入框
    // 目前可用的dataType: int/float/varchar/datetime
    // 为啥我会把字符串定义为varchar而不是string呢...我也不知道, 懒得改了...
    dataType: 'int',
    // 显示类型, 一些可枚举的字段, 比如type, 可以被显示为单选框或下拉框
    // 默认显示类型是normal, 就是一个普通的输入框, 这时可以省略showType字段
    // 目前可用的showType: normal/select/radio/between/checkbox/multiSelect/cascader
    // between只能用于int/float/datetime, 会显示2个输入框, 用于范围查询
    showType: 'normal',
    // 有一点要注意, 就算showType是normal, 也不意味是等值查询, 只是说传递给后台的是单独的一个值
    // 至于后台用这个值做等值/大于/小于/like, 前端不关心
    // 对于varchar类型的字段, 可以设置前置标签和后置标签
  },
  {
    key: 'code',
    title: '代码',
    placeholder: '代码',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'type',
    title: '类型',
    dataType: 'int',
    showType: 'select',  // 下拉框选择, antd版本升级后, option的key要求必须是string, 否则会有个warning, 后端反序列化时要注意
    options: [{ key: '1', value: '安卓' }, { key: '2', value: '苹果' }, { key: '3', value: 'PC' }],
    // defaultValue: '', // 这个defaultValue必须和options中的key是对应的
  },
];
