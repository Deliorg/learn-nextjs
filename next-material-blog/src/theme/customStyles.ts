import { SxProps } from '@mui/material/styles';

export const textTruncate: SxProps = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

export const textGradient = (from: string, to: string): SxProps => {
  return {
    background: `linear-gradient(90deg, ${from}, ${to})`,
    color: 'transparent',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
  };
};

export const lineClamp = (n = 1): SxProps => {
  return {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: `${n}`,
    WebkitBoxOrient: 'vertical',
  };
};
