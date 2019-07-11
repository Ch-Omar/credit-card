import React, { Component } from 'react';
import './App.css';


const renderCardNumber = number => {
  if (isNaN(number)) {
    return 'Error';
  }
  number = number.toString()
  let res = ''
  for (let i = 0; i < number.length; i += 4) {
    res += number.slice(i, i + 4) + ' '
  }
  return res.trim()
}


const renderValidThru = number => {
  if (isNaN(number)) {
    return 'Error';
  }
  number = number.toString();
  let test=number[0]+number[1]
  if(test>12||test<1) return 'Error'
  let test2=number[2]+number[3]
  if(test2<19) return 'Error'

  if(number.length===0) return ''
  return number.slice(0, 2) + "/" + number.slice(2);
};

const renderholername = name => {
const reg=/([0-9_.*/,:;+=)àç_('"é&!@#$%^&*-])/g
  if(name.match(reg)) {return "Error"}
  if (!isNaN(name)) return 'Error'
  return name.toUpperCase()
}

const CreaditCard = (props) =>
  <div className="App" >
    <div className="credit">{props.companyName}</div>
    <img className="puc" alt="" src="https://uc0ab48daf10d99fa7443848508c.previews.dropboxusercontent.com/p/thumb/AAeNbhSrzpcDhURzJnlYb_ttDJoUnIvSbywFGG36eQpajY9S381z6HnWHDJ4iRcXmgkCARY4Tlu-5TNT8RO5vMjsCQKN_pY1oAq3mBPqt3GzmrngG1GNXd8lMuoXW4uG7XPPYX_d6Rd2FShfeekL-rd32X7_90KN2gSdW_ID_HjBQu-BTrsNuDXYaVot2kgQ-VgVfgr00NNfJd-rYc9XlOXW6H6QARy5BETm-BEjPKgkxTFn_j524Vbzo7HXQyOJU9cnfOdn4H8sDZVhzdg8dC_rWbQT02zLjqPlZlzwwfZYsFMdS_m5zI_eGFw9DTZVZ7rIKW0j1tlcyGh9V2HPNW0ZRJR4dPk6epHcEST9neW2KG2-OhO_FYkKkc9Adld0V9I/p.jpeg?size=1600x1200&size_mode=3" />
    <div className="num">{renderCardNumber(props.cardNumber)}</div>
    <div className="num1">5422</div>
    <img className="visa" alt="p" src="https://uc5fd0d68b33410753d57041b44f.previews.dropboxusercontent.com/p/thumb/AAeokeRtEntKi8VFz9lC8SyX6dEAdXRRI4njgRl2ueXr0Yi58skbjC6CmrXLSRUT5nwzSz05e1A0wQT4RPyHmIe-R7aN-fxWjOUoyLX0SOG_W3ChPXTaoBDLKA8_-gsTkOXXf_KPm-4sfVjCg8Iiv4sH0Mn1r82wCJFhC-OmeyONQovdK-iI8XlebFrFCX9lFoDvSgbNd5pgeY1GX9tyk-fPtVvowEaP1wkMshNOxejmkhrdDckgMqxkcRNHpvmGUzrf99S5yQYbCnHSauaM7JMMBBycgDuw5yFuZuvSDP182fDef201fYxPXhlsCKNfC-DIudfemLHx9lZH7NVIep3TBXvTJI5ERD2wjSQccTgR1CaQGKpMSx33Q8365quwHjI/p.jpeg?fv_content=true&size_mode=5" />
    <div className="month">MONTH/YEAR</div>
    <div className="valid">VALID <br /> THRU </div>
    <div className="triangle triangle-3"></div>
    <div className="date">{renderValidThru(props.validThru)}</div>
    <div className="soc">{renderholername(props.cardHolder)}</div>
  </div>

class Main extends Component{
  constructor(){
    super();
    this.state={
      num:.0,
      valid:0,
      nom:"foulen",
    }
  }
  testNum=(event)=>{
    this.setState({
      num:event.target.value
    })    
  }
  testdate=(event)=>{
    this.setState({
      valid:event.target.value
    })
  }
  testnom=(event)=>{
    this.setState({
      nom:event.target.value
    })
  }
render(){
  const {num,valid,nom}=this.state
  return (
    
    <div className="form">

      <CreaditCard
        companyName='CREADIT CARD'
        cardNumber={num}
        validThru={valid}
        cardHolder={nom} />
      <div className="input">
        <input type="text" onChange={this.testNum} maxLength="16"/>
        <input type="text" onChange={this.testdate} maxLength="4"/>
        <input type="text" onChange={this.testnom} maxLength="20"/>
      </div>
    </div>
 )
}
}
 
export default Main;
