import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'

const PrivateComponent=() =>{
    const auth = localStorage.getItem('user');
    //로그인한 상태가 아니라면 모두 signup 페이지로 이동시킨다.
    return auth ? <Outlet /> : <Navigate to="/signup" />
}

export default PrivateComponent;
