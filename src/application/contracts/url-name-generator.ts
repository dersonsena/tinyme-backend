export interface UrlNameGenerator {
  urlName: string
  generate: (length?: number) => Promise<string>
}
