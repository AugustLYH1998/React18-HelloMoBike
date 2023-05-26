// 区分环境 是生产环境还是开发环境
// development 开发环境接口  production 生产环境的接口

const DEVELOPMENT = 'https://www.fastmock.site/mock/2728fdedd7e9063e308598df4c68fe46/_api'
const PRODUCTION = 'https://www.fastmock.site/mock/2728fdedd7e9063e308598df4c68fe46/_api'

const BASE_URL =
  process.env.NODE_ENV === 'development' ? DEVELOPMENT : PRODUCTION

const TIMEOUT = 3000

export { BASE_URL, TIMEOUT }

/* 

process对象是node  全局变量
env是proces的属性，这个属性返回的是用户环境的信息
MODE_ENV 
craco start set MODE_ENV=development

windows set
mac =>linux

yarn add -D cross-env 跨平台设置mode_env参数
*/
