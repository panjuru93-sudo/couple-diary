import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MemoCard from '../ui/memo-card';

const memoItems = [
  { title: '국내 여행지', items: ['🏔 속초', '🌊 서울'] },
  { title: '플레이리스트 ♡', items: ['Tyla - Nutrela', 'Zeth Pacaib', 'A-Live', 'Circles'] },
  { title: '알러지', items: ['갑각류', '고양이'] },
];

/**
 * MemoBoard 컴포넌트
 *
 * Props: 없음 (memoItems 상수를 기반으로 카드 그리드를 렌더링)
 *
 * Example usage:
 * <MemoBoard />
 */
function MemoBoard() {
  return (
    <Box sx={{ px: { xs: 2, md: 3 }, pb: { xs: 3, md: 4 } }}>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          textAlign: 'center',
          py: 1,
          mb: 1.5,
        }}
      >
        <Typography variant="h2" sx={{ fontSize: '1.1rem' }}>
          Memo
        </Typography>
      </Box>

      <Grid container spacing={1.5}>
        {memoItems.map((memo) => (
          <Grid key={memo.title} size={{ xs: 6 }}>
            <MemoCard title={memo.title} items={memo.items} />
          </Grid>
        ))}
        <Grid size={{ xs: 6 }}>
          <MemoCard isAddCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MemoBoard;
