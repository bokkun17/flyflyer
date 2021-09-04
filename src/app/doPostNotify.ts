import { IScraper } from './interface/IScraper'
import { GASScraper } from './GASScraper'
import { postMessageNotify } from './postMessageNotify'
import { AokiFlyerParser } from './AokiFlyerParser'
import { IFlyerParser } from './interface/IFlyerParser'

export function doPostNotify(): void {
  try {
    const scraper: IScraper = new GASScraper(process.env.STORE_URL)
    scraper.invoke()
    const parser: IFlyerParser = new AokiFlyerParser(scraper.getContents())
    postMessageNotify(parser.getFlyer())
  } catch (e) {
    console.error(e)
  }
}
