"use client";

import Image from "next/image";
// TODO: handle adding data to database
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import Button from '@mui/material/Button';
import { client } from "@/db/client";
import { addReview } from "@/services/helpers";
import { Int32 } from "mongodb";

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleSubmit = () => {
    return fetch(`http://localhost:3000/api/review`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({value})
    })
  };

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <h1 className="text-2xl text-left pl-10">Chinese Restaurant</h1>
      <Image
        src="/assets/restaurant.jpeg"
        alt="Restaurant Image"
        height={40}
        width={1300}
      />
      <div className="m-10 flex gap-7">
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <p>0</p>
            <Slider
              aria-label="Volume"
              value={value}
              valueLabelDisplay="auto"
              step={0.1}
              min={0}
              max={5}
              onChange={handleChange}
            />
            <p>5</p>
          </Stack>
        </Box>
        <Button variant="outlined" onClick={handleSubmit}>Submit Review</Button>
      </div>
    </main>
  );
}
