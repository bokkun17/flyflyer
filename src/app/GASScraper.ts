import { Scraper } from './base/Scraper'

export class GASScraper extends Scraper {
  constructor(url: string) {
    super(url)
  }
  override invoke(): void {
    this.contents = UrlFetchApp.fetch(this.url).getContentText('UTF-8')
  }
}
