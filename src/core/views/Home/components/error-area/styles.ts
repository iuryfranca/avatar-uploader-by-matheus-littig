import { styled } from '@stitches/react';

export const ErrorAreaWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '30px',

  div: {
    display: 'flex',
    flexDirection: 'column',

    gap: '15px',

    p: {
      color: '$red',
    },

    a: {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
});
