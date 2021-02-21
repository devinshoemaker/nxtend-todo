import { Story } from '@storybook/react';
import React from 'react';
import RegisterPage, { RegisterPageProps } from './RegisterPage';

export default {
  title: 'Auth/Register Page',
  component: RegisterPage,
};

const Template: Story<RegisterPageProps> = (args) => <RegisterPage {...args} />;

export const Primary = Template.bind({});
