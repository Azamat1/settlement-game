import React, {useMemo, useState, useEffect, useCallback} from 'react';
import {ReactComponent  as FarmIcon} from './farmIcon.svg';
import './styles.css';

function Farm(props) {
  const [coins, setCoins] = useState(0);
  const [level, setLevel] = useState(1);
  const [coinsIncome, setCoinsIncome] = useState(25);
  const [tax, setTax] = useState(props.tax);
  const [time, setTime] = useState(0);

  useEffect(()=> {
    const updateState = () => {
      setTime(time => time + 1);
    };
    setInterval(updateState, props.timeInterval);
  }, []);

  useEffect(() => {
    setCoins(coins + (coinsIncome - tax));
    if (
      (level === 1 && coins >= 100) 
      || (level === 2 && coins >= 200)
      || (level === 3 && coins >= 500)
    ) {
      const newLevel = level + 1;
      setLevel(newLevel);
      setCoinsIncome(newLevel * 50);
    }
  }, [time]);

  console.log('farm render');
  return (
    <div className="farm">
        <FarmIcon />
        <div className="farm__info-panel">
            <div className="farm__info-item">L: {level}</div>
            <div className="farm__info-item">C: {coins}</div>
            <div className="farm__info-item">I: {coinsIncome}</div>
            <div className="farm__info-item">T: {tax}</div>
        </div>
    </div>
  );
}

export default Farm;
