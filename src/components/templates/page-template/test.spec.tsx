import { render } from '@testing-library/react';
import * as serializer from 'jest-stitches';
import { PageTemplate } from '.';

expect.addSnapshotSerializer(serializer);
expect.extend(serializer.matchers);

describe('PageTemplate component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <PageTemplate title="Home">
        <h1>Hello test</h1>
      </PageTemplate>,
    );

    expect(getByText('Hello test')).toBeInTheDocument();
  });

  it('change the page title correctly', () => {
    const { getByTestId, getByText } = render(
      <PageTemplate title="Home">
        <h1>Hello test</h1>
      </PageTemplate>,
    );

    expect(getByTestId('page-title')).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();
  });
});
