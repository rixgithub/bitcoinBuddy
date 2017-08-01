import React, {Component} from 'react';
import { FormGroup, FormControl, ControlLabel, Glyphicon, Button, Collapse } from 'react-bootstrap';

import PanelHeading from './Panelheading';
var helpers = require ('../Utils/helpers.js');

export default class Info extends Component {
	constructor(props) {
		super(props);
		this.reset = this.reset.bind(this)
		this.state = {
			phonenumber: '',
			initialPrice: undefined,
			boughtdate:undefined,
			targetprice: undefined,
			open: false,
			currentDate: undefined
		};
	}

	componentWillMount() {
		const currentDate = new Date();
		this.setState({currentDate});
	}

  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.open});
    if(!nextProps.open) {
      this.reset(null);
    }
  }

	toggleExpand(e) {
		this.setState({open: !this.state.open});
	}

	handlephoneChange(e){
		this.setState({phonenumber:e.target.value})
	}

	handleInpriceChange(e){
		this.setState({initialPrice: e.target.value});
	}

	handletargetChange(e){
		this.setState({targetprice: e.target.value});
	}
	
  handleDateChange(e){
    this.setState({boughtdate: e.target.value});
  }
  
	handleSubmit(e) {
		e.preventDefault();
	 const phonenumber = this.state.phonenumber.trim();
   const initialPrice = this.state.initialPrice;
   const boughtdate = this.state.boughtdate;
   const targetprice = this.state.targetprice;
		console.log(phonenumber,initialPrice,boughtdate,targetprice);
    helpers.postForm(phonenumber,initialPrice,boughtdate,targetprice);
    console.log("i am here !");
	}

	

	reset(e) {
		this.setState({phonenumber: '', initialPrice:0, boughtdate: undefined, targetprice:0});
	}

	render() {
		
		return (
			<div className="panel panel-default">
      
        <PanelHeading toggle={this.toggleExpand.bind(this)}  title='Profile'/>
        
        <Collapse in={this.state.open}>
        	<div className="panel-body">

          	<form onSubmit={this.handleSubmit.bind(this)}>

              <FormGroup>
                <ControlLabel className='pull-left'>phone:</ControlLabel>
                <FormControl
                	type="text" 
                	placeholder="phone number" 
                	value={this.state.phonenumber}
                	onChange={this.handlephoneChange.bind(this)}
                />
              </FormGroup>
        
              <FormGroup type="text">
                <ControlLabel className='pull-left'>Initial Price:</ControlLabel>
                <FormControl
                  type="text" 
                  placeholder="Initial Price" 
                  value={this.state.initialPrice}
                 onChange={this.handleInpriceChange.bind(this)}
                />
              </FormGroup>

              <FormGroup>
                <ControlLabel className='pull-left'>Date Bought:</ControlLabel>
                <FormControl 
                	type="Date" 
                	min="01/01/2000" 
                	max={this.state.currentDate} 
                	placeholder="01/01/2017"
                	value={this.state.boughtdate}
                	onChange={this.handleDateChange.bind(this)}
                	/>
              </FormGroup>
              
              <FormGroup>
                <ControlLabel className='pull-left'>Target Price:</ControlLabel>
                <FormControl 
                	type="number" 
                
                	placeholder="your Target price!!!"
                	value={this.state.targetprice}
                	onChange={this.handletargetChange.bind(this)}
                />
              </FormGroup>
          
              
              <Button	type="reset" className="pull-left" onClick={this.reset}>
              	<Glyphicon glyph='trash'>&nbsp;Clear</Glyphicon>
              </Button>
            
            <Button type="submit" className='pull-left'>
                Submit            
              </Button>
            </form>
        </div>
      </Collapse>
    </div>

		)


	}


}