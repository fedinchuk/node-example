import { test, expect } from "@playwright/test";

test("перевірка перенаправлення", async ({ page }) => {
  await page.goto("https://wikipedia.org");

  const popupPromise = page.waitForEvent("popup");
  await page
    .getByRole("link", { name: "You can support our work with a donation." })
    .click();
  const popup = await popupPromise;

  await popup.waitForLoadState();

  await expect(popup).toHaveURL(/donate.wikimedia.org/);
});
