import { expect } from "@wdio/globals";
import DynamicTablePage from "../pageobjects/dynamic-table.page.ts";

describe("Dynamic Page Tests", () => {
  beforeEach(async () => {
    await DynamicTablePage.open();
    const URL = await browser.getUrl();
    await expect(URL).toBe(`https://qaplayground.dev/apps/dynamic-table/`);
  });

  it("spider-man should have Peter Parker as the name", async () => {
    const row = await DynamicTablePage.spiderManRow;
    await expect(row).toBePresent();
    const name = row.$("td:nth-child(3) .text-sm");
    await expect(name).toHaveText("Peter Parker");
  });
});
