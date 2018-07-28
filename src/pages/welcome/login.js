import React, {Component} from "react";
import Style from '../../styles/pages/welcome/login.less';
import {Link,HashRouter} from 'react-router-dom';
// const Login = ()=> <div>this is login page</div>;

class Login extends Component {
    render() {
        return (
            <div className={Style.login}>
                <Link to="/register" className={Style.register}>注册</Link>
                <form>
                    <div><label><h3>使用账户和密码登陆</h3></label></div>
                    <div className={Style.inputField}>
                        <label>账号</label>
                        <input placeholder="请填写用户名" />
                    </div>
                    <div className={Style.inputField}>
                        <label>密码</label>
                        <input placeholder="请填写密码" />
                    </div>
                    <button className={Style.button}>登陆</button>
                </form>
                <a className={Style.question} href="">登陆遇到问题?</a>
            </div>
        )
    }
}

export default Login;