'use client';

import { MouseEvent } from 'react';
import {
  Button,
  CircularProgress,
  type ButtonProps,
  Box,
  Typography,
} from '@mui/material';

export interface LoadingButtonProps
  extends Omit<ButtonProps, 'loadingIndicator' | 'loadingPosition'> {
  loading?: boolean;
  spinnerSize?: number | string;
}

export function LoadingButton(props: LoadingButtonProps) {
  const { loading, spinnerSize, onClick, children, ...restProps } = props;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      event.stopPropagation();
      event.preventDefault();
    } else {
      onClick?.(event);
    }
  };

  const spinner = loading ? (
    <CircularProgress color="inherit" size={spinnerSize || '0.875rem'} />
  ) : undefined;

  return (
    <Button {...restProps} onClick={handleClick}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {spinner}
        {children}
      </Box>
    </Button>
  );
}
