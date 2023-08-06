import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

export default function InputBox() {
  return (
    <Sheet
    sx={{
        width: 300,
        mx: 'auto',
        my: 4,
        py: 3,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
    }}
    variant="outlined"
    >
    <div>
        <Typography level="h4" component="h1">
        <strong>Generate Bars 🎼</strong>
        </Typography>
    </div>
    <FormControl id="email">
        <FormLabel>Write a song about...</FormLabel>
            <Textarea
                color="primary"
                minRows={2}
                size="lg"
                variant="outlined"
            />
        </FormControl>
    <Button sx={{ mt: 1 }}>Generate</Button>
    </Sheet> 
  );
}
