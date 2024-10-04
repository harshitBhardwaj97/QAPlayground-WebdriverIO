import { $ } from "@wdio/globals";
import Page from "./page.ts";

class DynamicTablePage extends Page {
  public get spiderManRow() {
    return $('//tbody//tr[td//div[.="Spider-Man"]]');
  }

  public async open() {
    return super.open("apps/dynamic-table/");
  }
}

export default new DynamicTablePage();
