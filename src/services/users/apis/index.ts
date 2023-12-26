import UserServiceInterface from './interfaces';

const delay = <T>(ms: number, mock: T): Promise<T> =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(mock);
    }, ms),
  );

class UserService {
  static async login({
    username,
    password,
  }: UserServiceInterface.LoginParams): Promise<UserServiceInterface.LoginResult> {
    await delay(700, null);
    if (username === 'admin@example.com' && password === 'Admin@12345678') {
      return await delay<UserServiceInterface.LoginResult>(300, {
        refreshToken: 'refresh-token',
        accessToken: 'access-token',
      });
    } else {
      throw new Error('Invalid username or password');
    }
  }

  static async getUser(): Promise<UserServiceInterface.User> {
    const user = {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      bio: 'Lorem ipsum dolor sit amet',
      avatar: 'https://avatars.githubusercontent.com/u/26466564?v=4',
      role: UserServiceInterface.Role.Admin,
    };
    const resp = await delay<UserServiceInterface.User>(500, user);
    return resp;
  }
}

export default UserService;
