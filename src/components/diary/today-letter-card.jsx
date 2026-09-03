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
          bgcolor: 'secondary.main',
          color: 'secondary.contrastText',
          border: '2px solid',
          borderColor: 'primary.light',
          borderRadius: 2,
          p: { xs: 2, md: 2.5 },
          minHeight: 140,
        }}
      >
        <Typography
          variant="body2"
          sx={{ whiteSpace: 'pre-line', fontSize: '0.8rem', lineHeight: 1.7 }}
        >
          {message}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
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
