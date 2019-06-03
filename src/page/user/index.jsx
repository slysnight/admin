
'use strict';
import React        from 'react';
import ReactDOM     from 'react-dom';
import { Link }     from 'react-router';

import PageTitle    from 'component/page-title/index.jsx';
import Pagination   from 'component/pagination/index.jsx';

import MMUtile      from 'util/mm.jsx';
import UserService        from 'service/user.jsx';

const _mm = new MMUtile();
const _user = new UserService();
const User = React.createClass({
    getInitialState() {
        return {
            list :[],
            pageNum         : 1,
            pages           : 0
        };
    },
    componentDidMount(){
        this.loadUserList();
    },
    loadUserList(){
        let pageNum = this.state.pageNum;
        _user.getAllUser(pageNum).then(res=>{
            this.setState(res);
        },errMsg => {
            _mm.errorTips(errMsg);
        })
        return false;
    },
    onPageNumChange(pageNum){
        this.setState({
            pageNum     : pageNum
        }, () => {
            this.loadUserList(pageNum);
        });
    },
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle pageTitle="注册用户一览"/>
                    <div className="table-wrap col-lg-12">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>用户名</th>
                                    <th>用户邮件</th>
                                    <th>用户电话</th>
                                    <th>密保问题</th>
                                    <th>用户权限</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.list.length ? this.state.list.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.question}</td>
                                                <td>{user.role==1?"管理员":"普通用户"}</td>
                                            </tr>
                                        );
                                    }) :
                                    (
                                        <tr>
                                            <td colSpan="6" className="text-center">没有找到相应结果~</td>
                                        </tr>
                                    )
                                }
                                            
                            </tbody>
                        </table>
                    </div>
                    {
                    this.state.pages > 1 ? <Pagination onChange={this.onPageNumChange} 
                        current={this.state.pageNum} 
                        total={this.state.total} 
                        showLessItems/>: null
                    }
                </div>
        );
    }
});

export default User;
