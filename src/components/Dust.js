import React from "react";
import { Component } from "react";

class Dust extends Component{
  constructor(props){
      super(props)

  }

 

//   districtName={data.districtName}
//   clearDate={data.clearDate}
//   clearTime={data.clearTime}
//   clearVal={data.clearVal}
//   issueGbn={issueGbn}
//   issueDate={data.issueDate}
//   issueTime={issueTime}
//   issueVal={issueVal}
//   moveName={moveName}
  render(){
      return(
          <div id="pollution-info" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <div id="station-name" className=" flex align-middle justify-around">
                  <span className="mr-1"><span className="text-gray-500 mr-1 text-sm">측정시:</span>
                  <District value={this.props.districtName}/>
                  </span> 
                  <span><span className="text-gray-500 mr-1 text-sm">권역:</span>
                  <District value={this.props.moveName}/>
                  </span>
              </div>
              <hr className="m-3 mx-0"/>
              <div id="issue-name">
                  <p><span className="text-gray-500 mr-2 text-sm">발령날짜:</span>{this.props.issueDate} {this.props.issueTime}</p>
                  <p><span className="text-gray-500 mr-2 text-sm">발령수치:</span>{this.props.issueVal}</p>
                  <Notice value={this.props.issueVal}/>
              </div>

            <hr className=" m-5 mx-0"/>
              <div id="clear-name">
                  <p><span className="text-gray-500 mr-2 text-sm">해제날짜:</span>{this.props.clearDate} {this.props.clearTime}</p>
                  <p><span className="text-gray-500 mr-2 text-sm">해제수치:</span>{this.props.clearVal}</p>
              </div>

           
              {/* <div id="co-area">
                  <span>일산화탄소 등급:{this.props.coGrade}</span>
                  <span>일산화탄소 농도:{this.props.coValue}</span>
              </div>
              <div id="no2-area">
                  <span>이산화질소 등급:{this.props.no2Grade}</span>
                  <span>이산화질소 농도:{this.props.no2Value}</span>
              </div>
              <div id="pm10-area">
                  <span>미세먼지(10mm) 등급:{this.props.pm10Grade}</span>
                  <span>미세먼지(10mm) 농도:{this.props.pm10Value}</span>
              </div>
              <div id="pm25-area">
                  <span>미세먼지(25mm) 등급:{this.props.pm25Grade}</span>
                  <span>미세먼지(25mm) 농도:{this.props.pm25Value}</span>
              </div>
              <div id="so2-area">
                  <span>이산화황 등급:{this.props.so2Grade}</span>
                  <span>이산화황 농도:{this.props.so2Value}</span>
              </div>
              <div id="o3-area">
                  <span>오존 등급:{this.props.o3Grade}</span>
                  <span>오존 농도:{this.props.o3Value}</span>
              </div> */}
          </div>
      );
  }
}

const District = ({value}) => (  
        <span className="font-semibold">{value}</span>    
  )



// const Notice =  function Greeting(props) {
//     const isLoggedIn = props.issueVal;
//     console.log(isLoggedIn);

//     if (isLoggedIn <= 15) {
//         return <Good />;
//     }else if( 16 <= isLoggedIn <= 15){
//         return <Bad />;
//     }else{
//         return <Bad />;
//     }
// }


const Notice = ({value}) => (     
    <h1 className="font-black text-center">{
        value <= 15
        ? <span className="font-semibold text-green-600 "> 좋음 </span> 
        : (  value <= 35
            ?  <span className="font-semibold text-red-400 "> 나쁨 </span> 
            : <span className="font-semibold text-red-600 "> 매우 나쁨 </span> 
          )
    }</h1>    
)




export default Dust;
