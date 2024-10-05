import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const PercentageT_SL = () => {
  const [buyPrice, setBuyPrice] = useState();
  const [target, setTarget] = useState();
  const [sl, setSl] = useState();
  const [targetPercentage, setTargetPercentage] = useState(5);
  const [slPercentage, setSlPercentage] = useState(2.5);
  const [value, setValue] = useState("candlestick");

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    if (val == "candlestick") {
      setTargetPercentage(5);
      setSlPercentage(2.5);
    } else if (val == "bb") {
      setTargetPercentage(10);
      setSlPercentage(5);
    } else {
      setTargetPercentage(6);
      setSlPercentage(3);
    }
  };

  const handleBuyPrice = (e) => {
    const price = e?.target?.value;
    setBuyPrice(price);
    calculateResultTarget(price, targetPercentage);
    calculateResultSL(price, slPercentage);
  };
  const handleTargetPercent = (e) => {
    const val = e?.target?.value;
    setTargetPercentage(val);
    calculateResultTarget(buyPrice, val);
  };
  const handleSLPercent = (e) => {
    const val = e?.target?.value;
    setSlPercentage(val);
    calculateResultSL(buyPrice, val);
  };
  const calculateResultTarget = (value, percentage) => {
    const numericValue = parseFloat(value);
    const numericPercentage = parseFloat(percentage);

    if (!isNaN(numericValue) && !isNaN(numericPercentage)) {
      const calculatedResult =
        numericValue + (numericPercentage / 100) * numericValue;
      setTarget(calculatedResult);
    } else {
      setTarget("");
    }
  };
  const calculateResultSL = (value, percentage) => {
    const numericValue = parseFloat(value);
    const numericPercentage = parseFloat(percentage);

    if (!isNaN(numericValue) && !isNaN(numericPercentage)) {
      const calculatedResult =
        numericValue - (numericPercentage / 100) * numericValue;
      setSl(calculatedResult);
    } else {
      setSl("");
    }
  };

  useEffect(() => {
    calculateResultTarget(buyPrice, targetPercentage);
    calculateResultSL(buyPrice, slPercentage);
  }, [value]);

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <h2> Percentage Calculator</h2>
          </Grid>
        </Grid>

        <FormControl>
          <FormLabel>Strategy</FormLabel>
          <RadioGroup value={value} onChange={handleChange}>
            <Grid container spacing={2}>
              <Grid item md={3} xs={6}>
                <FormControlLabel
                  value="candlestick"
                  control={<Radio />}
                  label="Candlestick"
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <FormControlLabel
                  value="sma30"
                  control={<Radio />}
                  label="SMA-30"
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <FormControlLabel
                  value="macd"
                  control={<Radio />}
                  label="MACD"
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <FormControlLabel
                  style={{ textWrap: "nowrap" }}
                  value="bb"
                  control={<Radio />}
                  label="Bollinger Bands"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>

        <Grid container spacing={1}>
          <Grid item md={6} xs={6}></Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Grid container spacing={1}>
              <Grid item md={4} sm={6} xs={12}>
                <TextField
                  fullWidth
                  value={buyPrice}
                  onChange={handleBuyPrice}
                  type="number"
                  label="Buy Price"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" mt={1}>
              <Grid item md={4} sm={4} xs={3}>
                <TextField
                  fullWidth
                  value={targetPercentage}
                  onChange={handleTargetPercent}
                  type="number"
                  focused={true}
                  label="% Target"
                />
              </Grid>
              <Grid item md={4} sm={4} xs={4}>
                <h3 style={{ textWrap: "nowrap" }}>
                  {buyPrice} + {targetPercentage}
                  {"%"} =
                </h3>
              </Grid>
              <Grid item md={4} sm={4} xs={5}>
                <h2 style={{ color: "green" }}>&#8377;{target}</h2>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center">
              <Grid item md={4} sm={4} xs={3}>
                <TextField
                  fullWidth
                  value={slPercentage}
                  onChange={handleSLPercent}
                  type="number"
                  focused={true}
                  label="% SL"
                />
              </Grid>
              <Grid item md={4} sm={4} xs={4}>
                <h3 style={{ textWrap: "nowrap" }}>
                  {buyPrice} - {slPercentage}
                  {"%"} =
                </h3>
              </Grid>
              <Grid item md={4} sm={4} xs={5}>
                <h2 style={{ color: "red" }}>&#8377;{sl}</h2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PercentageT_SL;
