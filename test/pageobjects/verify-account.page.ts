import { $$, $ } from "@wdio/globals";
import Page from "./page.ts";

class VerifyAccountPage extends Page {
  public get inputFields() {
    return $$(".code-container .code");
  }

  public get successMessage() {
    return $(".success=Success");
  }

  public async open() {
    return super.open("apps/verify-account/");
  }

  public async fillInputFields(code: string) {
    const fields = await this.inputFields;
    expect(fields.length).toBe(6);

    for (let i = 0; i < code.length; i++) {
      await fields[i].setValue(code[i]);
    }
  }
}

export default new VerifyAccountPage();
