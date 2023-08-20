import type { FC, PropsWithChildren } from 'react';

import s from './Container.module.scss';

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children }) => {
  return <nav className={s.container}>{children}</nav>;
};

export interface ContainerProps {}
