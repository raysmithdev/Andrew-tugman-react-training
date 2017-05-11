import React from 'react';
import {List, ListItem} from 'material-ui/List';

const CurrencyList = ({ currencies }) => {
  return (
    <List>
      {currencies.map((currency, i) => (
          <ListItem key={i} primaryText={currency.currency + ' : ' + currency.rate} />
      ))}
    </List>
  )
}

export default CurrencyList;
