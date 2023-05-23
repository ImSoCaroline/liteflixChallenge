import { ReactNode } from "react";
import styles from '@./styles/Button.module.scss';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  className,
  disabled
}: ButtonProps) {
  let bgColor;
  let color;
  let border = 'none';
  let opacity = 1;

  if (className==='dark') {
    bgColor='#242424';
    color='#FFFFFF';
  } else if (className==='light') {
    bgColor='#FFFFFF';
    color='#242424';
  } else {
    bgColor='rgba(36, 36, 36, 0.5)';
    color='#FFFFFF';
    border='1px solid rgba(255, 255, 255, 0.5)';
  }

  if (disabled) {
    opacity = 0.5
  }

  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
    border: border,
    opacity: opacity
  }

  return (
    <button onClick={onClick} className={`${styles.button} ${className}`} style={buttonStyle} disabled={disabled}>
      {children}
    </button>
  );
}
