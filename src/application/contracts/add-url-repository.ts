import { UrlStatus } from '@/domain/entities'

export interface AddUrlRepository {
  add: (urlModel: UrlModel) => Promise<boolean>
}

export type UrlModel = {
  longUrl: string
  shortenedUrl: string
  alias: string
  status: UrlStatus
}
