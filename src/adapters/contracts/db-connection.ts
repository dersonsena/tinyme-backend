export interface DbConnection<T = object> {
  connect: () => Promise<boolean>
  disconnect: () => Promise<boolean>
  fetchAll: (tableName: string, options?: FetchOptions) => Promise<T[]>
  fetchOne: (tableName: string, options?: FetchOptions) => Promise<T>
  insert: (tableName: string, values: object) => Promise<number>
  update: (tableName: string, values: object, conditions?: object) => Promise<T>
  delete: (tableName: string, conditions?: object) => Promise<boolean>
}

export type FetchOptions = {
  conditions?: QueryCondition[]
  order?: Order[]
}

export type QueryCondition = {
  column: string
  value: any
  operator: string
}

export type Order = {
  column: string
  direction: OrderDirection
}

export enum OrderDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}
