import { Box, makeStyles, TextField, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { getData } from "../service/api.js";
import Information from "./Information";

const useStyle = makeStyles({
  component: {
    padding: 10,
    display: "flex",
    background: "#445A6F",
  },
  input: {
    color: "#fff",
    marginRight: 15,
  },
  button: {
    background: "#e67e22",
    color: "#fff",
    width: 150,
    height: 40,
    marginTop: 5,
  },
});
const Form = () => {
  const classes = useStyle();

  const [data, getWeatherData] = useState();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [click,handleClick] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      city && await getData(city, country).then((response) => {
        getWeatherData(response.data);
        console.log(response.data);
      });
    };
    getWeather();
    handleClick(false);
  }, [click]);
  const handleCityChange = (value) => {
    setCity(value);
  };
  const handleCountryChange = (value) => {
    setCountry(value);
  };
  return (
    <>
      <Box className={classes.component}>
        <TextField
          onChange={(e) => handleCityChange(e.target.value)}
          className={classes.input}
          inputProps={{ className: classes.input }}
          label="City"
          variant="standard"
        />
        <TextField
          onChange={(e) => handleCountryChange(e.target.value)}
          inputProps={{ className: classes.input }}
          className={classes.input}
          label="Country"
          variant="standard"
        />
        <Button
        onClick={()=>handleClick(true)}
         className={classes.button}
          color="primary"
           variant="contained">
          Get Weather
        </Button>
      </Box>
      <Information data={data} />
    </>
  );
};
export default Form;
