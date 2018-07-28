import React from 'react';
import { Link ,HashRouter } from "react-router-dom";
import Style from '../../styles/components/footer.less';
import WechatSVG from "../../asserts/wechat.svg";
import contactSVG from "../../asserts/contact.svg";
import profileSVG from "../../asserts/profile.svg";
import exploreSVG from "../../asserts/explore.svg";


const Footer = ()=>(
    <div id={Style.footer}>
        <HashRouter basename="/wechat"/>
        <div className={Style.panel}>
            <Link to="message" >
                <img src={WechatSVG} />
                <p>微信</p>
            </Link>
        </div>
        <div className={Style.panel}>
            <Link to="contact" >
                <img src={contactSVG} />
                <p>通讯录</p>
            </Link>
        </div>
        <div className={Style.panel}>
            <Link to="explore">
                <img src={exploreSVG} />
                <p>发现</p>
            </Link>
        </div>
        <div className={Style.panel}>
            <Link to="profile">
                <img src={profileSVG} />
                <p>我</p>
            </Link>
        </div>
    </div>
);

export default Footer;