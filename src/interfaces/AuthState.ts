import { UserPlatform } from './LoginState';

export type AuthState = {
  token: string | null;
  platform?: UserPlatform;
  refresh_token?: string | null;
  email?: string | null;
};
