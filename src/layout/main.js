import React,{Component} from "react";
import "./main.css";

const hotKeys =[{id:1,hotKey:'JAVA'},{id:2,hotKey:'IOS'},{id:3,hotKey:'数据'},{id:4,hotKey:'安全'},{id:5,hotKey:'搜索'},{id:6,hotKey:'算法'},{id:7,hotKey:'运营'},{id:8,hotKey:'视觉'},{id:9,hotKey:'交互'},{id:10,hotKey:'前端'}]
class Main extends Component{
  state={
  	searthText:'',
  }
  onChange(e){

  }
  render(){
  	  const {searthText} = this.state;
  	  return(
		<div className="main">
		    <img className="main_img" src="/image/main.png" alt="backgroundImage"/>
			<div className="main_pop"></div>
			<div className="main_content">
				<form className="search_form">
					<div className="float_mid">
						<div  className="en_world">If not now, when?</div>
						<div className="en_world">If not me, who?</div>
						<div  className="zh_world">此时此刻，非我莫属！</div>
						<div className="search_box">
						    <span  className="search_topic">请输入职位关键词</span>
							<div className="search_wrap"></div>
							<input className="search_text" value={searthText} onChange={this.onChange}/>
							<button className="search_btn">搜索</button>
						</div>
						<div className="hot_text">
							热门搜索：
							{
							  hotKeys.map(_=>(<a key={_.id}  href="javascript:void()" >{_.hotKey}</a>))
							}		
						</div>
					</div>
				</form>
			</div>
		</div>
	  	)
  	}	
}


export default Main;


