import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

/* const useStyles = makeStyles({
  root: {
    width: 200
  }
}); */

export default function ContinuousSlider() {
  //const classes = useStyles();
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={{height: "100px"}}/* className={classes.root} */>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}
