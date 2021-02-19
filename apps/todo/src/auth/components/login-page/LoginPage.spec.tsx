import { ionFireEvent } from '@ionic/react-test-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const handleLogin = jest.fn();
  const handleRegister = jest.fn();

  beforeEach(() => {
    handleLogin.mockReset();
    handleRegister.mockReset();
  });

  it('should render successfully', () => {
    expect(
      render(<LoginPage onLogin={handleLogin} onRegister={handleRegister} />)
    ).toBeTruthy();
  });

  it('should make login button disabled by default', () => {
    render(<LoginPage onLogin={handleLogin} onRegister={handleRegister} />);
    expect(screen.getByRole('button', { name: /login/i })).toHaveProperty(
      'disabled',
      true
    );
  });

  it('should make login button disabled if email is entered and password is not', () => {
    render(<LoginPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTitle(/email/i), 'test@email.com');
    expect(screen.getByRole('button', { name: /login/i })).toHaveProperty(
      'disabled',
      true
    );
  });

  it('should make login button disabled if password is entered and email is not', () => {
    render(<LoginPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTitle(/password/i), 'password');
    expect(screen.getByRole('button', { name: /login/i })).toHaveProperty(
      'disabled',
      true
    );
  });

  it('should make login button enabled if email and password are entered', () => {
    render(<LoginPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTitle(/email/i), 'test@email.com');
    ionFireEvent.ionChange(screen.getByTitle(/password/i), 'password');
    expect(screen.getByRole('button', { name: /login/i })).toHaveProperty(
      'disabled',
      false
    );
  });

  it('should call handleLogin if form is valid and login button is clicked', () => {
    render(<LoginPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTitle(/email/i), 'test@email.com');
    ionFireEvent.ionChange(screen.getByTitle(/password/i), 'password');
    userEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(handleLogin).toHaveBeenCalledTimes(1);
  });

  it('should call handleRegister if the register button is clicked', () => {
    render(<LoginPage onLogin={handleLogin} onRegister={handleRegister} />);
    userEvent.click(screen.getByRole('button', { name: /register/i }));
    expect(handleRegister).toHaveBeenCalledTimes(1);
  });
});
