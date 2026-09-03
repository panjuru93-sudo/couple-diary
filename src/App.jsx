import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BrandBanner from './components/common/brand-banner';
import PhotoMemoryStrip from './components/diary/photo-memory-strip';
import TodayLetterCard from './components/diary/today-letter-card';
import MemoBoard from './components/diary/memo-board';
import ScheduleBanner from './components/diary/schedule-banner';

function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        py: { xs: 2, md: 4 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: { xs: 360, sm: 480, md: 640, lg: 760 },
          overflow: 'hidden',
          bgcolor: '#FAF5EA',
          boxShadow: { xs: 1, md: 4 },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <BrandBanner title="D-599" />
        <PhotoMemoryStrip />
        <TodayLetterCard />
        <MemoBoard />
        <ScheduleBanner />
      </Paper>
    </Box>
  );
}

export default App;
