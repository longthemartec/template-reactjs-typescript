export interface Action<Payload = Record<string, any>> {
  type: string;
  payload: Payload;
}

export interface AsyncAction<Request = Record<string, any>, Payload = Record<string, any>> {
  type: string;
  meta: Request;
  payload: Payload;
  error: string;
}
