import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const reactions = ['⭐', '❤️', '😊', '🍀'];

/**
 * TodayLetterCard 컴포넌트
 *
 * Props:
 * @param {string} message - 편지 카드에 표시할 본문 텍스트 [Optional]
 *
 * Example usage:
 * <TodayLetterCard message="이 세상이 무너져도 우리 둘은 함께일 거야" />
 */
function TodayLetterCard({
  message = '이 세상이 무너져도\n우리 둘은 함께일 거야\n\n오늘도 만나서 행복해',
}) {
  return (
    <Box sx={{ px: { xs: 2, md: 3 }, pb: { xs: 2, md: 3 } }}>
      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
        Today&apos;s Letter
      </Typography>

      <Box
        sx={{
          position: 'relative',
          bgcolor: 'secondary.main',
          color: 'secondary.contrastText',
          border: '2px solid',
          borderColor: 'primary.light',
          borderRadius: 2,
          p: { xs: 3, md: 3.5 },
          minHeight: 140,
          backgroundImage:
            'repeating-linear-gradient(rgba(255,255,255,0) 0px, rgba(255,255,255,0) 26px, rgba(255,255,255,0.08) 27px), ' +
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'2\' stitchTiles=\'stitch\'/><feColorMatrix type=\'saturate\' values=\'0\'/></filter><rect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.35\'/></svg>")',
          backgroundBlendMode: 'soft-light, normal',
          mb: { xs: 3.5, md: 4 },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            position: 'relative',
            whiteSpace: 'pre-line',
            fontFamily: '"Playfair Display", serif',
            fontSize: '0.85rem',
            lineHeight: '27px',
          }}
        >
          {message}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        {reactions.map((emoji) => (
          <Box
            key={emoji}
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              bgcolor: 'background.paper',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              boxShadow: 1,
            }}
          >
            {emoji}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TodayLetterCard;
