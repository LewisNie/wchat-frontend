import React from 'react';
import {Link} from 'react-router-dom';
import Style from '../../styles/pages/welcome/register.less';

const Register = ()=>{
    return (
        <div className={Style.login}>
            <Link to="/" className={Style.register}>登陆</Link>

            <form>
                <div><label><h3>注册新用户</h3></label></div>
                <div className={Style.inputField}>
                    <label>账号</label>
                    <input placeholder="请输入6到16位用户名" />
                </div>
                <div className={Style.inputField}>
                    <label>密码</label>
                    <input placeholder="请输入6到16位密码" />
                </div>
                <div className={Style.inputField}>
                    <label>确认密码</label>
                    <input placeholder="请再次输入密码" />
                </div>
                <button className={Style.button}>注册</button>
            </form>
        </div>
    )
};

export default Register;