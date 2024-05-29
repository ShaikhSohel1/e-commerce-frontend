// src/layouts/MainLayout.js

import { Outlet } from 'react-router-dom';
// import { ModeToggle } from './toogle-mode';
import Navbar from '@/feature/navbar/Componenet/Navbar';

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
