import { render } from '@testing-library/react';
import { HomeView } from '.';

describe('Home page', () => {
  it('should render without errors', () => {
    const { baseElement } = render(<HomeView />);
    expect(baseElement).toBeTruthy();
  });
});
