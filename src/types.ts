export type User = {
  name: string;
  email: string;
  password: string;
};

export type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};
