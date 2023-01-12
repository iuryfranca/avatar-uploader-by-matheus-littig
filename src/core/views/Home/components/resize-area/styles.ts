import { styled } from '@stitches/react';

export const ResizeAreaWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '30px',

  div: {
    display: 'flex',
    flexDirection: 'column',

    gap: '15px',

    span: {
      paddingTop: '15px',
      width: '100%',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',

      '@media screen and (max-width: 768px)': {
        justifyContent: 'center',
      },
    },
  },

  '@media screen and (max-width: 768px)': {
    flexDirection: 'column',
  },
});
