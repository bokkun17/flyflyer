import { Parser } from './base/Parser'
import {
  parse,
  default as HTMLElement
} from 'node-html-parser/dist/nodes/html.js'

export class NodeHtmlParser extends Parser {
  protected rootElement!: HTMLElement
  override parse(): void {
    this.rootElement = parse(this.htmlText)
  }
  protected getRootElement(): HTMLElement {
    return this.rootElement
  }
}
