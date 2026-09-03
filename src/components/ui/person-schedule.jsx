import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AddIcon from '@mui/icons-material/Add';

/**
 * PersonSchedule 컴포넌트
 *
 * Props:
 * @param {string} name - 표시할 사람 이름 [Required]
 * @param {string} statusText - 하단에 표시할 일정 상태 문구 [Required]
 *
 * Example usage:
 * <PersonSchedule name="Jae-hyuk" statusText="재혁님은 일정이 없는 날이에요" />
 */
function PersonSchedule({ name, statusText }) {
  const icons = [FavoriteIcon, PhotoCameraIcon, AddIcon];

  return (
    <Box sx={{ textAlign: 'center', flex: 1 }}>
      <Typography
        variant="subtitle2"
        sx={{ color: 'primary.contrastText', fontWeight: 700, mb: 1, fontSize: { xs: '0.875rem', md: '1.05rem' } }}
      >
        {name}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, md: 1.5 }, mb: 1 }}>
        {icons.map((Icon, index) => (
          <IconButton
            key={Icon.displayName ?? index}
            sx={{
              width: { xs: 32, md: 44 },
              height: { xs: 32, md: 44 },
              bgcolor: 'secondary.main',
              color: 'secondary.contrastText',
              '&:hover': { bgcolor: 'secondary.dark' },
            }}
          >
            <Icon sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }} />
          </IconButton>
        ))}
      </Box>
      <Typography
        variant="caption"
        sx={{ color: 'rgba(255,255,255,0.75)', fontSize: { xs: '0.75rem', md: '0.9rem' } }}
      >
        {statusText}
      </Typography>
    </Box>
  );
}

export default PersonSchedule;
