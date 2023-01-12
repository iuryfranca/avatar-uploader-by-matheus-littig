import { render } from '@testing-library/react';
import * as serializer from 'jest-stitches';
import { RangeSlider } from '.';

expect.addSnapshotSerializer(serializer);
expect.extend(serializer.matchers);

describe('Range Slider component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <RangeSlider max={200} min={0} values={[100]} step={0.1} />,
    );

    expect(getByTestId('track')).toBeInTheDocument();
    expect(getByTestId('thumb')).toBeInTheDocument();
  });
});
