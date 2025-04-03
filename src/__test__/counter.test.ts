import { describe, it, expect, beforeEach } from 'vitest';
import { setupCounter } from '../counter';
/**
 * @vitest-environment jsdom
 */
describe('setupCounter', () => {
  let button: HTMLButtonElement;

  beforeEach(() => {
    // Create a mock button element
    button = document.createElement('button');
  });

  // 1. Initial Setup
  it('should set the initial counter value to 0', () => {
    setupCounter(button);
    expect(button.innerHTML).toBe('count is 0');
  });

  // 2. Click Event
  it('should increment the counter by 1 on button click', () => {
    setupCounter(button);

    // Simulate a click event
    button.click();

    // Verify the counter value
    expect(button.innerHTML).toBe('count is 1');
  });

  it('should increment the counter correctly on multiple clicks', () => {
    setupCounter(button);

    // Simulate multiple click events
    button.click();
    button.click();
    button.click();

    // Verify the counter value
    expect(button.innerHTML).toBe('count is 3');
  });

  // 3. Edge Cases
  it('should update the counter correctly when setCounter is called directly', () => {
    const setCounter = setupCounter(button);

    // Call setCounter directly
    setCounter(5);

    // Verify the counter value
    expect(button.innerHTML).toBe('count is 5');
  });
});