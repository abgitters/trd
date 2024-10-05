import "./App.css";
import PercentageT_SL from "./calculator/PercentageT_SL";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        textAlign: "center",
        background: "linear-gradient(#e0ffcd, #eb2632)",
        height: "100vh",
        pt: 6,
      }}
    >
      <PercentageT_SL />
    </Box>
  );
}

export default App;
