import React from "react";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h3-bold"
  | "h4"
  | "h5"
  | "body-l"
  | "body-m"
  | "body-m-bold"
  | "body-s"
  | "label-l"
  | "label-m"
  | "label-s"
  | "caption-l"
  | "caption-m"
  | "button-l"
  | "button-m"
  | "button-s";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  variant = "body-m",
  as: Component = "span",
  children,
  className = "",
  ...props
}) => {
  return (
    <Component
      className={`text-${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};
