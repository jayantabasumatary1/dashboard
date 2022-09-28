import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { useState } from 'react';
const SortButton = () => {
    const [sort, setSort] = useState('');

    const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <div>
        <FormControl sx={{ minWidth: 120 }} size="small">
        <InputLabel   id="demo-simple-select-helper-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={sort}
          label="Sort By"
          onChange={handleChange}
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Recent</MenuItem>
          <MenuItem value={2}>Salary</MenuItem>
          <MenuItem value={3}>Full time</MenuItem>
          <MenuItem value={4}>Contractual</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  )
}

export  default SortButton