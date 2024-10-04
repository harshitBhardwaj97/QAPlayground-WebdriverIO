import { browser } from "@wdio/globals";

export default class Page {
  public async open(path: string) {
    await browser.maximizeWindow();
    await browser.url(`https://qaplayground.dev/${path}`);
  }
}
