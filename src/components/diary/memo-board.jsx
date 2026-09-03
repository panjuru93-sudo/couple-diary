import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MemoCard from '../ui/memo-card';

const initialMemoItems = [
  { id: 'travel', title: '국내 여행지', items: ['⛰️ 속초', '🌊 서울'], hasCheckbox: true },
  { id: 'playlist', title: '플레이리스트 ♡', items: ['Tyla - Nutrela', 'Zeth Pacaib', 'A-Live', 'Circles'] },
  { id: 'allergy', title: '알러지', items: ['갑각류', '고양이'] },
];

/**
 * MemoBoard 컴포넌트
 *
 * Props: 없음 (초기 memoItems를 기반으로 카드 그리드를 렌더링하며, + 버튼으로 새 메모를 추가하고
 * 각 카드의 연필 아이콘으로 제목·항목을 수정할 수 있음)
 *
 * Example usage:
 * <MemoBoard />
 */
function MemoBoard() {
  const [memoItems, setMemoItems] = useState(initialMemoItems);

  const handleAddMemo = () => {
    const title = window.prompt('새 메모 제목을 입력해주세요');
    if (!title) {
      return;
    }
    setMemoItems((prev) => [...prev, { id: `memo-${Date.now()}`, title, items: [] }]);
  };

  const handleEditMemo = (id) => {
    setMemoItems((prev) =>
      prev.map((memo) => {
        if (memo.id !== id) {
          return memo;
        }

        const nextTitle = window.prompt('메모 제목을 수정해주세요', memo.title);
        const resolvedTitle = nextTitle === null || nextTitle.trim() === '' ? memo.title : nextTitle.trim();

        const nextItemsText = window.prompt(
          '항목을 쉼표(,)로 구분해서 입력해주세요',
          memo.items.join(', '),
        );
        if (nextItemsText === null) {
          return { ...memo, title: resolvedTitle };
        }

        const nextItems = nextItemsText
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean);

        return { ...memo, title: resolvedTitle, items: nextItems };
      }),
    );
  };

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 2.5, md: 4 } }}>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          textAlign: 'center',
          py: { xs: 1, md: 1.5 },
          mb: { xs: 1.5, md: 2.5 },
        }}
      >
        <Typography variant="h2" sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
          Memo
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 1.5, md: 2.5 }}>
        {memoItems.map((memo) => (
          <Grid key={memo.id} size={{ xs: 6, md: 4 }}>
            <MemoCard
              title={memo.title}
              items={memo.items}
              hasCheckbox={memo.hasCheckbox}
              onEdit={() => handleEditMemo(memo.id)}
            />
          </Grid>
        ))}
        <Grid size={{ xs: 6, md: 4 }}>
          <MemoCard isAddCard onAdd={handleAddMemo} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MemoBoard;
