import type { FC, MouseEventHandler } from 'react';

import cx from 'clsx';

import s from './ButtonExpand.module.scss';

export const ButtonExpand: FC<ButtonExpandProps> = ({ className, isExpanded, onClick }) => {
  return (
    <svg
      className={cx(s.icon, isExpanded && s.expanded, className)}
      data-testid="button-expand"
      height="16"
      onClick={onClick}
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.00259 12.6667L11.3359 8L6.00259 3.33333V12.6667Z" fill="currentColor" />
    </svg>
  );
};

export interface ButtonExpandProps {
  className?: string;
  isExpanded?: boolean;
  onClick?: MouseEventHandler<SVGElement>;
}
