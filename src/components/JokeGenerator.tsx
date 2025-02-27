import React, { useState, useEffect } from 'react';
import { RefreshCw, ThumbsUp, Copy, Share } from 'lucide-react';
import { generateJoke } from '../services/jokeService';
import { incrementStats } from '../services/supabase';

const JokeGenerator: React.FC = () => {
  const [joke, setJoke] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const newJoke = await generateJoke();
      setJoke(newJoke);
      incrementStats('jokesGenerated');
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke("Why don't scientists trust atoms? Because they make up everything!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const handleCopyJoke = () => {
    navigator.clipboard.writeText(joke);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareJoke = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Funny Dad Joke from JokeGPT',
        text: joke,
        url: window.location.href,
      });
    } else {
      handleCopyJoke();
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="joke-container p-6 md:p-8 my-8 mx-auto max-w-3xl">
      <div className="min-h-[200px] flex flex-col justify-center">
        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <RefreshCw size={48} className="text-accent rotate animate-spin mb-4" />
            <p className="text-xl">Loading your dad joke...</p>
          </div>
        ) : (
          <div className="fade-in">
            <p className="text-2xl md:text-4xl text-center retro-text mb-8 leading-relaxed">{joke}</p>
            
            <div className="flex justify-center gap-4 mt-6">
              <button 
                onClick={handleLike} 
                className={`p-3 rounded-full ${liked ? 'bg-accent text-white' : 'bg-gray-200'} transition-colors`}
                aria-label="Like joke"
              >
                <ThumbsUp size={24} />
              </button>
              
              <button 
                onClick={handleCopyJoke} 
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Copy joke"
              >
                {copied ? (
                  <span className="text-green-600 font-bold">Copied!</span>
                ) : (
                  <Copy size={24} />
                )}
              </button>
              
              <button 
                onClick={handleShareJoke} 
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Share joke"
              >
                <Share size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-center mt-8">
        <button 
          onClick={fetchJoke} 
          disabled={loading}
          className="btn-primary text-xl px-8 py-4 flex items-center gap-2"
        >
          {loading ? 'Generating...' : 'New Joke'}
          {!loading && <RefreshCw size={20} />}
        </button>
      </div>
    </div>
  );
};

export default JokeGenerator;