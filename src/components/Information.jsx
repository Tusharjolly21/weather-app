import { Box ,Typography,makeStyles} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness'
import OpacityIcon from '@material-ui/icons/Opacity'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import Brightness6Icon from '@material-ui/icons/Brightness6'
import DehazeIcon from '@material-ui/icons/Dehaze'
import CloudIcon from '@material-ui/icons/Cloud'

const useStyle = makeStyles({
    component:{
        margin: '50px'
    },
    row:{
        padding: '10px',
        fontSize: '25px',
        fontWeight: 'bold'
    },
    value:{
        color:'#fff'
    },
    icons:{
        margin: 5,
        color: 'darkred'
    }
})

const Info = ({data}) => {

const classes = useStyle();
  return(
      data ?
    <Box className={classes.component}>
        <Typography className={classes.row}><LocationOnIcon className={classes.icons}/>Location: <Box className={classes.value} component="span">{data.name}, {data.sys.country}</Box></Typography>
        <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icons}/>Temperature: <Box className={classes.value} component="span">{data.main.temp} Celcius </Box></Typography>
        <Typography className={classes.row}><OpacityIcon className={classes.icons}/>Humidity: <Box className={classes.value} component="span">{data.main.humidity}%</Box></Typography>
        <Typography className={classes.row}><Brightness5Icon className={classes.icons}/>Sunrise: <Box className={classes.value} component="span">{new Date(data.sys.sunrise*1000).toLocaleTimeString()} </Box></Typography>
        <Typography className={classes.row}><Brightness6Icon className={classes.icons}/> Sunset: <Box className={classes.value} component="span">{new Date(data.sys.sunset*1000).toLocaleTimeString()} </Box></Typography>
        <Typography className={classes.row}><DehazeIcon className={classes.icons}/>Condition:<Box className={classes.value} component="span">{data.weather[0].main} </Box></Typography>
        <Typography className={classes.row}><CloudIcon className={classes.icons}/>Clouds: <Box className={classes.value} component="span">{data.clouds.all}%</Box></Typography>
    </Box>: ''
  );
};
export default Info;
