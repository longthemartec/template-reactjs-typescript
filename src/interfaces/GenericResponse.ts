export interface GenericResponse<Data = Record<string, any>> {
  status: number;
  message: string;
  data: Data;
}

export interface APIGoogleFontsResponse<Data = Record<string, any>> {
  items: Record<string, any>[],
  kind: string;
}
