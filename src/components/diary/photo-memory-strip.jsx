import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

/**
 * SunsetWalkPhoto 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <SunsetWalkPhoto />
 */
function SunsetWalkPhoto() {
  return (
    <Box
      component="svg"
      viewBox="0 0 200 240"
      preserveAspectRatio="xMidYMid slice"
      sx={{ width: '100%', height: '100%' }}
    >
      <defs>
        <linearGradient id="sunsetSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7C873" />
          <stop offset="35%" stopColor="#F4A65A" />
          <stop offset="65%" stopColor="#8A5A8E" />
          <stop offset="100%" stopColor="#2B2340" />
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill="url(#sunsetSky)" />
      <circle cx="100" cy="120" r="34" fill="#FDE2A0" opacity="0.9" />
      <path d="M0 176 Q60 150 100 168 T200 160 V240 H0 Z" fill="#241830" opacity="0.9" />
      <g fill="#1B1224">
        <circle cx="92" cy="176" r="7" />
        <rect x="87" y="182" width="10" height="26" rx="4" />
        <circle cx="112" cy="180" r="7" />
        <rect x="107" y="186" width="10" height="24" rx="4" />
      </g>
    </Box>
  );
}

/**
 * WarmCloseUpPhoto 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <WarmCloseUpPhoto />
 */
function WarmCloseUpPhoto() {
  return (
    <Box
      component="svg"
      viewBox="0 0 200 240"
      preserveAspectRatio="xMidYMid slice"
      sx={{ width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id="warmGlow" cx="35%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#F3D3B8" />
          <stop offset="45%" stopColor="#E7B6A6" />
          <stop offset="75%" stopColor="#C97F72" />
          <stop offset="100%" stopColor="#7A3B3B" />
        </radialGradient>
      </defs>
      <rect width="200" height="240" fill="url(#warmGlow)" />
      <circle cx="70" cy="150" r="52" fill="#EFC2AE" opacity="0.55" />
      <circle cx="140" cy="110" r="46" fill="#7A3B3B" opacity="0.35" />
      <path
        d="M100 210c-16-12-30-24-30-40 0-11 8-19 18-19 6 0 11 3 12 8 1-5 6-8 12-8 10 0 18 8 18 19 0 16-14 28-30 40z"
        fill="#FDEDEB"
        opacity="0.5"
      />
    </Box>
  );
}

const photoVariants = [SunsetWalkPhoto, WarmCloseUpPhoto];

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
        {photoVariants.map((Photo) => (
          <Box
            key={Photo.name}
            sx={{
              flex: '0 0 auto',
              width: { xs: 88, md: 104 },
              height: { xs: 108, md: 128 },
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Photo />
          </Box>
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
