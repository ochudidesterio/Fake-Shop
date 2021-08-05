import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=>({
  root: {
    transition: "transform 0.15s ease-in-out",
    marginBottom:'10px',
    marginTop:'10px',
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  },
 
}));