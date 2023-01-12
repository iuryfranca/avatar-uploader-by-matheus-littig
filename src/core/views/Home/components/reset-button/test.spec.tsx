import { render } from '@testing-library/react';
import { ResetButton } from '.';

describe('Reset Button component', () => {
  it('should render without errors', () => {
    const { baseElement } = render(
      <ResetButton onReset={() => Promise.resolve()} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
