import './App.css';
import './global.css'
import React, { Component } from 'react';
import axios from 'axios';
import Dust from './components/Dust';
import mainImg from './images/contamination.png'

let districtName= '';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      pollutionDataList:[],
      city:'',
    }
  }

  getData = async()=>{

    const serviceKey = 'ub8M5Gmp8pg3AezNdxAMcc5BSFaY7vsMe%2FcJeAs%2BSemUu%2BZ85bpLN4sYXZGntlqYvDv8fO%2BnipwaagRHeDuJWg%3D%3D'
    districtName=this.state.city

    if(districtName==''){
      alert("도시를 입력하세요!")
      return
    }

    
    await axios({
      method: 'get',
      url: `https://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?serviceKey=${serviceKey}&returnType=json&year=2022&numOfRows=100&pageNo=1`,
      dataType: 'json',
    })
    .then(response => 
        { 
          //console.log(response);
          //console.log((response.data.response.body.items.districtName));
          this.setState({
            pollutionDataList:response.data.response.body.items
           
          });
        }
    ).catch(error => {
      alert(error.response)
      return
    });

    document.querySelector('.infinite_rotating_logo').classList.add('stop')
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
 
  }

  componentDidMount(){
    //this.getData();
  }

  render(){
    
    let Data = this.state.pollutionDataList;
    let filterdData = Data.find(a=>a.districtName == `${districtName}`);
    let result = ``;
    
    if (districtName != "" && filterdData != undefined) {
      result = <Dust
        key={filterdData.id}
        districtName={filterdData.districtName}
        clearDate={filterdData.clearDate}
        clearTime={filterdData.clearTime}
        clearVal={filterdData.clearVal}
        issueGbn={filterdData.issueGbn}
        issueDate={filterdData.issueDate}
        issueTime={filterdData.issueTime}
        issueVal={filterdData.issueVal}
        moveName={filterdData.moveName}
      ></Dust>

      //console.log(filterdData);


    } else if (filterdData == undefined) {

      result = <NoDataHere />

    } else {
      result = this.state.pollutionDataList.map(
        (data) => (<Dust
          key={data.id}
          districtName={data.districtName}
          clearDate={data.clearDate}
          clearTime={data.clearTime}
          clearVal={data.clearVal}
          issueGbn={data.issueGbn}
          issueDate={data.issueDate}
          issueTime={data.issueTime}
          issueVal={data.issueVal}
          moveName={data.moveName}
        ></Dust>

        )
      )

    }

    return (
      <div id="app">
        <div className='m-auto lg:w-full w-full mt-20'>
        <h1 className='font-black flex align-middle justify-center my-12 text-3xl'> 미세먼지 검색 </h1>
          <div className='imgContainer flex align-middle justify-center mt-5'>  
            <img
              src={mainImg}
              alt='mainImg'
              width={175}
              className='infinite_rotating_logo'
            />
          </div>

          <div className='rounded-lg w-96 mt-10 m-auto flex align-middle justify-center'>
            <input type="text" placeholder="도시를 입력하세요" onChange={this.handleChange} name="city" className='shadow appearance-none border rounded  py-2 px-3 text-gray-700 mr-3 leading-tight focus:outline-none focus:shadow-outline' />
            <button onClick={this.getData} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
          <div className='w-96 m-auto mt-5'>
            {result}
          </div>
        </div>
      
    </div>
  );
  }
}


const NoDataHere = () => (  
  <p className="font-bold text-center mt-11 text-2xl">해당 데이터가 없습니다. <br />
   다시 검색해주세요 😭
  
  </p>    
)
export default App;