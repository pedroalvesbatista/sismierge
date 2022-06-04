import React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CardContent,
  Card,
} from "@mui/material";

const RinkingCard = ({ title, label, id, value, handleChangeFunc, option }) => {
  return (
    <>
      <Card className="m-4">
        <CardContent
          style={{
            backgroundColor: "#2cb29e",
            color: "#fff",
          }}
        >
          <h3>{title}</h3>
          <FormControl sx={{ m: 1, minWidth: 80 }} required>
            <InputLabel id={id}>Selecione {label}</InputLabel>
            <Select
              style={{
                color: "#fff",
              }}
              labelId={id}
              id={id}
              value={value}
              onChange={handleChangeFunc}
              autoWidth
              label={label}
            >
              {option?.map((elem) => (
                <MenuItem value={elem}>{elem}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
};

export default RinkingCard;