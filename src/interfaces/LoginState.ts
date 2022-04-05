import { GenericResponse } from './GenericResponse';

export type UserPlatform = 'ADVOCATE' | 'EMPLOYER';

export type LoginMeta = {
  email: string;
  password: string;
  fromSignup?: boolean;
};

export type LoginPayload = GenericResponse & {
  fromSignup?: boolean;
};
