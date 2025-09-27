import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded transition bg-accent text-dark hover:scale-105 duration-200 cursor-pointer ${className}`}
      {...rest}
    ></button>
  );
}
