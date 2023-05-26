import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

export default function NotLogin() {

    const navigator = useNavigate()

    const back = () => {
        navigator('/')
    }

    return (
        <div
            style={{
                backgroundColor: '#ffffff',
                height: 'calc(62vh)',
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
            }}
        >
            <h1>please login...</h1>

            <Button onClick={back} type='primary'>go to login</Button>
        </div>
    )
}
