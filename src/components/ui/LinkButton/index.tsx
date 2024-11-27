import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, FC, ReactNode } from 'react';

type LinkButtonProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: 'primary' |'secondary';
} & 
  ButtonHTMLAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLButtonElement>;

export const LinkButton: FC<LinkButtonProps> = ({
  as: Component = 'a',
  children,
  className,
  variant = 'secondary',
  ...props
}) => {
  return (
    <Component
      className={`link-button ${className || ''}`}
      {...props}
      data-variant={variant}
    >
      {children}
    </Component>
  );
};
