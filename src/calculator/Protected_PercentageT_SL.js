import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Protected_PercentageT_SL = () => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("scalping");
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);
  const [target, setTarget] = useState("");

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };
  const handleVerify = () => {
    if (password == "Pass@1212") {
      setShow(true);
      setPassword("");
      setHigh(0);
      setLow(0);
    } else {
      setShow(false);
    }
  };

  const calculateResultTarget = (highVal, lowVal) => {
    const numericHighValue = parseFloat(highVal);
    const numericLowValue = parseFloat(lowVal);

    if (!isNaN(numericHighValue) && !isNaN(numericLowValue)) {
      const diff = numericHighValue - numericLowValue;
      return numericHighValue + diff;
    } else {
      return "";
    }
  };

  useEffect(() => {
    const result = calculateResultTarget(high, low);
    setTarget(result);
  }, [high, low]);
  return (
    <Container sx={{ mt: 2 }}>
      <Paper elevation={3} sx={{ p: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <h2>Advance Percentage Calculator</h2>
          </Grid>
        </Grid>
        {!show && (
          <Grid container justifyContent="center">
            <Grid item md={9} sm={9} xs={12}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item md={4} sm={8} xs={8}>
                  <TextField
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e?.target?.value)}
                    type="password"
                    focused={true}
                    label="Password"
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={4}>
                  <Button variant="contained" fullWidth onClick={handleVerify}>
                    Verify
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}

        {show && (
          <FormControl style={{ marginTop: 10 }}>
            <FormLabel>Strategy</FormLabel>
            <RadioGroup value={value} onChange={handlePasswordChange}>
              <Grid container spacing={5}>
                <Grid item md={6} xs={6}>
                  <FormControlLabel
                    value="scalping"
                    control={<Radio />}
                    label="Scalping"
                  />
                </Grid>
                <Grid item md={6} xs={6}>
                  <FormControlLabel
                    style={{ textWrap: "nowrap" }}
                    value="sma30"
                    control={<Radio />}
                    label="Coming-Soon"
                    disabled
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        )}

        {show && (
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={12} xs={12}>
              <Grid container spacing={3} justifyContent="center">
                <Grid item md={3} sm={4} xs={12}>
                  <TextField
                    fullWidth
                    value={high}
                    onChange={(e) => setHigh(e?.target?.value)}
                    type="number"
                    label="High"
                  />
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                  <TextField
                    fullWidth
                    value={low}
                    onChange={(e) => setLow(e?.target?.value)}
                    type="number"
                    label="Low"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
              <Grid container spacing={3} justifyContent="center">
                <Grid item md={4} sm={4} xs={4}>
                  <h2 style={{ color: "green" }}>Target : &#8377; {target}</h2>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <h2>Buy Price : &#8377; {high}</h2>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <h2 style={{ color: "red" }}>Stop Loss : &#8377; {low}</h2>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Paper>
    </Container>
  );
};

export default Protected_PercentageT_SL;
