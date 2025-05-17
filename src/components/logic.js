import { useState } from "react";

export function useTemperatureLogic() {
  const [temperature, setTemperature] = useState({ celsius: "", fahrenheit: "", kelvin: "" });

  const convertTemperature = (value, unit) => {
    if (unit === "Celsius") {
      setTemperature({
        celsius: value,
        fahrenheit: (value * 9) / 5 + 32,
        kelvin: value + 273.15,
      });
    } else if (unit === "Fahrenheit") {
      setTemperature({
        celsius: ((value - 32) * 5) / 9,
        fahrenheit: value,
        kelvin: ((value - 32) * 5) / 9 + 273.15,
      });
    } else if (unit === "Kelvin") {
      setTemperature({
        celsius: value - 273.15,
        fahrenheit: ((value - 273.15) * 9) / 5 + 32,
        kelvin: value,
      });
    }
  };

  const handleClear = () => {
    setTemperature({ celsius: "", fahrenheit: "", kelvin: "" });
  };

  return { temperature, convertTemperature, handleClear };
}
