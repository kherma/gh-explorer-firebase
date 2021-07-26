import React from 'react';
import OctocatImage from '../../../images/octocat.png';
import BtnAuthorize from '../../common/BtnAuthorize/BtnAuthorize';

const SignInWindow = () => (
  <div className="flex flex-col items-center justify-center w-11/12 px-5 bg-white border rounded shadow transition-colors sm:w-7/12 lg:w-1/2 xl:w-96 py-7 dark:border-gray-600 dark:bg-gray-700">
    <h2 className="text-2xl text-center uppercase sm:text-4xl transition-colors xl:text-2xl dark:text-white">
      Login with github
    </h2>
    <img className="w-11/12 my-5" src={OctocatImage} alt="octocat logo" />
    <BtnAuthorize />
  </div>
);

export default SignInWindow;
