'use strict'

import MMUtil from 'util/mm.jsx';

const _mm = new MMUtil();

export default class Monitor {
    //getBasicInfo
    getServerInfo(){
        return _mm.request({
            url: _mm.getServerUrl("/manage/monitor/server_status.do"),
            method:'POST',
        })
    }

    getTableInfo(){
        return _mm.request({
            url: _mm.getServerUrl("/manage/monitor/table_count.do"),
            method: 'POST'
        })
    }
}