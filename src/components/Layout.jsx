/* eslint-disable */
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const currentPathname = new URL(window.location.href).pathname;
  const linksSchema = {
    home: '/',
    contact: '#',
    about: '#',
  }
  const getLinkClassName = (hrefPathName) => currentPathname !== hrefPathName
    ? "header-menu-item" : "header-menu-item active";

  return (
    <>
      <header>

        <div className="header-content perc-w-100 pad-x-2rem pad-y-0-5rem">

          <div className="header-content-left">

            <div className="header-content-left-logo">
              <svg
                fill="rgb(102, 131, 126)"
                width="32px"
                height="32px"
                viewBox="796 796 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M896,796c-55.14,0-99.999,44.86-99.999,100c0,55.141,44.859,100,99.999,100c55.141,0,99.999-44.859,99.999-100 C995.999,840.86,951.141,796,896,796z M896.639,827.425c20.538,0,37.189,19.66,37.189,43.921c0,24.257-16.651,43.924-37.189,43.924 s-37.187-19.667-37.187-43.924C859.452,847.085,876.101,827.425,896.639,827.425z M896,983.86 c-24.692,0-47.038-10.239-63.016-26.695c-2.266-2.335-2.984-5.775-1.84-8.82c5.47-14.556,15.718-26.762,28.817-34.761 c2.828-1.728,6.449-1.393,8.91,0.828c7.706,6.958,17.316,11.114,27.767,11.114c10.249,0,19.69-4.001,27.318-10.719 c2.488-2.191,6.128-2.479,8.932-0.711c12.697,8.004,22.618,20.005,27.967,34.253c1.144,3.047,0.425,6.482-1.842,8.817 C943.037,973.621,920.691,983.86,896,983.86z"></path>
              </svg>
            </div>

            <ul className="header-content-left-menu header-menu mar-s-2rem mar-y-0 mar-e-0 pad-x-0">
              <a href={linksSchema.home} className={getLinkClassName(linksSchema.home)}>Home</a>
              <a href={linksSchema.contact} className={getLinkClassName(linksSchema.contact)}>Contact</a>
              <a href={linksSchema.about} className={getLinkClassName(linksSchema.about)}>About</a>
            </ul>

          </div>

          <div className="header-content-right">

            <button className="header-content-right-button btn-login">
              Login
            </button>

            <button className=" header-content-right-button btn-menu">
              <svg
                fill="#66837e"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#66837e"
                width="34"
                height="34"
              >
                <path
                  d="M128,28A100,100,0,1,0,228,128,100.11332,100.11332,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.10416,92.10416,0,0,1,128,220Zm8-92a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,136,128Zm0,48a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,136,176Zm0-96a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,136,80Z"
                />
              </svg>
            </button>

          </div>

        </div>

      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer-content pad-x-2rem pad-t-0-5rem">
        <p>© Copyright 2024</p>
      </footer>
    </>
  );
};

export default Layout;
