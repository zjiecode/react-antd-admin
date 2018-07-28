import React from 'react';
import { Icon } from 'antd';

// 定义某个表的dataSchema, 结构跟querySchema很相似, 见下面的例子
// 注意: 所有的key不能重复

// 这个配置不只决定了table的schema, 也包括用于新增/删除的表单的schema

module.exports = [
  {
    key: 'id',  // 传递给后端的key
    title: 'ID',  // 前端显示的名字

    // 其实dataType对前端的意义不大, 更重要的是生成后端接口时要用到, 所以要和DB中的类型一致
    // 对java而言, int/float/varchar/datetime会映射为Long/Double/String/Date
    dataType: 'int',  // 数据类型, 目前可用的: int/float/varchar/datetime

    // 这一列是否是主键?
    // 如果不指定主键, 不能update/delete, 但可以insert
    // 如果指定了主键, insert/update时不能填写主键的值;
    // 只有int/varchar可以作为主键, 但是实际上主键一般都是自增id
    primary: true,

    // 可用的showType: normal/radio/select/checkbox/multiSelect/textarea/image/file/cascader
    showType: 'normal',  // 默认是normal, 就是最普通的输入框

    showInTable: true,  // 这一列是否要在table中展示, 默认true
    disabled: false, // 表单中这一列是否禁止编辑, 默认false

    // 扩展接口, 决定了这一列渲染成什么样子
    render: (text, record) => text,
    showInForm: false, // 这一列是否要在表单中展示, 默认true. 这种列一般都是不需要用户输入的, DB就会给一个默认值那种
  },
  {
    key: 'code',
    title: '代码',
    dataType: 'varchar',  // 对于普通的input框, 可以设置addonBefore/addonAfter
    placeholder: '软件代码',
    validator: [{ type: 'string', required: true, message: '代码必填' }],
  },
  {
    key: 'name',
    title: '名字',
    dataType: 'varchar',
    showType: 'normal',
    validator: [{ type: 'string', required: true, message: '名字必填' }],
  },
  {
    key: 'type',
    title: '类型',
    dataType: 'int',
    showType: 'select',
    options: [{ key: '1', value: '安卓' }, { key: '2', value: '苹果' }, { key: '3', value: 'PC' }],
    validator: [{ type: 'string', required: true, message: '请选择类型' }],
    // 对于dataSchema可以设置校验规则, querySchema不能设置
    // 设置校验规则, 参考https://github.com/yiminghe/async-validator#rules
  },
  {
    key: 'createUserId',
    title: '创建者',
    dataType: 'int',
    showType: 'normal',
    showInForm: false,
  },
  {
    key: 'createTime',
    title: '创建时间',
    dataType: 'datetime',
    showType: 'normal',
    showInForm: false,
  },
  {
    key: 'des',
    title: '说明',
    dataType: 'varchar',
    showType: 'normal',
    validator: [{ type: 'string', required: true, message: '说明必填' }],
  },
];
