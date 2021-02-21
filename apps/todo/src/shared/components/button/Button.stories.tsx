import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Shared/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
