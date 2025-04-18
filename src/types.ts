export type User = {
  fullName: string;
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

export type SignupData = User & {
  fullName: string;
  confirmPassword: string;
};

export type LoginFormProps = {
  handleUserLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRememberMeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rememberMe: boolean;
  formData: LoginData;
};

export type SignupFormProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  signupUser: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: SignupData;
};

export type BlogPost = {
  id: number;
  title: string;
  description?: string;
  url: string;
  coverImage: string;
  createdAt: string;
  createdBy: string;
  readingTime: number;
};
