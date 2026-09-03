import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';

/**
 * MemoCard 컴포넌트
 *
 * Props:
 * @param {string} title - 카드 상단에 표시할 제목 [Optional]
 * @param {Array<string>} items - 카드 본문에 나열할 텍스트 목록 [Optional, 기본값: []]
 * @param {boolean} isAddCard - 항목 추가용 빈 카드 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <MemoCard title="국내 여행지" items={['속초', '서울']} />
 */
function MemoCard({ title, items = [], isAddCard = false }) {
  if (isAddCard) {
    return (
      <Paper
        elevation={0}
        sx={{
          height: '100%',
          minHeight: 96,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          border: '1px dashed',
          borderColor: 'divider',
        }}
      >
        <AddIcon sx={{ color: 'text.secondary' }} />
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        minHeight: 96,
        p: { xs: 1.5, md: 2 },
        bgcolor: 'background.paper',
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontWeight: 600, mb: 1 }}
      >
        {title}
      </Typography>
      <Box component="ul" sx={{ m: 0, pl: 2, listStyle: 'none' }}>
        {items.map((item) => (
          <Box
            component="li"
            key={item}
            sx={{ fontSize: '0.8rem', color: 'text.secondary', mb: 0.5 }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default MemoCard;
