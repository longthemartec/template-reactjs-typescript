export type AsyncState<Meta = Record<string, any>, Payload = Record<string, any>> = {
  request: Meta | null;
  data: Payload | null;
  pending: boolean | null;
  error: string;
};
