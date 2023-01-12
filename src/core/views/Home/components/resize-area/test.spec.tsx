import { AvatarPic } from '@/core/contexts';
import { render } from '@testing-library/react';
import { useState } from 'react';
import { ResizeArea } from '.';

let avatarPicData: AvatarPic = {
  src: 'https://avatars2.githubusercontent.com/u/5395908?s=460&u=f9f8b8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&v=4',
  alt: 'avatar',
  size: [100],
};

function setAvatarPic(avatarPic: AvatarPic) {
  avatarPicData = avatarPic;
}

describe('Resize Area component', () => {
  it('should render without errors', () => {
    const { getByText } = render(
      <ResizeArea
        avatarPic={avatarPicData}
        setAvatarPic={setAvatarPic}
        saveImage={() => Promise.resolve()}
      />,
    );
    expect(getByText('Crop')).toBeInTheDocument();
  });

  it('should change avatar pic zoom', () => {
    const { getByText } = render(
      <ResizeArea
        avatarPic={avatarPicData}
        setAvatarPic={setAvatarPic({ ...avatarPicData, size: [50] })}
        saveImage={() => Promise.resolve()}
      />,
    );
    const rangeSlider = getByText('Crop') as HTMLInputElement;
    rangeSlider.value = '50';
    rangeSlider.dispatchEvent(new Event('change'));
    expect(avatarPicData.size).toEqual([50]);
  });
});
