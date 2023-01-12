import { Avatar, Button, RangeSlider } from '@/components/elements';
import { AvatarPic } from '@/core/contexts';
import { Dispatch, useState } from 'react';
import { ResizeAreaWrapper } from './styles';

interface ResizeAreaProps {
  avatarPic: AvatarPic;
  saveImage: () => void;
  setAvatarPic: any;
}

export const ResizeArea = ({
  avatarPic,
  saveImage,
  setAvatarPic,
}: ResizeAreaProps) => {
  return (
    <ResizeAreaWrapper>
      <Avatar src={avatarPic?.src} size={`${avatarPic?.size[0]}%`} />

      <div>
        <p>Crop</p>
        <RangeSlider
          step={0.1}
          min={0}
          max={200}
          values={avatarPic?.size}
          onChange={values => setAvatarPic({ ...avatarPic, size: values })}
        />

        <span>
          <Button type="filled" onClick={saveImage}>
            Save
          </Button>
        </span>
      </div>
    </ResizeAreaWrapper>
  );
};
