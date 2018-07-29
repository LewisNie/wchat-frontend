import React, {Component} from "react";
import Style from '../../styles/pages/welcome/login.less';
import {Link,HashRouter} from 'react-router-dom';
import AuthApi from '../../api/authApi';
// const Login = ()=> <div>this is login page</div>;

class Login extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            email: '',
            password:'',
        }
    }
    onChange(name, e){
        console.log(name);
        this.setState({
            [name]:e.target.value
        });
    }
    _loginButtonHandler(){
        console.log(this.state);
        const req = {
            email: this.state.email,
            password: this.state.password,
        };
        AuthApi.login(req).then((data)=>{
            console.log(data);
            window.location.href =  "#/wechat/contact";
        },(err)=>{
            console.log(err);
        })
    }
    render() {
        return (
            <div className={Style.login} >
                <Link to="/register" className={Style.register}>注册</Link>
                <form>
                    <div>
                        <label>
                            <h3>使用邮箱和密码登陆</h3>
                        </label>
                    </div>
                    <div className={Style.inputField}>
                        <label>邮箱</label>
                        <input placeholder="请填写邮箱地址" onChange={this.onChange.bind(this,"email")} value={this.state.email} />
                    </div>
                    <div className={Style.inputField}>
                        <label>密码</label>
                        <input placeholder="请填写密码" onChange={this.onChange.bind(this,"password")} value={this.state.password} />
                    </div>
                    <button type="button" className={Style.button} onClick={this._loginButtonHandler.bind(this)}>登陆</button>
                </form>
                <a className={Style.question} href="">登陆遇到问题?</a>
            </div>
        )
    }
}

export default Login;