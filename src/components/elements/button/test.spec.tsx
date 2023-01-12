import { render } from '@testing-library/react';
import * as serializer from 'jest-stitches';
import { Button } from '.';

expect.addSnapshotSerializer(serializer);
expect.extend(serializer.matchers);

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Save</Button>);

    expect(getByText('Save')).toBeInTheDocument();
  });

  /** TO-DO: looks like that stitches is not working with react-testing-library about variations of the component 

  it('change the styles if type has a value', () => {
    const { getByText } = render(<Button type="filled">Save</Button>);

    const button = getByText('Save');
    const buttonElement = document.getElementsByClassName(button.className);

    const style = window.getComputedStyle(buttonElement[0]);

    expect(style.backgroundColor).toBe('#60d685');
  });

  it('change the styles if type has a value', () => {
    const { getByText } = render(<Button type="transparent">Save</Button>);

    const button = getByText('Save');
    const buttonElement = document.getElementsByClassName(button.className);

    const style = window.getComputedStyle(buttonElement[0]);

    expect(style.backgroundColor).toBe('transparent');
  });
  */
});
