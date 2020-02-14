export interface Response<T> {
  succeess: boolean;
  resultData: T[];
  errorMessage: string;
}
