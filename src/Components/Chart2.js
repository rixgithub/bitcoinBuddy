import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import { Button, Collapse } from 'react-bootstrap';
import PanelHeading from './Panelheading';

class Chart2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData2:props.chartData2,
      

    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    
  }


 toggleExpand(e) {
    this.setState({open: !this.state.open});
  }

getChartData(){

var bitcoinData=[];
var dateLabels=[];
var dateBought=["2017-06-05","2017-06-15","2017-17-30","2017-06-30"];
var initialPrice=[800,900,500,700]

//======================================================================

    this.setState({
      chartData2:{
        labels: dateBought,
        responsive: false, 
        datasets:[
          {
            label:'BitCoin',
            data: initialPrice,  
            backgroundColor: "#1D8348",
            borderColor: "#17202A",
            borderWidth: 2,
            hoverBackgroundColor: "#1D8348",
            hoverBorderColor: "#85C1E9"

          }
        ]
      }
    });
  }

  componentWillMount() {
    this.getChartData()
  }

  render(){
    return (

      <div className="panel panel-default">   
          <PanelHeading toggle={this.toggleExpand.bind(this)}  title='My Chart'/>
             <Collapse in={this.state.open}>
               <div className="panel-body">
                  <div className="chart2">
                    <div className="App-header">
                    <Bar
                      data={this.state.chartData2}
                      options={{
                        title:{
                          display:this.props.displayTitle,
                          text:'My BitCoin',
                          fontSize:25

                        },
                        legend:{
                          display:this.props.displayLegend,
                          position:this.props.legendPosition
                        }
                      }}
                    />
                  </div>
                </div>  
            </div> 
          </Collapse>
      </div>
    )
  }
}

export default Chart2;
