import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import userEvent from '@testing-library/user-event';

it('renders and handles click', async () => {
  const user = userEvent.setup();
  const handle = vi.fn();
  render(<Button onClick={handle}>Press</Button>);
  const btn = screen.getByRole('button', { name: /press/i });
  await user.click(btn);
  expect(handle).toHaveBeenCalled();
});
