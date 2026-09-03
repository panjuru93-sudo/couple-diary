import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PersonSchedule from '../ui/person-schedule';

/**
 * ScheduleBanner 컴포넌트
 *
 * Props:
 * @param {string} dateLabel - 표시할 요일/날짜 문구 [Optional, 기본값: 'Monday 8.24']
 *
 * Example usage:
 * <ScheduleBanner dateLabel="Monday 8.24" />
 */
function ScheduleBanner({ dateLabel = 'Monday 8.24' }) {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: { xs: 3, md: 5 },
        px: { xs: 2, md: 4 },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: '1.5rem', md: '2.2rem' }, mb: 2.5 }}
      >
        {dateLabel}
      </Typography>

      <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, justifyContent: 'center' }}>
        <PersonSchedule name="Jae-hyuk" statusText="재혁님은 일정이 없는 날이에요" />
        <PersonSchedule name="Ah-young" statusText="아영님은 일정이 있는 날이에요" />
      </Box>
    </Box>
  );
}

export default ScheduleBanner;
