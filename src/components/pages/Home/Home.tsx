import React from 'react';
import SignInWindow from '../../features/SignInWindow/SignInWindow';

const Home = () => (
  <section className="relative h-full bg-gray-100 grid place-items-center transition-colors dark:bg-gray-900">
    <SignInWindow />
  </section>
);

export default Home;
