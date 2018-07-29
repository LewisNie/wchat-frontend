import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Style from '../../styles/pages/welcome/register.less';
import AuthApi from '../../api/authApi';

class Register extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            email: '',
            password:'',
            passwordConfirm:'',
            username:''
        }
    }
    onChange(name, e){
        console.log(name);
        this.setState({
            [name]:e.target.value
        });
    }
    _registerButtonHandler(){
        const req = {
            email: this.state.email,
            username:this.state.username,
            password: this.state.password,
        };

        if(req.password === this.state.passwordConfirm){
            AuthApi.register(req).then((data)=>{
                console.log(data);
                window.location.href =  "#/wechat/contact";
            },(error)=>{
                console.log(error);
            });
        }
    }

    render() {
        return (
            <div className={Style.login}>
                <Link to="/" className={Style.register}>登陆</Link>

                <form>
                    <div><label><h3>注册新用户</h3></label></div>
                    <div className={Style.inputField}>
                        <label>邮件</label>
                        <input placeholder="请输入您的邮箱地址" value={this.state.email} onChange={this.onChange.bind(this,"email")}/>
                    </div>
                    <div className={Style.inputField}>
                        <label>用户名</label>
                        <input placeholder="请输入6到16位用户名" value={this.state.username} onChange={this.onChange.bind(this,"username")}/>
                    </div>
                    <div className={Style.inputField}>
                        <label>密码</label>
                        <input type="password" placeholder="请输入6到16位密码" value={this.state.password} onChange={this.onChange.bind(this,"password")}/>
                    </div>
                    <div className={Style.inputField}>
                        <label>确认密码</label>
                        <input type="password" placeholder="请再次输入密码" value={this.state.passwordConfirm} onChange={this.onChange.bind(this, "passwordConfirm")}/>
                    </div>
                    <button type="button" className={Style.button} onClick={this._registerButtonHandler.bind(this)}>注册
                    </button>
                </form>
            </div>
        )
    }
};

export default Register;