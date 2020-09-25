import React, {useState} from 'react';
import {ReactComponent  as SettlementCenterIcon} from './SettlementCenterSimple.svg';
import './styles.css';

function SettlementCenter() {

  return (
    <div className="settlement-center">
       <SettlementCenterIcon />
    </div>
  );
}

export default SettlementCenter;
