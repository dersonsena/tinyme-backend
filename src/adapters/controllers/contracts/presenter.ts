export interface Presenter<D = any, O = object> {
  output: (data: D, options?: O) => Promise<ResponseTypes>
}

export type ResponseTypes = Success | Fail | Error

export enum ResponseStatus {
  SUCCESS = 'success',
  FAIL = 'fail',
  ERROR = 'error'
}

export type Success<T = any, M = object> = {
  status: ResponseStatus
  data: T
  meta?: M
}

export type Fail<T = any, M = object> = {
  status: ResponseStatus
  data: T
  meta?: M
}

export type Error<T = any, M = object> = {
  status: ResponseStatus
  message: string
  data?: T
  code?: number
  meta?: M
}
