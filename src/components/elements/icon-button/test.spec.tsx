import { render } from '@testing-library/react';
import * as serializer from 'jest-stitches';
import { IconButton } from '.';
import { FiX } from 'react-icons/fi';

expect.addSnapshotSerializer(serializer);
expect.extend(serializer.matchers);

describe('IconButton component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <IconButton>
        <FiX data-testid="fix-icon" />
      </IconButton>,
    );

    expect(getByTestId('fix-icon')).toBeInTheDocument();
  });
});
