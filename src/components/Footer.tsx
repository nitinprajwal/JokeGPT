import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t-4 border-textColor py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">JokeGPT &copy; {new Date().getFullYear()}</p>
            <p className="text-sm">The funniest dad jokes on the web!</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Heart size={24} />
              <span>Support</span>
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm">Made with <Heart size={16} className="inline text-accent" /> and lots of dad energy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;