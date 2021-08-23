import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import CryptoTracker from './CryptoTracker';
import { ChainId, DAppProvider, useEthers, useEtherBalance, EtherBalance } from '@usedapp/core'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export const cryptoNames = (
  <div>
    <ListItem button>
      
    <ListItemText primary="Ether" />
    </ListItem>

    <ListItem button>
      
      
      
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Cardano" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Algorand" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Dogecoin" />
    </ListItem>
  </div>
);
export default cryptoNames;
