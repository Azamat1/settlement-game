import React, {useState, useMemo} from 'react';
import './styles.css';

function ResourcesPanel() {
  const [coins, setCoins] = useState(0);
  const [coinsIncome, setcoinsIncome] = useState(0);

  return (
    <div className="resources-panel">
        <div className="resources-panel__item resources-panel__coins">{coins}</div>
        <div className="resources-panel__item resources-panel__coins-income">{coinsIncome}</div>
    </div>
  );
}

export default ResourcesPanel;
