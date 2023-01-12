import { styled } from '@stitches/react';

export const LayoutWrapper = styled('div', {
  height: '100vh',
  maxWidth: '$max_desk',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});
