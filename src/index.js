import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './App';
import './index.css';

import Perf from 'react-addons-perf';

ReactDOM.render(
  <Cards
    maxCardWidth={ 250 }
    minCardWidth={ 200 }
    cardSpace={ 20 }
    cards={[
      { text: 'Card 1' },
      { text: 'Card 2' },
      { text: 'Card 3' },
      { text: 'Card 4' },
      { text: 'Card 5' },
      { text: 'Card 6' },
      { text: 'Card 7' },
      { text: 'Card 8' },
      { text: 'Card 9' },
      { text: 'Card 10' },
      { text: 'Card 11' }
    ]}
  />,
  document.getElementById('root')
);

window.Perf = Perf;