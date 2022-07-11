import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => (
  <div className="d-flex">
    <Sidebar />
    <main className="flex-grow-1">
      <Outlet />
    </main>
  </div>
);

export default Layout;
