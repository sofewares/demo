import React,{Component} from 'react'
import Meraga from "../components/meraga"
import './newPosition.css'

class NewPosition extends Component {
  state={
    newsJson:[
      {
        id:1,
        url:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP524758',
        text:'阿里云智能事业群-技术专家Java (城市安全/出行/政务/医疗/金融)-杭州/北京',
        time:'36分钟前',
        citys:'北京,杭州'
      },
      {
        id:2,
        url:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP524758',
        text:'阿里云智能事业群-技术专家Java (城市安全/出行/政务/医疗/金融)-杭州/北京',
        time:'36分钟前',
        citys:'北京,杭州'
      },
      {
        id:3,
        url:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP524758',
        text:'阿里云智能事业群-技术专家Java (城市安全/出行/政务/医疗/金融)-杭州/北京',
        time:'36分钟前',
        citys:'北京,杭州'
      },
      {
        id:4,
        url:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP524758',
        text:'阿里云智能事业群-技术专家Java (城市安全/出行/政务/医疗/金融)-杭州/北京',
        time:'36分钟前',
        citys:'北京,杭州'
      },
      {
        id:5,
        url:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP524758',
        text:'阿里云智能事业群-技术专家Java (城市安全/出行/政务/医疗/金融)-杭州/北京',
        time:'36分钟前',
        citys:'北京,杭州'
      },
      {
        id:6,
        url:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP524758',
        text:'阿里云智能事业群-技术专家Java (城市安全/出行/政务/医疗/金融)-杭州/北京',
        time:'36分钟前',
        citys:'北京,杭州'
      },
      {
        id:7,
        url:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP524758',
        text:'阿里云智能事业群-技术专家Java (城市安全/出行/政务/医疗/金融)-杭州/北京',
        time:'36分钟前',
        citys:'北京,杭州'
      },
      {
        id:8,
        url:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP524758',
        text:'阿里云智能事业群-技术专家Java (城市安全/出行/政务/医疗/金融)-杭州/北京',
        time:'36分钟前',
        citys:'北京,杭州'
      },
      {
        id:9,
        url:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP524758',
        text:'阿里云智能事业群-技术专家Java (城市安全/出行/政务/医疗/金融)-杭州/北京',
        time:'36分钟前',
        citys:'北京,杭州'
      },
      {
        id:10,
        url:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP524758',
        text:'阿里云智能事业群-技术专家Java (城市安全/出行/政务/医疗/金融)-杭州/北京',
        time:'36分钟前',
        citys:'北京,杭州'
      },
      {
        id:11,
        url:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP524758',
        text:'阿里云智能事业群-技术专家Java (城市安全/出行/政务/医疗/金融)-杭州/北京',
        time:'36分钟前',
        citys:'北京,杭州'
      },
    ]
  }
  render() {
    const {newsJson} = this.state;
    return (
      <div className="content">
          <div className="new_position">
            <div className="new_list">
              <div className="more_position">
				最新职位
				<a  href="javascript:void()">更多</a>
			   </div>
              <Meraga data={newsJson}/>
            </div>
            <div className="pic_wrap">
				<a className="show_pic pic_1" href="https://www.aliyun.com/careers"><img src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png"/></a>
				<a className="show_pic pic_2" href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?"><img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg"/></a>
			</div>
          </div>
      </div>
      );
    }
}
export default NewPosition;

