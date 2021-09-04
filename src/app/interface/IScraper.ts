export interface IScraper {
  invoke(): void
  getContents(): string
}
