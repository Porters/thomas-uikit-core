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

const variantToTag: Record<TextVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  'h3-bold': 'h3',
  h4: 'h4',
  h5: 'h5',
  'body-l': 'p',
  'body-m': 'p',
  'body-m-bold': 'p',
  'body-s': 'p',
  'label-l': 'label',
  'label-m': 'label',
  'label-s': 'label',
  'caption-l': 'span',
  'caption-m': 'span',
  'button-l': 'span',
  'button-m': 'span',
  'button-s': 'span',
};

export const Text: React.FC<TextProps> = ({
  variant = "body-m",
  as,
  children,
  className = "",
  ...props
}) => {
  const Component = as || variantToTag[variant] || 'span';
  return (
    <Component
      className={`text-${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};
