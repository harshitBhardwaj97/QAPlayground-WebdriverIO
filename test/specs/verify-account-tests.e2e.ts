import { expect } from "@wdio/globals";
import { getRandomCode } from "../../utils/utils.ts";
import VerifyAccountPage from "../pageobjects/verify-account.page.ts";

describe("Verify Account Tests", () => {
  beforeEach(async () => {
    await VerifyAccountPage.open();
    const URL = await browser.getUrl();
    await expect(URL).toBe(`https://qaplayground.dev/apps/verify-account/`);
  });

  it("should display success message with 999999", async () => {
    await VerifyAccountPage.fillInputFields("999999");
    await expect(VerifyAccountPage.successMessage).toBeDisplayed();
  });

  it("should display success message without 999999", async () => {
    const randomCode = getRandomCode();
    await VerifyAccountPage.fillInputFields(randomCode);
    await expect(VerifyAccountPage.successMessage).not.toBeDisplayed();
  });
});
