import React from 'react'
import FormCreator from '../../components/Creater/FormCreater'

const cityConf = {
    title: 'xxx页面',
    items: [
        //一行为一个数组
        [
            //每行中的表单每一项为一个对象
            {
                label: '城市',
                key: 'name',
                value: 1,
                type: 'select',
                colspan: 24,
                options: [
                    { label: '北京市', value: 1 },
                    { label: '天津市', value: 2 },
                    { label: '深圳市', value: 3 },
                    { label: '武汉市', value: 4 },
                ]
            },
            {
                label: '授权状态',
                type: 'select',
                key: 'status',
                colspan: 24,
                options: [
                    { label: '已授权', value: 1 },
                    { label: '未授权', value: 2 },
                ]
            },
        ],
        [],
        [],
        []
    ]
}

export default function form() {

    return (
        <div>
            <FormCreator conf={cityConf} />
        </div>
    )
}
