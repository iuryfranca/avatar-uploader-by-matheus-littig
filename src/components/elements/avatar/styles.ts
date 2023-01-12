import { styled } from '@stitches/react';

export const AvatarWrapper = styled('div', {
  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    bg: {
      error: {
        width: '100px',
        height: '100px',

        background: '$low_red',
        color: '$red',
      },
      default: {
        background: 'white',
      },
    },
  },

  defaultVariants: {
    bg: 'default',
  },
});
