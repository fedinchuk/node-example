import { test } from "@playwright/test";

test("Пошук `Playwright testing` і фотозвіт", async ({ page }) => {
  await page.goto("https://google.com");
  await page.getByRole("button", { name: "Zaakceptuj wszystko" }).click();
  await page.getByRole("combobox").fill("Playwright testing");
  await page.getByRole("combobox").press("Enter");
  await page.screenshot({ path: "screenshot.png", fullPage: true });
});
