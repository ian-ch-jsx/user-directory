import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';
import { MemoryRouter } from 'react-router-dom';

test('users can sign in', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );
  const signinButton = screen.getByRole('link', { name: /login/i });

  userEvent.click(signinButton);

  const username = screen.getByRole('textbox', { name: /email/i });
  const password = screen.getByPlaceholderText(/password/i);
  const submit = screen.getByRole('button', { name: /submit/i });

  userEvent.type(username, 'ian.ch.jsx@gmail.com');
  userEvent.type(password, '12345678');
  userEvent.click(submit);
  screen.debug();
});
