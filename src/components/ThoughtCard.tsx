import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

interface ThoughtCardProps {
    thought: string;
}

export default function ThoughtCard({ thought }: ThoughtCardProps) {
  return (
    <Sheet
    sx={{
<<<<<<< Updated upstream
        width: '90%', // Use relative unit
        maxWidth: '900px', // Limit the maximum width
=======
        color: 'white',
        
        width: 900,
>>>>>>> Stashed changes
        mx: 'auto',
        my: 4,
        py: 1, // Reduce padding
        px: 1, // Reduce padding
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
        '@media (max-width:600px)': { // Adjust layout for small screens
            width: '100%',
            py: 0.5,
            px: 0.5,
        }
    }}
    variant="outlined"
    >
    <div>
        <Typography level="h4" component="h1">
            <strong>Thoughts 💭</strong>
        </Typography>
        <Typography sx={{ whiteSpace: 'pre-wrap' }}>
            {thought}
        </Typography>
    </div>
    </Sheet> 
  );
}
