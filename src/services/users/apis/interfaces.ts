namespace UserService {
  export interface LoginParams {
    username: string;
    password: string;
  }

  export interface LoginResult {
    accessToken: string;
    refreshToken: string;
  }

  export enum Role {
    Admin = 'admin',
    BasicUser = 'basic-user',
    PremiumUser = 'premium-user',
  }

  export interface User {
    id: number;
    name: string;
    username: string;
    bio: string;
    avatar: string;
    role: Role;
  }
}

export default UserService;
