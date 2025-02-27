export interface User {
  id: string;
  email: string;
}

export interface JokeStats {
  visitors: number;
  jokesGenerated: number;
  activeUsers: number;
}