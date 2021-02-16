import { Meta, Story } from '@storybook/react';
import React from 'react';
import HomePage from './HomePage';

export default {
  title: 'Home/Home Page',
  component: HomePage,
} as Meta;

const Template: Story = () => <HomePage />;

export const Primary = Template.bind({});
