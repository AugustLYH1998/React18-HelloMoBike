import React, { useEffect, useState } from 'react'
import { Button, Card, Table, Modal, Form, Input, Select } from 'antd'
import PermissionTree from './permissionTree'
import request from '../../utils/request'
import { uniqueKey } from '../../utils/utils'

const FormItem = Form.Item
const Option = Select.Option
export default function Permission() {
  const [role, setRole] = useState([])
  const [roleVisible, setRoleVisible] = useState(false)
  const [permissionVisible, setPermissionVisible] = useState(false)
  const [roleRecord, setRoleRecord] = useState([])
  const [menu, setMenu] = useState([])
  const [menuItem, setMenuItem] = useState([])
  const [form] = Form.useForm()

  // 获取角色列表
  const getRoleList = async () => {
    try {
      const { data } = await request('/role_list')
      setRole(uniqueKey(data.item))
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getRoleList()
  }, [])

  // 创建角色
  const createRole = () => {
    setRoleVisible(true)
  }

  //创建角色 发送至后台
  const getData = async () => {
    const { role_name, role_status } = form.getFieldsValue()
    // console.log(role_name, role_status)
    // if (role_name === undefined || role_status === undefined) {
    //   return Modal.error({
    //     title: '请输入角色信息'
    //   })
    // }
    // includes方法的用来判断一个数组是否包含一个指定的值，如果包含则返回 true 否则是false
    if ([role_name, role_status].includes(undefined)) {
      return Modal.error({
        title: '请输入角色信息'
      })
    }

    // 发起请求
    try {
      const { data } = await request({
        url: '/create_role',
        method: 'post',
        data: {
          role_name,
          role_status
        }
      })

      if (data.code === 200) {
        Modal.success({
          title: data.message
        })

        // 关闭对话框
        setRoleVisible(false)
        // 清空表单
        form.resetFields()
        // 重新请求数据
        getRoleList()
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  // 设置权限对话框可见
  const setPermissionModal = () => {
    if (roleRecord.length === 0) {
      return Modal.error({
        title: '请选择角色'
      })
    }
    setPermissionVisible(true)
  }

  // 获取所有的菜单
  const getMenu = async () => {
    try {
      const data = await request('/menu')
      setMenu(data.menu)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getMenu()
  }, [])

  // 设置权限操作请求接口
  const setPermission = async () => {
    const { data } = await request({
      url: '/set_permission',
      method: 'post',
      data: {
        id: roleRecord.id,
        menuItem
      }
    })

    if (data.code === 200) {
      Modal.success({
        title: data.message
      })

      // 关闭对话框
      setPermissionVisible(false)
      // 清空meueItem
      setMenuItem([])
      // 重新请求数据
      getRoleList()
      // 清空roleRecord
      setRoleRecord([])

    }
  }

  const columns = [
    {
      title: '角色ID',
      dataIndex: 'id',
      width: 220
    },
    {
      title: '角色名称',
      dataIndex: 'role_name',
      width: 200
    },
    {
      title: '创建时间',
      dataIndex: 'create_time'
    },
    {
      title: '使用状态',
      dataIndex: 'status',
      render(status) {
        return status === 1 ? '启用' : '停用'
      }
    },
    {
      title: '授权时间',
      dataIndex: 'authorize_time'
    },
    {
      title: '授权人',
      dataIndex: 'authorize_user_name'
    }
  ]

  // 表单布局
  const formItemLayout = {
    // label标签的布局 <Col/>组件
    labelCol: { span: 5 },
    // 输入控件设置样式
    wrapperCol: { span: 19 }
  }

  // 拿到某一行数据
  const rowSelection = {
    // 单选
    type: 'radio',
    onChange: (selectRowKeys, selectRows) => {
      setRoleRecord(selectRows[0])
      setMenuItem(selectRows[0].menu_item)
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <Card>
        <Button type="primary" onClick={createRole}>
          创建角色
        </Button>

        <Button
          type="primary"
          style={{ marginLeft: 10 }}
          onClick={setPermissionModal}
        >
          设置权限
        </Button>

      </Card>

      <Card style={{ marginTop: 10 }}>
        <Table
          columns={columns}
          bordered
          dataSource={role}
          rowSelection={rowSelection}
        />
      </Card>


      {/* 创建角色  */}
      <Modal
        title="创建角色"
        open={roleVisible}
        onCancel={() => {
          setRoleVisible(false)
        }}
        onOk={getData}
      >
        <Form form={form}>
          {/* 用户名 */}
          <FormItem label="角色名称" name="role_name" {...formItemLayout}>
            <Input placeholder="请输入角色名称" />
          </FormItem>
          <FormItem label="状态" name="role_status" {...formItemLayout}>
            <Select placeholder="请选择状态">
              <Option value={1}>启用</Option>
              <Option value={0}>禁用</Option>
            </Select>
          </FormItem>
        </Form>
      </Modal>

      {/* 设置权限 */}
      <Modal
        title="设置权限"
        open={permissionVisible}
        onCancel={() => {
          setPermissionVisible(false)
        }}
        onOk={setPermission}
      >
        <PermissionTree
          menu={menu}
          menuItem={menuItem}
          roleName={roleRecord.role_name}
          patchMenuItem={checkedKeys => {
            setMenuItem(checkedKeys)
          }}
        />
      </Modal>
    </div>
  )
}
