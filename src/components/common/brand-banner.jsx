import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * BrandBanner 컴포넌트
 *
 * Props:
 * @param {string} title - 배너 좌상단에 표시할 타이틀 텍스트 [Required]
 *
 * Example usage:
 * <BrandBanner title="D-599" />
 */
function BrandBanner({ title }) {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: { xs: 3, md: 5 },
        px: { xs: 2, md: 4 },
        textAlign: 'left',
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: '1.6rem', md: '2.6rem' } }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default BrandBanner;
