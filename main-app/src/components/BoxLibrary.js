import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const GridBox = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));