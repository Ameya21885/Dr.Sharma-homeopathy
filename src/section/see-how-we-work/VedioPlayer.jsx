import ReactPlayer from 'react-player';
import { Box } from '@mui/material';

const VedioPlayer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '800px',  // Adjust based on your design needs
        aspectRatio: '16/9',  // Maintain a 16:9 aspect ratio
        overflow: 'hidden',
        position: 'relative',
        margin: 'auto',
      }}
    >
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=iCRVTRR4S6E' 
        width='100%' 
        height='100%' 
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </Box>
  );
};

export default VedioPlayer;
