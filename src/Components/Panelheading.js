import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export default props => (
	<div className="panel-heading" style={{background: 'lightblue'}} onClick={props.toggle}>
		<div className='clearfix'>
      <span className='pull-left'>
      	<Glyphicon style={{color: 'white'}} glyph={props.glyph}/>&nbsp;
      	<a 
      		onClick={props.toggle} 
      		style={{color:'white', textDecoration: 'none', cursor: 'pointer'}}>
      		{props.title}
      	</a>
      </span>

    	<Button className='pull-right' bsStyle='default' bsSize='xsmall' onClick={props.toggle}>
    		<i className="fa fa-arrows-v" aria-hidden="true"></i>
    	</Button>
    </div>
  </div>
)