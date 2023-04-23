import classes from "./LogoDisplay.module.css";
import logo from "../img/logo.png";

const LogoDisplay = () => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="" className={classes["logo-img"]}></img>
    </div>
  );
};

export default LogoDisplay;
