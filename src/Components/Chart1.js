import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import { Button, Collapse } from 'react-bootstrap';
import PanelHeading from './Panelheading';
import Request from 'superagent';
//let start = '2017-06-25'

class Chart1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData1: this.props.chartData1,
      //initialDate: '2017-06-17',
      bitcoinData: [],
      dateLabels: []
    }
  }

 componentWillMount() {
  this.getChartData()
} 
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }

  toggleExpand(e) {
    this.setState({open: !this.state.open});
    this.getChartData()
  }

  getChartData(start){
    start = start || '2017-07-01'

//===== Set up end date range ==========================================
    Date.prototype.today = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
    var dd  = this.getDate().toString();
      return yyyy+'-'+(mm[1]?mm:"0"+mm[0])+'-'+(dd[1]?dd:"0"+'-'+dd[0]); // padding
  };

  var endDate = new Date();
  endDate.today();
  var end=endDate.today();


//===== Ajax calls here =============================================
  var queryUrl="http://api.coindesk.com/v1/bpi/historical/close.json?start="+start+"&end="+end;

  Request.get(queryUrl).then((response)=>{

  var historicalPrice=JSON.parse(response.text)["bpi"]; 
  this.bitcoinData = Object.values(historicalPrice)
  this.dateLabels = Object.keys(historicalPrice)
   
  });
    this.setState({
      chartData1:{
        labels: this.dateLabels,
        responsive: true,
        datasets:[
          {
            label:'BitCoin',
            data: this.bitcoinData,  
            backgroundColor: "#1F618D",
            borderColor: "#17202A",
            borderWidth: 2,
            hoverBackgroundColor: "#1D8348",
            hoverBorderColor: "#85C1E9",
          }
        ]
      }
   });   
 }



weekClicked(){
    Date.prototype.week = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
    var dd  = (this.getDate()-7).toString(); // set to 7 days ago
      return yyyy+'-'+(mm[1]?mm:"0"+mm[0])+'-'+(dd[1]?dd:"0"+dd[0]); // padding
  };
    var startDate = new Date().week();
    this.getChartData(startDate)
}

monthClicked(){
    Date.prototype.month = function() {
    var yyyy = this.getFullYear().toString();
    var mm = this.getMonth().toString(); // getMonth() is zero-based
    var dd  = this.getDate().toString();
      return yyyy+'-'+(mm[1]?mm:"0"+mm[0])+'-'+(dd[1]?dd:"0"+'-'+dd[0]); // padding
  };
    var startDate = new Date().month();
    this.getChartData(startDate)
}


//======================================================================
 

  render(){
    return (
    <div className="panel panel-default">
      
      <PanelHeading toggle={this.toggleExpand.bind(this)}  title='BitCoin Chart'/>
        
       <Collapse in={this.state.open}>
        <div className="panel-body">
          <div className="chart1">
              <div className="App-header">
                <Button bsStyle="primary"
                        bsSize="small"
                        className="btn-week"
                        onClick={this.weekClicked.bind(this)}>
                  Week      
                </Button>&nbsp;
                <Button bsStyle="primary"
                        bsSize="small"
                        className="btn-month"
                        onClick={this.monthClicked.bind(this)}>
                  Month      
                </Button>
              </div>
              <Line
                data={this.state.chartData1}

                options={{

                  title:{
                    display:this.props.displayTitle,
                    text:'BitCoin Historic Price',
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
        </Collapse>
      </div>
    )
  }
}

export default Chart1;
