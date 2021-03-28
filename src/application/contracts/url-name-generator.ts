export interface UrlNameGenerator {
  urlName: string
  generate: () => Promise<string>
}
