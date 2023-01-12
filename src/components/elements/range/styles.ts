import { styled } from '@stitches/react';

export const RenderTrack = styled('div', {
  height: '4px',
  width: '280px',
  backgroundColor: '$low_green',

  '@media screen and (max-width: 768px)': {
    width: '180px',
  },
});

export const RenderThumb = styled('div', {
  height: '15px',
  width: '15px',
  backgroundColor: '$green',
  borderRadius: '50%',
  border: '2px solid $green',
});
