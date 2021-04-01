export interface UrlWasUsedRepository {
  urlWasUsed: (url: string) => Promise<boolean>
}
