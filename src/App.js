import React from 'react';
import './App.css';
import ResourcesPanel from './settlement-components/ResourcesPanel';
import SettlementCenter from './settlement-components/SettlementCenter';
import Farms from './settlement-components/Farms/index';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <ResourcesPanel />
        <span>The settlement</span>
        <SettlementCenter />
        <Farms />
      </div>
    </div>
  );
}

export default App;
