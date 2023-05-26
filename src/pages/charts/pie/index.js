import React, { useEffect } from 'react'
import { Card } from 'antd'
import echarts from '../../../plugin/echarts'

export default function Pie() {
  const option = {
    title: {
      text: '用户骑行订单',
      // 水平位置
      x: 'center'
    },
    // legend属性是对图例组件的相关配置
    legend: {
      // 设置图例的朝向
      orient: 'horizontal',
      // 偏移方向
      right: 10,
      top: 30,
      bottom: 20,
      // 图例上显示的文字信息，如果不设置该项，默认会以series设置的信息作为图例信息。如果设置该项，必须与series设置的信息一致，才会生效。
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    // 提示框，即鼠标移动上去会显示的内容
    tooltip: {
      // item则鼠标悬浮到折线点的时候显示全部数据
      trigger: 'item',
      // 格式化配置内容样式 饼图 {a}=>series.name {b}=>series.data.name {c}=>series.data.value {d}=>百分比
      formatter: '{a}<br/>{b}:{c}({d}%)'
    },
    series: [
      {
        name: '订单量',
        type: 'pie',
        data: [
          {
            value: 1000,
            name: '周一'
          },
          {
            value: 1000,
            name: '周二'
          },
          {
            value: 2000,
            name: '周三'
          },
          {
            value: 1500,
            name: '周四'
          },
          {
            value: 3000,
            name: '周五'
          },
          {
            value: 2000,
            name: '周六'
          },
          {
            value: 1200,
            name: '周日'
          }
        ]
      }
    ]
  }

  const roundPie = {
    title: {
      text: '用户骑行订单',
      x: 'center'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a}<br/>{b}:{c}({d}%)'
    },
    series: [
      {
        name: '订单量',
        type: 'pie',
        radius: ['50%', '80%'],
        center: ['50%', '50%'],
        data: [
          {
            value: 1000,
            name: '周一'
          },
          {
            value: 1000,
            name: '周二'
          },
          {
            value: 2000,
            name: '周三'
          },
          {
            value: 1500,
            name: '周四'
          },
          {
            value: 3000,
            name: '周五'
          },
          {
            value: 2000,
            name: '周六'
          },
          {
            value: 1200,
            name: '周日'
          }
        ]
      }
    ]
  }

  function initPie() {
    const Chart = echarts.init(document.getElementById('pie'))
    Chart.setOption(option)
  }

  function initRoundPie() {
    const Chart = echarts.init(document.getElementById('roundpie'))
    Chart.setOption(roundPie)
  }

  useEffect(() => {
    initPie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    initRoundPie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Card>
        <div id="pie" style={{ height: 500 }}></div>
      </Card>
      <Card style={{ marginTop: 10 }}>
        <div id="roundpie" style={{ height: 500 }}></div>
      </Card>
    </div>
  )
}
