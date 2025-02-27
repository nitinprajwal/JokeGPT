import React, { useState, useEffect } from 'react';
import { Users, Laugh, Eye } from 'lucide-react';
import { getStats } from '../services/supabase';
import { JokeStats } from '../types';

const StatsCounter: React.FC = () => {
  const [stats, setStats] = useState<JokeStats>({
    visitors: 0,
    jokesGenerated: 0,
    activeUsers: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getStats();
      if (data) {
        setStats(data);
      }
    };

    fetchStats();
    
    // Poll for updates every 10 seconds
    const interval = setInterval(fetchStats, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 my-6">
      <div className="stats-box flex items-center gap-2 min-w-[150px]">
        <Eye size={24} className="text-accent" />
        <div>
          <p className="text-sm font-bold">Visitors</p>
          <p className="text-xl font-bold">{stats.visitors.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="stats-box flex items-center gap-2 min-w-[150px]">
        <Laugh size={24} className="text-accent" />
        <div>
          <p className="text-sm font-bold">Jokes Generated</p>
          <p className="text-xl font-bold">{stats.jokesGenerated.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="stats-box flex items-center gap-2 min-w-[150px]">
        <Users size={24} className="text-accent" />
        <div>
          <p className="text-sm font-bold">Active Users</p>
          <p className="text-xl font-bold">{stats.activeUsers.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;