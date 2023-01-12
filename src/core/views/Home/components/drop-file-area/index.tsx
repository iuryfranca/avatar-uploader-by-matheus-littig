import { AvatarPic, useHomeContext } from '@/core/contexts';
import { AreaWrapper, FileInput, AvatarImg } from './styles';
import { FiImage } from 'react-icons/fi';

interface DropFileAreaProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  avatarPic?: AvatarPic;
}

export const DropFileArea = ({ onChange, avatarPic }: DropFileAreaProps) => {
  return (
    <AreaWrapper>
      <FileInput
        type="file"
        style={{ cursor: 'pointer' }}
        onChange={e => onChange(e)}
      />
      {avatarPic && avatarPic.src !== '' && (
        <AvatarImg src={avatarPic.src} alt={avatarPic.alt} />
      )}

      <div>
        <span data-testid="title-area">
          <FiImage /> Organization Logo
        </span>

        <p>Drop the image here or click to browse.</p>
      </div>
    </AreaWrapper>
  );
};
