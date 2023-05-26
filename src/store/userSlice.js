import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

// admin  approve123456.
// 资源URL：http://1.116.64.64:5004/api/user/login
// HTTP协议：post
// 参数名	说明	是否必须
// account		必须
// password		必须
// 返回值
// token		

export const doLogin = createAsyncThunk('/user/doLogin', async (payload) => {
    let user = {
        ...payload,
        account: payload.username
    }
    let res = await axios.post('/api/user/login', user);

    return res.data;
})


const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        password: '',
        rememeberMe: false,
        token: '',
        isLogin: false
    },
    reducers: {
        setUserToken(state, { payload }) {
            // console.log(payload);
            state.token = payload
        },
        setUserName(state, { payload }) {
            state.username = payload
        }
    },
    extraReducers: (builder) => {
        // 登录
        builder.addCase(doLogin.fulfilled, (state, { meta, payload }) => {
            console.log('addCass:', meta);
            state.username = meta.arg.username;
            state.password = meta.arg.password;
            state.rememeberMe = meta.arg.remember;
            state.token = payload.data.token
            state.isLogin = true
        })
        // builder.addCase()
        // addCase();
    }

})


export const { setUserToken, setUserName } = userSlice.actions
export default userSlice.reducer
