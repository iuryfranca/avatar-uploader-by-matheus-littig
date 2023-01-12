import { render } from '@testing-library/react';
import * as serializer from 'jest-stitches';
import { Avatar } from '.';

expect.addSnapshotSerializer(serializer);
expect.extend(serializer.matchers);

const avatarData = {
  src: 'https://avatars0.githubusercontent.com/u/8186664?s=460&u=e9f9c8f8f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9&v=4',
  size: '100%',
  error: true,
};

describe('Avatar component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Avatar src={avatarData.src} size={avatarData.size} />,
    );

    expect(getByTestId('avatar-image')).toBeInTheDocument();
  });

  it('should show the error icon', () => {
    const { getByTestId } = render(
      <Avatar
        src={avatarData.src}
        size={avatarData.size}
        error={avatarData.error}
      />,
    );

    expect(getByTestId('error-icon')).toBeInTheDocument();
  });

  it('change the background image zoom', () => {
    const { getByTestId } = render(
      <Avatar src={avatarData.src} size={avatarData.size} />,
    );

    expect(getByTestId('avatar-image')).toHaveStyle({ backgroundSize: '100%' });
  });
});
