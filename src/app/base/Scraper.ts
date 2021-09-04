import { IScraper } from '../interface/IScraper'

export abstract class Scraper implements IScraper {
  protected url: string
  protected contents!: string
  constructor(url: string) {
    this.url = url
  }
  abstract invoke(): void
  getContents(): string {
    return this.contents
  }
}
