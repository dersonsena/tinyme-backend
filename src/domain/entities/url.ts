export type Url = {
  id: string | number
  originalAddress: string
  tinyAddress: string
  alias: string
  status: UrlStatus
}

export enum UrlStatus {
  INACTIVE,
  ACTIVE
}
