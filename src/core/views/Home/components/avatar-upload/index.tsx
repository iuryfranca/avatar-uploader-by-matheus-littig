import { useHomeContext } from '@/core/contexts';
import { DropFileArea, ErrorArea, ResetButton, ResizeArea } from '../';
import { Wrapper, ContentAreaWrapper } from './style';

export const AvatarUpload = () => {
  const {
    steep,
    avatarPic,
    saveImage,
    onChangePic,
    setAvatarPic,
    resetContext,
  } = useHomeContext();

  return (
    <Wrapper>
      {steep?.steep_1 && (
        <DropFileArea onChange={onChangePic} avatarPic={avatarPic} />
      )}

      {(steep?.steep_2 || steep?.error) && (
        <ContentAreaWrapper>
          <ResetButton onReset={resetContext} />
          {steep?.steep_2 && (
            <ResizeArea
              avatarPic={avatarPic}
              saveImage={saveImage}
              setAvatarPic={setAvatarPic}
            />
          )}
          {steep?.error && <ErrorArea />}
        </ContentAreaWrapper>
      )}
    </Wrapper>
  );
};
