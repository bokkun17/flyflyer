import { IParser } from '../interface/IParser'

export abstract class Parser implements IParser {
  protected htmlText: string
  constructor(htmlText: string) {
    this.htmlText = htmlText
    this.parse()
  }
  abstract parse(): void
}
