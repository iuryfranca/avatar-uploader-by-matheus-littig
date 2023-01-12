import { render } from '@testing-library/react';
import { ErrorArea } from '.';

describe('Error area component', () => {
  it('should render without errors', () => {
    const { baseElement } = render(<ErrorArea />);
    expect(baseElement).toBeTruthy();
  });
});
