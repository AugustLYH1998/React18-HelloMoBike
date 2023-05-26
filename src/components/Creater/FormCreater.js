import React, { useCallback } from 'react'
import { Form, Select, Row, Col, Button, Card } from 'antd'

export default function FormCreator(props) {
    const { title, items } = props.conf;
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = useCallback(() => {
        form.resetFields();
    }, []);

    // 根据type渲染类型
    const renderItem = item => {
        switch (item.type) {
            case 'select':
                return <Select >
                    {item.options.map((opt, i) => {
                        return <Select.Option key={i} value={opt.value}>{opt.label}</Select.Option>
                    })}
                </Select>
        }
    }

    // 得到每一列数据
    const renderColumns = columns => {
        return columns.map((item, k) => {
            const span = item.colspan;
            return <Col key={k} span={span}>
                <Form.Item name={item.key} label={item.label}>
                    {renderItem(item)}
                </Form.Item>
            </Col>
        });
    }

    // 得到每一行数据
    const renderRows = items => {
        return items.map((rowArr, k) => {
            return <Row key={k}>{renderColumns(rowArr)}</Row>
        })
    }

    return (
        <>
            <Card>
                {title && <h1>{title}</h1>}
                <Form layout='vertical' form={form} onFinish={onFinish}>

                    {/*
                生成器生成的样式:
                <Form.Item label="Input">
                    <Input />
                </Form.Item>

                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item> 
                */}

                    {renderRows(items)}

                    {
                        !props.nonBtn && <>
                            <Button type="primary" htmlType="submit">提交</Button>
                            <Button htmlType="button" onClick={onReset}>重置</Button>
                        </>
                    }
                </Form>
            </Card>
        </>
    )
}