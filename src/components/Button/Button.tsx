import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';
import styles from './Button.module.css';

type BaseProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsLinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const buildClassName = (
  variant: NonNullable<ButtonProps['variant']>,
  fullWidth: boolean,
  className: string,
) =>
  `${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${className}`.trim();

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const classes = buildClassName(variant, fullWidth, className);

  if ('href' in props && props.href) {
    const {
      href,
      rel,
      target,
      onClick,
      ...anchorProps
    } = props as ButtonAsLinkProps & {
      onClick?: MouseEventHandler<HTMLAnchorElement>;
    };

    return (
      <a
        className={classes}
        href={href}
        rel={target === '_blank' ? rel ?? 'noreferrer' : rel}
        target={target}
        onClick={onClick}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = props as ButtonAsButtonProps;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
};
