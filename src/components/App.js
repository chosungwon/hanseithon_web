import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import axios from 'axios';
import ScrollArea from 'react-scrollbar';
import map from './map.png';

injectGlobal`
html, body{
  margin:0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #272e71;
  }
  #root{
  margin:0;
  padding: 0;
  height: 100%;
  width: 100%;
  }
`

class App extends Component {
    state = {
        yack:'',
        data1: {

        },
        data2: {

        },
        data3: {

        },
        data4: {

        },
        data5: {

        },
        data6: {

        },
        data7: {

        },
        data8: {

        },
        data9: {

        },
        data10: {

        },
        data11: {

        },
        data12: {

        },
        data13: {

        },
        data14: {

        },
        data15: {

        },
        data16: {

        },
        data17: {

        },
        data18: {

        },
        data19: {

        },
        data20: {

        }
    }
    componentDidMount(){
        axios.get(`http://192.168.0.35:8000/api/post/`)
            .then(res=>{
                    this.setState({
                        data1: res.data.results[0]
                    })
                    this.setState({
                        data2: res.data.results[1]
                    })
                    this.setState({
                        data3: res.data.results[2]
                    })
                    this.setState({
                        data4: res.data.results[3]
                    })
                    this.setState({
                        data5: res.data.results[4]
                    })
                    this.setState({
                        data6: res.data.results[5]
                    })
                    this.setState({
                        data7: res.data.results[6]
                    })
                    this.setState({
                        data8: res.data.results[7]
                    })
                    this.setState({
                        data9: res.data.results[8]
                    })
                    this.setState({
                        data10: res.data.results[9]
                    })
                this.setState({
                    data11: res.data.results[10]
                })
                this.setState({
                    data12: res.data.results[11]
                })
                this.setState({
                    data13: res.data.results[12]
                })
                this.setState({
                    data14: res.data.results[13]
                })
                this.setState({
                    data15: res.data.results[14]
                })
                this.setState({
                    data16: res.data.results[15]
                })
                this.setState({
                    data17: res.data.results[16]
                })
                this.setState({
                    data18: res.data.results[17]
                })
                this.setState({
                    data19: res.data.results[18]
                })
                this.setState({
                    data20: res.data.results[19]
                })

            })
    }
    handleChange = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
    }

  render() {
        let name1 = null;
      let name2 = null;
      let name3 = null;
      let name4 = null;
      let name5 = null;
      let name6 = null;
      let name7 = null;
      let name8 = null;
      let name9 = null;
      let name10 = null;

        let place1 = null;
      let place2 = null;
      let place3 = null;
      let place4 = null;
      let place5 = null;
      let place6 = null;
      let place7 = null;
      let place8 = null;
      let place9 = null;
      let place10 = null;
        let drink1 =null;
        let a = null;
        let b = null;
        let c = null;
        let asd = null;
        let asd1 = null;
        let asd2 = null;
      let asd3 = null;
      let asd4 = null;
      let asd5 = null;
      let asd6 = null;
      let asd7 = null;
      let asd8 = null;
      let asd9 = null;

        let yack = this.state.yack;
        if (yack === this.state.data1.spring_name){
            name1 = this.state.data1.spring_name
            place1 = this.state.data1.location_house_address;
            c = <div style={{color:'green'}}>마실수있는 물입니다!</div>
            asd = <a href={'http://map.daum.net/link/map/37.171530,128.207600'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:30}}/></a>
            // asd1 =                         <a href={'https://www.google.com/maps/place/37%C2%B008\'32.2%22N+128%C2%B011\'20.3%22E/@37.1432377,128.1848649,1805m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d37.142272!4d128.1889613?hl=ko'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:130}}/></a>
            // asd2 =                         <a href={'https://www.google.com/maps/place/37%C2%B008\'32.2%22N+128%C2%B011\'20.3%22E/@37.1432377,128.1848649,1805m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d37.142272!4d128.1889613?hl=ko'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:235}}/></a>
            // asd3 =                         <a href={'https://www.google.com/maps/place/37%C2%B008\'32.2%22N+128%C2%B011\'20.3%22E/@37.1432377,128.1848649,1805m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d37.142272!4d128.1889613?hl=ko'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:350}}/></a>
            // asd4 =                         <a href={'https://www.google.com/maps/place/37%C2%B008\'32.2%22N+128%C2%B011\'20.3%22E/@37.1432377,128.1848649,1805m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d37.142272!4d128.1889613?hl=ko'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:475}}/></a>
            // asd5 =                         <a href={'https://www.google.com/maps/place/37%C2%B008\'32.2%22N+128%C2%B011\'20.3%22E/@37.1432377,128.1848649,1805m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d37.142272!4d128.1889613?hl=ko'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:575}}/></a>
            // asd6 =                         <a href={'https://www.google.com/maps/place/37%C2%B008\'32.2%22N+128%C2%B011\'20.3%22E/@37.1432377,128.1848649,1805m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d37.142272!4d128.1889613?hl=ko'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:680}}/></a>
            // asd7 =                             <a href={'https://www.google.com/maps/place/37%C2%B008\'32.2%22N+128%C2%B011\'20.3%22E/@37.1432377,128.1848649,1805m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d37.142272!4d128.1889613?hl=ko'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:800}}/></a>
            // asd8 =                             <a href={'https://www.google.com/maps/place/37%C2%B008\'32.2%22N+128%C2%B011\'20.3%22E/@37.1432377,128.1848649,1805m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d37.142272!4d128.1889613?hl=ko'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:925}}/></a>
            // asd9 =                             <a href={'https://www.google.com/maps/place/37%C2%B008\'32.2%22N+128%C2%B011\'20.3%22E/@37.1432377,128.1848649,1805m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d37.142272!4d128.1889613?hl=ko'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:1020}}/></a>

        }
        if(yack === ''){
            name1 =  this.state.data1.spring_name;
            place1 = this.state.data1.location_house_address;
            name2 = this.state.data2.spring_name ;
            place2 = this.state.data2.location_house_address;
            name3 = this.state.data3.spring_name ;
            place3 = this.state.data3.location_house_address;
            name4 = this.state.data4.spring_name ;
            place4 = this.state.data4.location_house_address;
            name5 = this.state.data5.spring_name ;
            place5 = this.state.data5.location_house_address;
            name6 = this.state.data6.spring_name ;
            place6 = this.state.data6.location_house_address;
            name7 = this.state.data7.spring_name ;
            place7 = this.state.data7.location_house_address;
            name8 = this.state.data8.spring_name ;
            place8 = this.state.data8.location_house_address;
            name9 = this.state.data9.spring_name ;
            place9 = this.state.data9.location_house_address;
            name10 = this.state.data10.spring_name ;
            place10 = this.state.data10.location_house_address;
            asd = <a href={'http://map.daum.net/link/map/37.171530,128.207600'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:30}}/></a>
            asd1 = <a href={'http://map.daum.net/link/map/37.1733151,128.2135772'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:130}}/></a>
            asd2=  <a href={'http://map.daum.net/link/map/37.1422720289,128.188961305'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:235}}/></a>
            asd3 =  <a href={'http://map.daum.net/link/map/37.139930,128.181300'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:350}}/></a>
            asd4 = <a href={'http://map.daum.net/link/map/37.115740,128.189700'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:475}}/></a>
            asd5 =                     <a href={'http://map.daum.net/link/map/37.1930929398,128.191762529'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:575}}/></a>
            asd6 =                      <a href={'http://map.daum.net/link/map/37.191360,128.231800'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:680}}/></a>
            asd7 =                      <a href={'http://map.daum.net/link/map/37.878668,127.043671'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:800}}/></a>
            asd8 =                      <a href={'http://map.daum.net/link/map/37.841274,127.028077'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:925}}/></a>
            asd9 =                          <a href={'http://map.daum.net/link/map/37.905165,126.971521'}><img src={map} width={'40px'} height={'60px'} style={{position:'absolute', right:30, top:1020}}/></a>

            drink1 = this.state.data1.quality_result_division;
            a = <div style={{color:'red'}}>먹을수없는 물입니다!</div>
            b = <div style={{color:'green'}}>마실수있는 물입니다!</div>
            c = <div style={{color:'green'}}>마실수있는 물입니다!</div>


        }
        else if(yack !== name1){
            name1 = null;
            a = null
             b = null
            asd = null;
            asd1 = null;
            asd2 = null;
            asd3 = null;
            asd4 = null;
            asd5 = null;
            asd6 = null;
            asd7 = null;
            asd8 = null
            asd9 = null
            // this.state.data2.spring_name = null
            // this.state.data2.location_house_address = null
            // this.state.data3.spring_name = null
            // this.state.data3.location_house_address = null
            // this.state.data4.spring_name = null
            // this.state.data4.location_house_address = null
            // this.state.data5.spring_name = null
            // this.state.data5.location_house_address = null
            // this.state.data6.spring_name = null
            // this.state.data6.location_house_address = null
            // this.state.data7.spring_name = null
            // this.state.data7.location_house_address = null
            // this.state.data8.spring_name = null
            // this.state.data8.location_house_address = null
            // this.state.data9.spring_name = null
            // this.state.data9.location_house_address = null
            // this.state.data10.spring_name = null
            // this.state.data10.location_house_address = null
        }

      return(
            <Container>
                <Title>
                    Drink Well
                </Title>
                <Card>
                    <input style={{
                        width: '89.4%',
                        height: '7%',
                        padding: '20px',
                        borderBottomColor: '#bbb',
                        borderBottomWidth: 1,
                        fontSize: 25,
                     }}
                        placeholder={'약수터 검색'} name={'yack'} onChange={this.handleChange}/>
                    <ScrollArea
                        speed={1}
                        horizontal={false}
                        style={{width: '100%', height: '85%'}}
                    >
                    <Data>
                        <span style={{fontSize: 35}}>{name1}</span>
                        <br/>
                        <span style={{fontSize: 20}}>{place1}</span>
                        {asd}
                        <span style={{fontSize: 20}}>{c}</span>

                    </Data>
                    <Data>
                        <span style={{fontSize: 35}}>{name2}</span>
                        <br/>
                        <span style={{fontSize: 20}}>{place2}</span>
                        {asd1}
                        <span style={{fontSize: 20}}>{a}</span>
                    </Data>
                    <Data>
                        <span style={{fontSize: 35}}>{name3}</span>
                        <br/>
                        <span style={{fontSize: 20}}>{place3}</span>
                        {asd2}
                        <span style={{fontSize: 20}}>{b}</span>
                    </Data>
                    <Data>
                        <span style={{fontSize: 35}}>{name4}</span>
                        <br/>
                        <span style={{fontSize: 20}}>{place4}</span>
                        {asd3}
                        <span style={{fontSize: 20}}>{a}</span>
                    </Data>
                    <Data>
                        <span style={{fontSize: 35}}>{name5}</span>
                        <br/>
                        <span style={{fontSize: 20}}>{place5}</span>
                        {asd4}
                        <span style={{fontSize: 20}}>{b}</span>
                    </Data>
                    <Data>
                        <span style={{fontSize: 35}}>{name6}</span>
                        <br/>
                        <span style={{fontSize: 20}}>{place6}</span>
                        {asd5}
                        <span style={{fontSize: 20}}>{b}</span>
                    </Data>
                    <Data>
                        <span style={{fontSize: 35}}>{name7}</span>
                        <br/>
                        <span style={{fontSize: 20}}>{place7}</span>
                        {asd6}
                        <span style={{fontSize: 20}}>{a}</span>
                    </Data>
                        <Data>
                            <span style={{fontSize: 35}}>{name8}</span>
                            <br/>
                            <span style={{fontSize: 20}}>{place8}</span>
                            {asd7}
                            <span style={{fontSize: 20}}>{a}</span>
                        </Data>
                        <Data>
                            <span style={{fontSize: 35}}>{name9}</span>
                            <br/>
                            <span style={{fontSize: 20}}>{place9}</span>
                            {asd8}
                            <span style={{fontSize: 20}}>{a}</span>
                        </Data>
                        <Data>
                            <span style={{fontSize: 35}}>{name10}</span>
                            <br/>
                            <span style={{fontSize: 20}}>{place10}</span>
                            {asd9}
                            <span style={{fontSize: 20}}>{a}</span>
                        </Data>
                    </ScrollArea>
                </Card>
            </Container>
      );
  }
}

const Container = styled.div `
    width: 100%;  
    height: 100%;
    align-items: center;
    background-color: #272e71;
`

const Title = styled.div `
        width: 50%;
        height: 20%;
     color: white
        font-size: 45px
        font-weight: 200px
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
`

const Card = styled.div `
        background-color: white;
        width: 95%;
        height: 90%;
        border-top-left-radius: 10px;
        border-top-right-radius 10px;
        margin-right: auto;
        margin-left: auto;
        box-shadow: 30px 30px 30px 30px rgba(0, 0, 0, .3);
`

const Data = styled.div `
    width: 100%;
    height: 12%;
    margin-top:10px;
    margin-left: 5px;
    margin-right: 0px;
    margin-bottom: 20px;
`

export default App;

