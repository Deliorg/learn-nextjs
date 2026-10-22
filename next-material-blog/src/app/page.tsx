import { Box, Typography } from '@mui/material';

export default function Home() {
  console.log(1);
  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
        sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}
      >
        Welcome NextJS!
      </Typography>
    </Box>
  );
}
