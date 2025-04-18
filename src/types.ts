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

export type LoginData = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  handleUserLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRememberMeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rememberMe: boolean;
  formData: LoginData;
};
