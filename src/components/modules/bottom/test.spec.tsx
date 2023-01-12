import { render } from '@testing-library/react';
import * as serializer from 'jest-stitches';
import { Bottom } from '.';

expect.addSnapshotSerializer(serializer);
expect.extend(serializer.matchers);

describe('Bottom component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Bottom />);

    expect(getByText('Made with 💚 by')).toBeInTheDocument();
  });
});
