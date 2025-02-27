import React from 'react';
import { Laugh, Code, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold retro-text mb-4">About JokeGPT</h1>
          <p className="text-xl">The story behind the world's funniest dad joke generator</p>
        </div>
        
        <div className="joke-container p-6 md:p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Laugh size={48} className="text-accent" />
            <h2 className="text-3xl font-bold">Our Mission</h2>
          </div>
          
          <p className="text-lg mb-4">
            JokeGPT was created with one simple mission: to spread laughter through the timeless art of dad jokes.
            We believe that a good (or bad) dad joke has the power to brighten someone's day, break the ice,
            or simply make you groan in that special way that only dad jokes can.
          </p>
          
          <p className="text-lg">
            Our AI-powered joke generator creates original, family-friendly dad jokes that are perfect for
            any occasion. Whether you're a dad looking to embarrass your kids, or just someone who appreciates
            the simple joy of a cheesy pun, JokeGPT has got you covered.
          </p>
        </div>
        
        <div className="joke-container p-6 md:p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Code size={48} className="text-accent" />
            <h2 className="text-3xl font-bold">How It Works</h2>
          </div>
          
          <p className="text-lg mb-4">
            JokeGPT uses the powerful AI API  to generate original dad jokes.
            Each joke is crafted to be:
          </p>
          
          <ul className="list-disc list-inside text-lg mb-4 ml-4">
            <li className="mb-2">Family-friendly and appropriate for all ages</li>
            <li className="mb-2">Original and not repetitive</li>
            <li className="mb-2">True to the spirit of classic dad jokes</li>
            <li>Just the right amount of cheesy</li>
          </ul>
          
          <p className="text-lg">
            Our website also tracks fun statistics like how many visitors we've had, how many jokes have been
            generated, and how many people are currently enjoying dad jokes on the site.
          </p>
        </div>
        
        <div className="joke-container p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <Heart size={48} className="text-accent" />
            <h2 className="text-3xl font-bold">Support JokeGPT</h2>
          </div>
          
          <p className="text-lg mb-4">
            If you enjoy JokeGPT, there are several ways you can support us:
          </p>
          
          <ul className="list-disc list-inside text-lg mb-4 ml-4">
            <li className="mb-2">Share your favorite jokes with friends and family</li>
            <li className="mb-2">Follow us on social media</li>
            <li className="mb-2">Create an account to save your favorite jokes</li>
            <li>Send us feedback on how we can improve</li>
          </ul>
          
          <p className="text-lg">
            Thank you for visiting JokeGPT. We hope our jokes bring a smile to your face!
          </p>
        </div>

        <div className="joke-container p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <Code size={48} className="text-accent" />
            <h2 className="text-3xl font-bold">Authors</h2>
          </div>
          
          <ul className="text-lg mb-4 space-y-2">
            <li>Jalaja</li>
            <li>Ashritha Arunkumar</li>
            <li>Dhivya</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;