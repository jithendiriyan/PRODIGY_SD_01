import React from "react";
import { Grid, TextField, Container } from "@mui/material";
import { useTemperatureLogic } from "./logic.js";

function TemperatureConversion() {
  const { temperature, convertTemperature, handleClear } = useTemperatureLogic();

  return (
    <Container>
      <Grid container direction="column" spacing={3} alignItems="center" marginTop={15}>
        <Grid item xs={12}>
          <TextField
            label="Celsius"
            variant="outlined"
            fullWidth
            value={temperature.celsius}
            onChange={(e) => convertTemperature(Number(e.target.value), "Celsius")}
            sx={{
              input: { fontWeight: "600", fontFamily: "Arial, sans-serif", fontSize: "18px" },
              "& .MuiOutlinedInput-notchedOutline": { borderWidth: "3px", borderColor: "red" },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Fahrenheit"
            variant="outlined"
            fullWidth
            value={temperature.fahrenheit}
            onChange={(e) => convertTemperature(Number(e.target.value), "Fahrenheit")}
            sx={{
              input: { fontWeight: "600", fontFamily: "Arial, sans-serif", fontSize: "18px" },
              "& .MuiOutlinedInput-notchedOutline": { borderWidth: "3px", borderColor: "brown" },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Kelvin"
            variant="outlined"
            fullWidth
            value={temperature.kelvin}
            onChange={(e) => convertTemperature(Number(e.target.value), "Kelvin")}
            sx={{
              input: { fontWeight: "600", fontFamily: "Arial, sans-serif", fontSize: "18px" },
              "& .MuiOutlinedInput-notchedOutline": { borderWidth: "3px", borderColor: "orange" },
            }}
          />
        </Grid>
      </Grid>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "transparent",
            borderColor: "black",
            borderWidth: "3px",
            fontFamily: "Arial, sans-serif",
            fontSize: "17px",
          }}
        >
          Convert
        </button>
        <button
          type="button"
          onClick={handleClear}
          style={{
            padding: "10px 20px",
            backgroundColor: "transparent",
            borderColor: "black",
            borderWidth: "3px",
            fontFamily: "Arial, sans-serif",
            fontSize: "17px",
          }}
        >
          Clear
        </button>
      </div>
    </Container>
  );
}

export default TemperatureConversion;
