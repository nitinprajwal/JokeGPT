import React, { useEffect } from 'react';
import { Laugh } from 'lucide-react';
import JokeGenerator from '../components/JokeGenerator';
import StatsCounter from '../components/StatsCounter';
import { incrementStats, updateActiveUsers } from '../services/supabase';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Increment visitor count when the page loads
    incrementStats('visitors');
    
    // Update active users count
    updateActiveUsers(true);
    
    // Decrease active users count when the user leaves
    return () => {
      updateActiveUsers(false);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Laugh size={64} className="text-accent bounce" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold retro-text mb-4">JokeGPT</h1>
        <p className="text-xl md:text-2xl">The ultimate dad joke generator!</p>
      </div>
      
      <StatsCounter />
      
      <JokeGenerator />
      
      <div className="max-w-2xl mx-auto mt-12 p-6 bg-primary rounded-lg border-2 border-textColor">
        <h2 className="text-2xl font-bold mb-4">Why Dad Jokes?</h2>
        <p className="mb-4">
          Dad jokes are the perfect blend of groan-worthy puns and wholesome humor. 
          They're called "dad jokes" because they're the kind of jokes that make you roll your eyes 
          but secretly love at the same time.
        </p>
        <p>
          Our AI-powered joke generator creates original dad jokes that are perfect for 
          any occasion. Share them with friends, family, or use them to embarrass your kids!
        </p>
      </div>
    </div>
  );
};

export default HomePage;