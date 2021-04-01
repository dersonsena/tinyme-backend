import { UrlStatus } from '@/domain/entities'

export interface AddUrlRepository {
  addUrl: (urlModel: UrlModel) => Promise<UrlModel>
}

export type UrlModel = {
  id?: string | number
  longUrl: string
  shortenedUrl: string
  alias: string
  status: UrlStatus
}
