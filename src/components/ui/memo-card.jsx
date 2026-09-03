import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

/**
 * MemoCard 컴포넌트
 *
 * Props:
 * @param {string} title - 카드 상단에 표시할 제목 [Optional]
 * @param {Array<string>} items - 카드 본문에 나열할 텍스트 목록 [Optional, 기본값: []]
 * @param {boolean} isAddCard - 항목 추가용 빈 카드 여부 [Optional, 기본값: false]
 * @param {boolean} hasCheckbox - 항목 앞에 체크박스 표시 여부 [Optional, 기본값: false]
 * @param {function} onAdd - isAddCard가 true일 때 클릭 시 실행할 함수 [Optional]
 * @param {function} onEdit - 연필 아이콘 클릭 시 실행할 함수 [Optional]
 *
 * Example usage:
 * <MemoCard title="국내 여행지" items={['속초', '서울']} hasCheckbox onEdit={handleEdit} />
 */
function MemoCard({ title, items = [], isAddCard = false, hasCheckbox = false, onAdd, onEdit }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleToggle = (item) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  if (isAddCard) {
    return (
      <ButtonBase
        onClick={onAdd}
        sx={{
          width: '100%',
          height: '100%',
          minHeight: 96,
          borderRadius: 1,
          bgcolor: 'background.paper',
          border: '1px dashed',
          borderColor: 'divider',
          '&:hover': { bgcolor: 'action.hover', borderColor: 'primary.main' },
        }}
      >
        <AddIcon sx={{ color: 'text.secondary' }} />
      </ButtonBase>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        position: 'relative',
        height: '100%',
        minHeight: 96,
        p: { xs: 1.5, md: 2 },
        bgcolor: 'background.paper',
      }}
    >
      <IconButton
        onClick={onEdit}
        aria-label="메모 수정"
        size="small"
        sx={{ position: 'absolute', top: 4, right: 4, p: 0.5, color: 'text.secondary' }}
      >
        <EditIcon sx={{ fontSize: '0.9rem' }} />
      </IconButton>

      <Typography
        variant="body2"
        sx={{ fontWeight: 600, mb: 1, pr: 2.5 }}
      >
        {title}
      </Typography>
      <Box component="ul" sx={{ m: 0, pl: hasCheckbox ? 0 : 2, listStyle: 'none' }}>
        {items.map((item) => (
          <Box
            component="li"
            key={item}
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '0.8rem',
              color: 'text.secondary',
              mb: 0.5,
            }}
          >
            {hasCheckbox && (
              <Checkbox
                size="small"
                checked={Boolean(checkedItems[item])}
                onChange={() => handleToggle(item)}
                sx={{ p: 0.25, mr: 0.5, color: 'primary.main', '&.Mui-checked': { color: 'primary.main' } }}
              />
            )}
            <Box
              component="span"
              sx={{ textDecoration: hasCheckbox && checkedItems[item] ? 'line-through' : 'none' }}
            >
              {item}
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default MemoCard;
