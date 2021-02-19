import { Story } from '@storybook/react';
import React from 'react';
import LoginPage, { LoginPageProps } from './LoginPage';

export default {
  title: 'Auth/Login Page',
  component: LoginPage,
};

const Template: Story<LoginPageProps> = (args) => <LoginPage {...args} />;

export const Primary = Template.bind({});
