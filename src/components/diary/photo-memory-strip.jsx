import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import coupleMeadowPhoto from '../../assets/photos/couple-meadow.jpg';
import coupleSunsetPhoto from '../../assets/photos/couple-sunset.jpg';

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
  {
    key: 'couple-sunset',
    render: () => <CoupleRealPhoto src={coupleSunsetPhoto} alt="노을 지는 언덕에서 손잡고 걷는 커플 사진" />,
  },
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
      </Box>
    </Box>
  );
}

export default PhotoMemoryStrip;
