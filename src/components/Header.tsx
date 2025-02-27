import React from 'react';
import { Link } from 'react-router-dom';
import { Laugh } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  user: User | null;
  onSignOut: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onSignOut }) => {
  return (
    <header className="bg-primary border-b-4 border-textColor py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Laugh size={36} className="text-accent" />
          <h1 className="text-3xl md:text-4xl font-bold retro-text">JokeGPT</h1>
        </Link>
        
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            </li>
            {user ? (
              <li>
                <button 
                  onClick={onSignOut}
                  className="btn-primary text-sm"
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <li>
                <Link to="/auth" className="btn-primary text-sm">Sign In</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;