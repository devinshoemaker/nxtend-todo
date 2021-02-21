import { ionFireEvent } from '@ionic/react-test-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import RegisterPage from './RegisterPage';

describe('RegisterPage', () => {
  const handleLogin = jest.fn();
  const handleRegister = jest.fn();

  beforeEach(() => {
    handleLogin.mockReset();
    handleRegister.mockReset();
  });

  it('should render successfully', () => {
    expect(
      render(<RegisterPage onLogin={handleLogin} onRegister={handleRegister} />)
    ).toBeTruthy();
  });

  it('should make register button disabled by default', () => {
    render(<RegisterPage onLogin={handleLogin} onRegister={handleRegister} />);
    expect(screen.getByRole('button', { name: /register/i })).toHaveProperty(
      'disabled',
      true
    );
  });

  it('should make register button disabled if email is entered and password is not', () => {
    render(<RegisterPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTitle(/email/i), 'test@email.com');
    expect(screen.getByRole('button', { name: /register/i })).toHaveProperty(
      'disabled',
      true
    );
  });

  it('should make register button disabled if password is entered but email and confirm password is not', () => {
    render(<RegisterPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTestId('password'), 'password');
    expect(screen.getByRole('button', { name: /register/i })).toHaveProperty(
      'disabled',
      true
    );
  });

  it('should make register button disabled if confirm password is entered but email and password is not', () => {
    render(<RegisterPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTestId('confirm-password'), 'password');
    expect(screen.getByRole('button', { name: /register/i })).toHaveProperty(
      'disabled',
      true
    );
  });

  it('should make register button disabled if email and password are entered and confirm password is not', () => {
    render(<RegisterPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTitle(/email/i), 'test@email.com');
    ionFireEvent.ionChange(screen.getByTestId('password'), 'password');
    expect(screen.getByRole('button', { name: /register/i })).toHaveProperty(
      'disabled',
      true
    );
  });

  it('should make register button disabled if password and confirm password are entered and email is not', () => {
    render(<RegisterPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTestId('password'), 'password');
    ionFireEvent.ionChange(screen.getByTestId('confirm-password'), 'password');
    expect(screen.getByRole('button', { name: /register/i })).toHaveProperty(
      'disabled',
      true
    );
  });

  it('should make register button disabled if email is entered but passwords do not match', () => {
    render(<RegisterPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTitle(/email/i), 'test@email.com');
    ionFireEvent.ionChange(screen.getByTestId('password'), 'password');
    ionFireEvent.ionChange(screen.getByTestId('confirm-password'), 'password1');
    expect(screen.getByRole('button', { name: /register/i })).toHaveProperty(
      'disabled',
      true
    );
  });

  it('should make register button enabled if email is entered and passwords match', () => {
    render(<RegisterPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTitle(/email/i), 'test@email.com');
    ionFireEvent.ionChange(screen.getByTestId('password'), 'password');
    ionFireEvent.ionChange(screen.getByTestId('confirm-password'), 'password');
    expect(screen.getByRole('button', { name: /register/i })).toHaveProperty(
      'disabled',
      false
    );
  });

  it('should call handleLogin if form is valid and register button is clicked', () => {
    render(<RegisterPage onLogin={handleLogin} onRegister={handleRegister} />);
    ionFireEvent.ionChange(screen.getByTitle(/email/i), 'test@email.com');
    ionFireEvent.ionChange(screen.getByTestId('password'), 'password');
    ionFireEvent.ionChange(screen.getByTestId('confirm-password'), 'password');
    userEvent.click(screen.getByRole('button', { name: /register/i }));
    expect(handleRegister).toHaveBeenCalledTimes(1);
  });

  it('should call handleRegister if the register button is clicked', () => {
    render(<RegisterPage onLogin={handleLogin} onRegister={handleRegister} />);
    userEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(handleLogin).toHaveBeenCalledTimes(1);
  });
});
