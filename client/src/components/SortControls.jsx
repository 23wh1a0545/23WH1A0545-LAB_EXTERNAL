import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const SortControls = ({ sortOrder, setSortOrder }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <FormControl size="small">
        <InputLabel>Sort Order</InputLabel>
        <Select
          value={sortOrder}
          label="Sort Order"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <MenuItem value="desc">Newest First</MenuItem>
          <MenuItem value="asc">Oldest First</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={() => setSortOrder('asc')}>Sort Ascending</Button>
      <Button variant="contained" onClick={() => setSortOrder('desc')}>Sort Descending</Button>
    </Box>
  );
};

export default SortControls;