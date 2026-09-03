import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import coupleMeadowPhoto from '../../assets/photos/couple-meadow.jpg';

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
 * CoupleRealPhoto 컴포넌트
 *
 * Props:
 * @param {string} src - 표시할 이미지 경로 [Required]
 * @param {string} alt - 대체 텍스트 [Required]
 *
 * Example usage:
 * <CoupleRealPhoto src={coupleMeadowPhoto} alt="들판에서 웃고 있는 커플 사진" />
 */
function CoupleRealPhoto({ src, alt }) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
  );
}

const photoItems = [
  { key: 'sunset-walk', render: () => <SunsetWalkPhoto /> },
  {
    key: 'couple-meadow',
    render: () => <CoupleRealPhoto src={coupleMeadowPhoto} alt="들판에서 웃고 있는 커플 사진" />,
  },
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
        {photoItems.map(({ key, render }) => (
          <Box
            key={key}
            sx={{
              flex: '0 0 auto',
              width: { xs: 88, md: 104 },
              height: { xs: 108, md: 128 },
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            {render()}
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
