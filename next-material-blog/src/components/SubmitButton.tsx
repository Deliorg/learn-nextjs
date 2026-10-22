'use client';

import { useFormStatus } from 'react-dom';
import { LoadingButton, LoadingButtonProps } from '@/components/LoadingButtom';

type SubmitButtonProps = Omit<LoadingButtonProps, 'type' | 'loading'>;

export function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return <LoadingButton {...props} type="submit" loading={pending} />;
}
