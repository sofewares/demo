import React,{Component}from "react"
import "./meraga.css";
 
class Meraga extends Component{
  state={
     scrollUpBox:'',
     content:'',
  }
  timer = null
  componentDidMount(){
    var scrollUpBox = document.getElementById('scrollUpBox');
    var content= document.getElementById('content');
    var height=this.props.data.length*50;
    this.setState({scrollUpBox,content,height},()=>{
       
       this.engine();
    })
  }
  componentWillUnmount(){
     let _this = this;
     clearInterval(_this.timer)
  }
  engine=()=>{
    const {scrollUpBox,content,height} = this.state;
    let _this = this;
    function scrollUp() {
        if (scrollUpBox.scrollTop >= (height - scrollUpBox.clientHeight)) {
            scrollUpBox.scrollTop = 0;
        } else {
            scrollUpBox.scrollTop++;
        }
    }                
    var TIME = 50;
    _this.timer = setInterval(scrollUp, TIME);
    scrollUpBox.onmouseover = function() {
        clearInterval(_this.timer);
    }
    scrollUpBox.onmouseout = function() {
        _this.timer = setInterval(scrollUp, TIME);
    }
  }
  render() {
    const { data } = this.props||[];
    return(  
          <div id="scrollUpBox">
            <ul id="content">
              
              {data.map(_ =>(
                 <li key={_.id}>
                   <a className="position" href={_.src}>{_.text}</a>
                   <em className="time">{_.time}</em>
                   <em className="city">{_.citys}</em>
                 </li>
                ))}
                 
            </ul>
        </div>
          )
       
  }
}
 
 
export default Meraga;