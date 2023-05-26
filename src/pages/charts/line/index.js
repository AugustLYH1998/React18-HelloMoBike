import React, { useEffect } from 'react'
import { Card } from 'antd'
import echarts from '../../../plugin/echarts'

export default function Line() {
  const optionLine = {
    title: {
      text: '用户骑行订单'
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
        name: '订单量',
        type: 'line',
        data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
      }
    ]
  }

  const optionDoubleLine = {
    title: {
      text: '用户骑行订单'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: ['OFO订单量', '摩拜订单量']
    },
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'OFO订单量',
        type: 'line',
        data: [1200, 3000, 4500, 6000, 8000, 12000, 20000]
      },
      {
        name: '摩拜订单量',
        type: 'line',
        data: [1000, 2000, 5500, 6000, 8000, 10000, 12000]
      }
    ]
  }

  function initLine() {
    const Chart = echarts.init(document.getElementById('line'))
    Chart.setOption(optionLine)
  }

  function initDoubleLine() {
    const Chart = echarts.init(document.getElementById('initdoubleline'))
    Chart.setOption(optionDoubleLine)
  }

  useEffect(() => {
    initLine()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    initDoubleLine()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Card>
        <div id="line" style={{ height: 500 }}></div>
      </Card>
      <Card style={{ marginTop: 10 }}>
        <div id="initdoubleline" style={{ height: 500 }}></div>
      </Card>
    </div>
  )
}
