import React, {useState} from 'react';
import './styles.css';
import Farm from './Farm';

const defaultFarms = [
  {
    id: '1',
    tax: 5
  },
];

function Farms() {
  // const [farms, setFarms] = useState([]);

  return (
    <div className="farms">
      {defaultFarms.map(farm => <Farm key={farm.id} tax={farm.tax} timeInterval={2000} />)}
    </div>
  );
}

export default Farms;
