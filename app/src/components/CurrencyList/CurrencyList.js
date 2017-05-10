import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

const CurrencyList = (props) => (
    <List>
      <ListItem primaryText={props.currencyName} leftIcon={<ContentInbox />} />
    </List>
);

export default CurrencyList;
