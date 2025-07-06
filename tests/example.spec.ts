import { test, expect } from '@playwright/test';

test('Halaman utama memuat dan elemen penting muncul', async ({ page }) => {
  await page.goto('https://your-project.vercel.app'); // ganti URL dengan domain kamu

  await expect(page.locator('text=Nabila Game & Music Hub')).toBeVisible();
  await expect(page.locator('iframe')).toHaveCountGreaterThan(0); // iframe lagu/game
  await expect(page.locator('text=Kirim Bukti')).toBeVisible(); // tombol Topup
  await expect(page.locator('text=Voting Request Update')).toBeVisible(); // tombol Voting
});
