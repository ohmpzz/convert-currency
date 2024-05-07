import { useState, useEffect } from "react";
import { Container, TextField, Typography, Stack } from "@mui/material";

function App() {
  const [from, setFrom] = useState<number | null>(null);
  const [to, setTo] = useState<number | null>(40.5);
  const [calculated, setCalculated] = useState<string>("0");

  useEffect(() => {
    setCalculated((+(from || 0) * +(to || 0)).toFixed(2));
  }, [from, to]);

  return (
    <Container>
      <Stack flexDirection={"column"} spacing={4} mt={6} justifyContent={"center"}>
        <TextField
          type="number"
          label="From"
          value={from}
          onChange={(e) => {
            const value = e?.target?.value;
            setFrom(Number(value) || null);
          }}
        />
        <TextField
          type="number"
          label="To"
          value={to}
          onChange={(e) => {
            const value = e?.target?.value;
            setTo(Number(value) || null);
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
