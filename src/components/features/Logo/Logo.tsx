import React from 'react';
import { ReactComponent as LogoIcon } from '../../../images/logo.svg';

const Logo = () => (
  <div className="flex items-center justify-center">
    <LogoIcon className="w-10 h-10 mr-4 text-black fill-current transition-colors dark:text-white md:w-12 md:h-12 xl:w-10 xl:h-10" />
    <h1 className="mt-1 text-3xl font-black uppercase md:text-5xl xl:text-3xl transition-colors">explorer</h1>
  </div>
);

export default Logo;
