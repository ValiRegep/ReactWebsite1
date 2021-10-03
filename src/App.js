import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Footer from './components/Footer';
import './App.css';
import LaptopIcon from '@material-ui/icons/Laptop';
import AppsIcon from '@material-ui/icons/Apps';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';


const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#2e1667"
    },
    secondary:{
      main:"#c7d8ed"
    },
  },
  typography:{
    fontFamily:[
      'Roboto'
    ],
    h4:{
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem'
    },
    h5:{
      fontWeight: 100,
      lineHeight: '2rem'
    },

  }
});

const styles = makeStyles({
  wrapper:{
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace:{
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem"
  },
  grid:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  }
})

function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>

        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace}>
            I'm Valentin and I'm passionate about Digital Marketing
          </Typography>
          <Typography variant="h5" className={classes.littleSpace}>
            I have over a year of experience in both Front End Development and Graphic Design. I have been studying web development for over 2 years, and my experiences in the field have started to appear for more than a year.
          </Typography>
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<LaptopIcon style={{fill: "#4360A6", height: "125", width:"125"}} />} title="Websites" btnTitle="Show me More" />
          <Grid icon={<AppsIcon style={{fill: "#449A76", height: "125", width:"125"}} />} title="React Apps" btnTitle="Show me More" />
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height: "125", width:"125"}} />} title="Performant" btnTitle="Show me More" />
        </div>

        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<InsertPhotoIcon style={{fill: "#5EA780", height: "125", width:"125"}} />} title="Photo Editing" btnTitle="Show me More" />
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height: "125", width:"125"}} />} title="Multi-Platform" btnTitle="Show me More" />
          <Grid icon={<HttpIcon style={{fill: "#2EA09D", height: "125", width:"125"}} />} title="Connected" btnTitle="Show me More" />
        </div>
        <div className={classes.bigSpace}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
