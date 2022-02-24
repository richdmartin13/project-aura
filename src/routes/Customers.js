import '../App.css';
import React from 'react';
import { customerList } from '../config/customerList';

function Customers(props) {

  const custs = customerList.map((customer) => 
    <div className='cListItem'>
      <h4 style={{margin: 0}}>{customer.name}</h4>
      <p style={{margin: 0}}>{customer.description}</p>
      <hr style={{backgroundColor: props.bgColor, borderWidth: '0.7px', opacity: '0.2'}}/>
    </div>
  );

  return (
    <div style={{
      display: 'flex',flexFlow: 'column nowrap', alignItems: 'flex-start', 
      justifyContent: 'flex-start', width: '100%', overflowY: 'hidden',
      maxHeight: '90vh',
    }}>
      <div className='customerList'
      style={{  height: '100vh'}}>
        {custs}
      </div>
    </div>
  );
}

export default Customers;