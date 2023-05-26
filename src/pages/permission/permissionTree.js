import React from 'react'
import { Form, Input, Select, Tree } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

export default function PermissionTree(props) {
  const { menu, menuItem, roleName, patchMenuItem } = props

  // 表单布局
  const formItemLayout = {
    // label标签的布局 <Col/>组件
    labelCol: { span: 5 },
    // 输入控件设置样式
    wrapperCol: { span: 19 }
  }
  /* 
  react 是单向数据流 数据的流向只能通过props由父组件向子组件
  props是一个只读属性，子组件不能修改一个父组件在渲染时传进来的props
  */
  const onCheck = checkedKeys => {
    // console.log(checkedKeys)
    patchMenuItem(checkedKeys)
  }

  return (
    <div>
      <Form
        initialValues={{
          role_status: 1
        }}
      >
        <FormItem label="角色名称" {...formItemLayout}>
          <Input value={roleName} disabled />
        </FormItem>
        <FormItem label="状态" name="role_status" {...formItemLayout}>
          <Select placeholder="请选择状态">
            <Option value={1}>启用</Option>
            <Option value={0}>禁用</Option>
          </Select>
        </FormItem>
      </Form>

      <Tree
        checkable
        treeData={menu}
        // 默认选中复选框的树节点
        checkedKeys={menuItem}
        // 展开默认节点
        expandedKeys={menuItem}
        onCheck={onCheck}
        // 自定义节点 
        fieldNames={{
          title: 'label'
        }}
      />
    </div>
  )
}
