import cx from 'clsx';
import { FC } from 'react';

import s from './Icon.module.scss';

export const Icon: FC<IconProps> = ({ className, isExpanded }) => {
  return (
    <svg
      className={cx(s.icon, isExpanded && s.expanded, className)}
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.00259 12.6667L11.3359 8L6.00259 3.33333V12.6667Z" fill="currentColor" />
    </svg>
  );
};

export interface IconProps {
  className?: string;
  isExpanded?: boolean;
}
