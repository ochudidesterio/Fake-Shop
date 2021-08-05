import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
     display: 'flex',
    alignItems: 'center',
     justifyContent:'space-between',
    marginTop:'80px',
    
    margin: 'auto'
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  
}));