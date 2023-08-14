import { test, expect } from '@playwright/test';
import bubble_sort from "../src/bubble-sort";

test("bubble-sort", function ()
{
  const arr = [9, 3, 7, 4, 69, 420, 42, 123, 54, 45];

  // debugger;
  bubble_sort(arr);
  expect(arr).toEqual([3, 4, 7, 9, 42, 45, 54, 69, 123, 420]);
});
