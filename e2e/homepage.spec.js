import { test, expect } from "@playwright/test";

test("React Demo page test", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/dist");

  const counterButton = page.locator("text=Counter");
  await expect(counterButton).toBeVisible();
  await counterButton.click();

  const jokeButton = page.locator("text=Counter");
  await expect(jokeButton).toBeVisible();
  await jokeButton.click();

  const postsButton = page.locator("text=Counter");
  await expect(postsButton).toBeVisible();
  await postsButton.click();
});
