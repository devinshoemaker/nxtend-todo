import React from 'react';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className={`bg-blue-500 p-2 box-border rounded text-md focus:outline-none disabled:opacity-50 ${
        className ? className : ''
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
