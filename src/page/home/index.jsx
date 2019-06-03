'use strict';
import React        from 'react';
import ReactDOM     from 'react-dom';

import PageTitle    from 'component/page-title/index.jsx';
import MMUtil from 'util/mm.jsx'
import Monitor from "service/monitor.jsx";

const _mm = new MMUtil();
const _monitor = new Monitor();

const Home = React.createClass({
    getInitialState() {
        return {
        };
    },
    componentDidMount: function(){
        this.getServerInfos();
    },
    getServerInfos:function (){
        _monitor.getServerInfo().then(res=>{
            this.setState(res);
        })
        _monitor.getTableInfo().then(res=>{
            this.setState(res);
        })
    },
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle pageTitle="Home"/>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        欢迎来到Mall商城后台系统
                    </div>
                </div>
                <div className="table-wrap col-lg-12">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>服务器状态</th>
                        <th>值</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>服务器版本（ServerVersion）</td>
                                <td>CentOS</td>
                            </tr>

                        }
                        {
                            <tr>
                                <td>JVM总内存</td>
                                <td>{this.state.jvmTotalMemory}</td>
                            </tr>
                        }
                        {
                            <tr>
                                <td>JVM内存占比</td>
                                <td>{this.state.jvmMemoryRatio}</td>
                            </tr>
                        }
                        {
                            <tr>
                                <td>订单总数</td>
                                <td>{this.state.订单总数}</td>
                            </tr>
                        }
                        {
                            <tr>
                                <td>品类总数</td>
                                <td>{this.state.品类总数}</td>
                            </tr>
                        }
                        {
                            <tr>
                                <td>用户总数</td>
                                <td>{this.state.用户总数}</td>
                            </tr>
                        }
                        {
                            <tr>
                                <td>商品总数</td>
                                <td>{this.state.商品总数}</td>
                            </tr>
                        }
                    </tbody>

                </table>
                </div>
            </div>
        );
    }
});

export default Home;
