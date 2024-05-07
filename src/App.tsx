import { useState, useEffect } from "react";
import { Container, TextField, Typography, Stack } from "@mui/material";

function App() {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(40.5);
  const [calculated, setCalculated] = useState<string>("0");

  useEffect(() => {
    setCalculated((from * to).toFixed(2));
  }, [from, to]);

  return (
    <Container>
      <Stack flexDirection={"column"} spacing={4} mt={4}>
        <TextField
          label="From"
          value={from}
          onChange={(e) => {
            const value = e?.target?.value;
            setFrom(Number(value) || 0);
          }}
        />
        <TextField
          label="To"
          value={to}
          onChange={(e) => {
            const value = e?.target?.value;
            setTo(Number(value) || 0);
          }}
        />
        <Typography variant="h4" textAlign={"center"}>
          {calculated}
        </Typography>
      </Stack>
    </Container>
  );
}

export default App;
