import React,{Component} from 'react';
import'./header.css';

class Header extends Component {
  state = {
    menus:['首&nbsp;&nbsp;&nbsp;页','社会招聘','校园招聘','了解阿里','个人中心']
  };

  handleClick = e => {
    console.log(e)
  };

  render() {
  	const {menus} = this.state;
    return (
      <div className="head">
        <div className="head_main">
          <a className="logo" href="javascript:void()" ><img src="/image/logo.png" height="20"/></a>
          <i className="divider">|</i>
          <i className="website">社招官网</i>
          <ul className="head_menu">
            {
              menus.map((menu,index)=>(
                <li key={index} onClick={()=>this.handleClick(index)}>
                  <a href="javascript:void()" dangerouslySetInnerHTML={{ __html:menu }}></a>
                </li>
              ))
            }
            <div className="login">
              欢迎来到阿里巴巴集团招聘！
               <a href="javascript:void()" target="_top">登录</a>|
               <a href="javascript:void()">注册</a>
           </div>
          </ul>
        </div>  
      </div>  
    );
  }
}


export default Header;

