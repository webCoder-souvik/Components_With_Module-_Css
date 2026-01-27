import { AxiosResponse } from "axios";

interface ErrorResponse {
  response: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
  };
}

export type ResponseOrError<T> = AxiosResponse<T> | ErrorResponse;

/* eslint-disable @typescript-eslint/no-explicit-any */
const catchAsync =
  <T>(
    fn: (..._args: any[]) => Promise<AxiosResponse<T>>,
  ): ((..._args: any[]) => Promise<ResponseOrError<T>>) =>
  async (...rest: any[]): Promise<ResponseOrError<T>> => {
    try {
      const result = await fn(...rest);
      return result;
    } catch (error: any) {
      if (error.response) {
        return error.response.data;
      }
      return error;
    }
  };
/* eslint-enable @typescript-eslint/no-explicit-any */

export default catchAsync;
