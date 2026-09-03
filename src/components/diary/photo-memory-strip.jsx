import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const photoGradients = [
  'linear-gradient(160deg, #F4A65A 0%, #6B4E8E 60%, #2B2340 100%)',
  'linear-gradient(160deg, #E7B6A6 0%, #C97F72 60%, #7A3B3B 100%)',
];

/**
 * PhotoMemoryStrip 컴포넌트
 *
 * Props:
 * @param {string} heading - 상단에 표시할 안내 문구 [Optional, 기본값: 'Try recording\nyour love']
 *
 * Example usage:
 * <PhotoMemoryStrip />
 */
function PhotoMemoryStrip({ heading = 'Try recording\nyour love' }) {
  return (
    <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 3 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 1.5 }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, whiteSpace: 'pre-line', lineHeight: 1.3 }}
        >
          {heading}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Portfolio
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto' }}>
        {photoGradients.map((gradient) => (
          <Box
            key={gradient}
            sx={{
              flex: '0 0 auto',
              width: { xs: 88, md: 104 },
              height: { xs: 108, md: 128 },
              borderRadius: 2,
              background: gradient,
            }}
          />
        ))}

        <IconButton
          sx={{
            flex: '0 0 auto',
            width: { xs: 88, md: 104 },
            height: { xs: 108, md: 128 },
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          <AddIcon />
        </IconButton>

        <Box
          sx={{
            flex: '0 0 auto',
            width: { xs: 40, md: 48 },
            height: { xs: 108, md: 128 },
            borderRadius: 2,
            bgcolor: 'primary.main',
          }}
        />
      </Box>
    </Box>
  );
}

export default PhotoMemoryStrip;
