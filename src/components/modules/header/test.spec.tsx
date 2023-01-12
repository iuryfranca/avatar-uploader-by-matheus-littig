import { render } from '@testing-library/react';
import * as serializer from 'jest-stitches';
import { Header } from '.';

expect.addSnapshotSerializer(serializer);
expect.extend(serializer.matchers);

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText('Avatar Uploader')).toBeInTheDocument();
  });
});
