import { styled } from '@stitches/react';

export const IconButton = styled('button', {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: 'none',

  fontSize: '$3',
  fontWeight: '500',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all 0.2s ease-in-out',

  variants: {
    type: {
      filled: {
        background: '$green',
        color: '$white',

        '&:hover': {
          background: '$high_green',
        },
      },
      transparent: {
        background: 'transparent',
        color: '$text',

        '&:hover': {
          color: '$red',
          background: '$low_red',
        },
      },
    },
  },

  defaultVariants: {
    type: 'filled',
  },
});
