

'use strict';

import MMUtile from 'util/mm.jsx';

const mm = new MMUtile();

export default class User{
    // 检查用于登录的信息是否合法
    checkLoginInfo(userInfo){
        if(!userInfo.username){
            return {
                state: false,
                msg: '用户名不能为空'
            }
        }
        if(!userInfo.password){
            return {
                state: false,
                msg: '密码不能为空'
            }
        }
        return {
            state: true,
            msg: '验证通过'
        }
    }
    // 登录
    login(userInfo){
        return mm.request({
            url     : mm.getServerUrl('/manage/user/login.do'),
            method  : 'POST',
            data    : {
                username : userInfo.username || '',
                password : userInfo.password || ''
            }
        });
    }
    // 退出登录
    logout(){
        return mm.request({
            url     : mm.getServerUrl('/user/logout.do'),
            method  : 'GET',
        });
    }
    //
    getAllUser(pageNum){
        return mm.request({
            url : mm.getServerUrl('/manage/user/list.do'),
            method :'POST',
            data: {
                pageNum:pageNum
            }
        })
    }
}