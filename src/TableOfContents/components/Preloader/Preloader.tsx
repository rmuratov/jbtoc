import type { FC } from 'react';

import cx from 'clsx';

import s from './Preloader.module.scss';

export const Preloader: FC<PreloaderProps> = () => {
  return (
    <div className={s.preloader} data-testid="toc-preloader">
      <div className={cx(s.item)}></div>
      <div className={cx(s.item)}></div>
      <div className={cx(s.item)}></div>
      <div className={cx(s.item)}></div>
      <div className={cx(s.item)}></div>
      <div className={cx(s.item)}></div>
      <div className={cx(s.item)}></div>
      <div className={cx(s.item)}></div>
      <div className={cx(s.item)}></div>
      <div className={cx(s.item)}></div>
      <div className={cx(s.item)}></div>
    </div>
  );
};

export interface PreloaderProps {}
