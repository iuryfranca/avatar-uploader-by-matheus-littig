import { styled } from '@stitches/react';

export const Button = styled('button', {
  padding: '5px 36px',
  borderRadius: '20px',
  border: 'none',

  fontSize: '$2',
  fontWeight: '500',

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
        color: '$green',

        '&:hover': {
          background: '$low_green',
        },
      },
    },
  },

  defaultVariants: {
    type: 'filled',
  },
});
