import { AvatarPic } from '@/core/contexts';
import { render } from '@testing-library/react';
import { DropFileArea } from '.';

const avatarPicData: AvatarPic = {
  src: 'https://avatars2.githubusercontent.com/u/5395908?s=460&u=f9f8b8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&v=4',
  alt: 'avatar',
  size: [100],
};

describe('Drop file area component', () => {
  it('shoudl render with no errors', () => {
    const { getByText } = render(<DropFileArea />);

    expect(
      getByText('Drop the image here or click to browse.'),
    ).toBeInTheDocument();
  });

  it('should render already croped avatar image', () => {
    const { getByAltText } = render(<DropFileArea avatarPic={avatarPicData} />);

    expect(getByAltText(avatarPicData.alt)).toBeInTheDocument();
  });
});
