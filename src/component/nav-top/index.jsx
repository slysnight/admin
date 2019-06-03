/*
* @Author: Rosen
* @Date:   2017-02-11 19:49:01
* @Last Modified by:   Rosen
* @Last Modified time: 2017-04-13 16:05:51
*/

'use strict';
import React    from 'react';
import ReactDOM from 'react-dom';

import MMUtile  from 'util/mm.jsx';
import User     from 'service/user.jsx';

const _mm       = new MMUtile();
const _user     = new User();

const TopNav = React.createClass({
    getInitialState() {
        return {
            userName : ''
        };
    },
    componentDidMount(){
        let userInfo = _mm.getStorage('userInfo');
        if(userInfo){
            this.setState({
                userName : userInfo.username || ''
            });
        }
    },
    onLogout(){
        _user.logout().then(res => {
            console.log(res);
            window.location.href = '#/login';
            _mm.removeStorage("userInfo")
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    },
    render() {
        return (
            <div>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">弹出的导航栏</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#/">商城后台管理系统</a>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropDown">
                        {
                            this.state.userName ? 
                            <span>欢迎，{this.state.userName}</span> :
                            <a href="/dist/view/index.html#/login">请登录</a>
                        }
                        
                    </li>
                    {
                        this.state.userName ?
                        <li className="dropDown">
                            <a className="btn-logout" onClick={this.onLogout}>退出</a>
                        </li>:<span></span>
                    }
                </ul>
            </div>
        );
    }
});

export default TopNav;