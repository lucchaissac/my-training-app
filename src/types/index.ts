export interface User {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
}

export interface Training {
  id: number;
  date: string;
  time: string;
  duration: string;
  userId: number;
}
