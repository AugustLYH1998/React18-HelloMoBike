import React, { useEffect } from 'react'
import { Card } from 'antd'
import echarts from '../../../plugin/echarts'

export default function Bar() {
  const baseBarOption = {
    title: {
      text: '用户骑行订单'
    },

    // 提示框，即鼠标移动上去会显示的内容
    tooltip: {
      // 触发类型,轴触发，axis 鼠标 悬浮到某一条柱状图的时候显示全部数据 item则鼠标悬浮到折线点的时候显示全部数据
      trigger: 'axis'
    },
    // x轴
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    // y轴
    yAxis: {
      // 如果type的属性是value,不需要配置数据，y轴会自动去series下找数据进行图表绘制
      type: 'value'
    },
    // series主要配置的是Y轴的数据
    series: [
      {
        // name属性就是相当于Y轴的名称
        name: '订单量',
        // type属性代表图标的类型 bar代表的是柱状图、line代表折线图、pie代表饼图
        type: 'bar',
        // data属性就是Y轴的值 要与X轴对应起来
        data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
      }
    ]
  }

  // y 轴有多个数据 直观的对比同一阶段的数据
  const barOption = {
    title: {
      text: '用户骑行订单'
    },
    // legend属性是对图例组件的相关配置
    legend: {
      data: ['OFO', '摩拜', '小蓝']
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'OFO',
        type: 'bar',
        data: [2000, 3000, 5500, 7000, 8000, 12000, 20000]
      },
      {
        name: '摩拜',
        type: 'bar',
        data: [1500, 3000, 4500, 6000, 8000, 10000, 15000]
      },
      {
        name: '小蓝',
        type: 'bar',
        data: [1000, 2000, 2500, 4000, 6000, 7000, 8000]
      }
    ]
  }

  function initBaseBar() {
    const Chart = echarts.init(document.getElementById('baseBar'), null, {
      // 推荐使用div控制大小
      width: 600,
      height: 500
    })
    Chart.setOption(baseBarOption)
  }

  function initBar() {
    const Chart = echarts.init(document.getElementById('bar'))
    Chart.setOption(barOption)
  }

  useEffect(() => {
    initBaseBar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    initBar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Card>
        <div id="baseBar" style={{ height: 500 }}></div>
      </Card>
      <Card style={{ marginTop: 10 }}>
        <div id="bar" style={{ height: 500 }}></div>
      </Card>
    </div>
  )
}
