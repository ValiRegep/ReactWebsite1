import React from "react";
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        padding: "1.15rem",
        backgroundColor: "#3D2C8D",
        
    },
    menuItem: {
        "&:hover": {
            color:  "#fff"
        }
    }
})

function Footer() {
    const classes = styles();
    return (
        <BottomNavigation className={classes.bar} >
          <BottomNavigationAction className={classes.menuItem} label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#e0e0e0"}}/>} />
          <BottomNavigationAction className={classes.menuItem} label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#e0e0e0"}}/>} />
          <BottomNavigationAction className={classes.menuItem} label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #e0e0e0"}}/>} />
          <BottomNavigationAction className={classes.menuItem} label="YouTube" value="folder" icon={<YouTubeIcon  style={{fill: "#e0e0e0"}}/>} />
        </BottomNavigation>
)
}

export default Footer;  