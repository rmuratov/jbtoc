import type { FC, PropsWithChildren } from 'react';

import cx from 'clsx';

import s from './Container.module.scss';

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, className }) => {
  return (
    <nav className={cx(s.container, className)} data-testid="toc-container">
      {children}
    </nav>
  );
};

export interface ContainerProps {
  className?: string;
}
