import "./App.css";
import { Box } from "@mui/material";
import PercentageT_SL from "./calculator/PercentageT_SL";
import Protected_PercentageT_SL from "./calculator/Protected_PercentageT_SL";

function App() {
  return (
    <Box
      sx={{
        textAlign: "center",
        background: "linear-gradient(#e0ffcd, #eb2632)",
        height: "100%",
        pt: 6,
        pb: 6,
      }}
    >
      <PercentageT_SL />
      <Protected_PercentageT_SL />
    </Box>
  );
}

export default App;
