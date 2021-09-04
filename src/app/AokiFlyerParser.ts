import { NodeHtmlParser } from './NodeHtmlParser'
import { IFlyerParser } from './interface/IFlyerParser'

export class AokiFlyerParser extends NodeHtmlParser implements IFlyerParser {
  getFlyer(): string {
    const root = this.getRootElement()
    const flyer = root.querySelector('[src*="flyer.png"]')
    if (flyer === null) {
      return `チラシはありません`
    }
    const link = flyer.parentNode
    if (link === null) {
      return 'チラシのリンクが見つかりませんでした'
    }
    const pdfPath = link.getAttribute('href')
    if (typeof pdfPath === 'undefined') {
      return 'チラシのリンクが見つかりませんでした'
    }
    return `チラシが見つかりました\n${pdfPath}`
  }
}
