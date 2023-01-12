import { render } from '@testing-library/react';
import { AvatarUpload } from '.';

describe('Avatar upload component', () => {
  it('should render without errors', () => {
    const { baseElement } = render(<AvatarUpload />);
    expect(baseElement).toBeTruthy();
  });
});
