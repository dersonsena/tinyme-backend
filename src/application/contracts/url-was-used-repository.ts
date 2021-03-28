export interface UrlWasUsedRepository {
  verify: (url: string) => Promise<boolean>
}
