import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type InnerProps = { children: React.ReactNode };

const MainLayout = ({ children }: InnerProps) => (
  <div className="flex flex-col h-screen">
    <Header />
    <main className="flex-grow overflow-y-auto">
      <ToastContainer />
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
