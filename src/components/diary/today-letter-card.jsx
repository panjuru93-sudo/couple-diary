import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

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
  message: initialMessage = '이 세상이 무너져도\n우리 둘은 함께일 거야\n\n오늘도 만나서 행복해',
}) {
  const [message, setMessage] = useState(initialMessage);
  const [activeReactions, setActiveReactions] = useState({});

  const handleReactionClick = (emoji) => {
    setActiveReactions((prev) => ({ ...prev, [emoji]: !prev[emoji] }));
  };

  const handleNewLetter = () => {
    const nextMessage = window.prompt('새 편지 내용을 입력해주세요', message);
    if (!nextMessage) {
      return;
    }
    setMessage(nextMessage);
  };

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, pb: { xs: 2, md: 3 } }}>
      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '0.875rem', md: '1.1rem' } }}>
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
          p: { xs: 3, md: 4.5 },
          minHeight: { xs: 140, md: 200 },
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
            fontSize: { xs: '0.85rem', md: '1rem' },
            lineHeight: '27px',
          }}
        >
          {message}
        </Typography>

        <IconButton
          onClick={handleNewLetter}
          aria-label="새 편지 작성"
          sx={{
            position: 'absolute',
            right: { xs: -10, md: -14 },
            bottom: { xs: -10, md: -14 },
            width: { xs: 32, md: 42 },
            height: { xs: 32, md: 42 },
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            boxShadow: 2,
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          <AddIcon sx={{ fontSize: '1.1rem' }} />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', gap: { xs: 1, md: 1.5 } }}>
        {reactions.map((emoji) => (
          <ButtonBase
            key={emoji}
            onClick={() => handleReactionClick(emoji)}
            sx={{
              width: { xs: 32, md: 42 },
              height: { xs: 32, md: 42 },
              borderRadius: '50%',
              bgcolor: 'background.paper',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: { xs: '1rem', md: '1.3rem' },
              boxShadow: 1,
              border: '2px solid',
              borderColor: activeReactions[emoji] ? 'primary.main' : 'transparent',
              transform: activeReactions[emoji] ? 'scale(1.15)' : 'scale(1)',
              transition: 'transform 0.15s ease, border-color 0.15s ease',
            }}
          >
            {emoji}
          </ButtonBase>
        ))}
      </Box>
    </Box>
  );
}

export default TodayLetterCard;
