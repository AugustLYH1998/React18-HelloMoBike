// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入各种图表，图表后缀都为 Chart
import {
  BarChart,
  PieChart,
  LineChart
  /* 
  // 雷达图
  RadarChart,
  // 散点图
  ScatterChart,
  // 象形柱状图
  PictorialBarChart
  */
} from 'echarts/charts' // 这里我引用两个类型的图表

// 引入提示框，标题，直角坐标系等组件，组件后缀都为 Component
import {
  // 标题组件
  TitleComponent,
  // 提示框组件
  TooltipComponent,
  // 直角坐标系组件
  GridComponent,
  // 图例组件
  LegendComponent
  // GeoCoComponent
} from 'echarts/components'


/* 
浏览器端图表库大多会选择 SVG 或者 Canvas 进行渲染
ECharts 按需引入的时候不再提供任何渲染器，所以需要选择引入 CanvasRenderer 或者 SVGRenderer 作为渲染器。
这样的好处是假如你只需要使用 svg 渲染模式，打包的结果中就不会再包含无需使用的 CanvasRenderer 模块。

数据量不大的场景下，两种渲染器都可以适用，并不需要太多纠结

如果图表运行在低端安卓机，或者我们在使用一些特定图表如 水球图 等，SVG 渲染器可能效果更好。
数据量较大（经验判断 > 1k）、较多交互时，建议选择 Canvas 渲染器。


*/
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  PieChart,
  LineChart,
  /*   
  RadarChart,
  ScatterChart,
  PictorialBarChart, 
  */
  CanvasRenderer
])

export default echarts
