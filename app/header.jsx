import React from 'react';
import Link from 'next/link';
import { LogoutBtn } from "../components/Client";

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: '10px',
  };

  const logoStyle = {
    margin: '0',
    fontSize: '24px',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '10px',
  };

  return (
    <nav style={headerStyle}>
      <div className="logo" style={logoStyle}>
        <h2>Todo</h2>
      </div>
      <ul className="nav-links" style={navLinksStyle}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <LogoutBtn />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
