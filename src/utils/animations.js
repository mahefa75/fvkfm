// src/utils/animations.js
/**
 * Animation utility functions for the church website
 * These functions use the Web Animation API to create smooth transitions
 */

/**
 * Fade in an element
 * @param {HTMLElement} element - The DOM element to animate
 * @param {number} delay - Animation delay in milliseconds
 * @param {number} duration - Animation duration in milliseconds
 */
export const fadeIn = (element, delay = 0, duration = 500) => {
  if (!element) return;
  
  element.animate(
    [
      { opacity: 0 },
      { opacity: 1 }
    ],
    {
      duration,
      delay,
      fill: 'forwards',
      easing: 'ease-in-out'
    }
  );
};

/**
 * Fade out an element
 * @param {HTMLElement} element - The DOM element to animate
 * @param {number} delay - Animation delay in milliseconds
 * @param {number} duration - Animation duration in milliseconds
 */
export const fadeOut = (element, delay = 0, duration = 500) => {
  if (!element) return;
  
  element.animate(
    [
      { opacity: 1 },
      { opacity: 0 }
    ],
    {
      duration,
      delay,
      fill: 'forwards',
      easing: 'ease-in-out'
    }
  );
};

/**
 * Slide in an element from a specified direction
 * @param {HTMLElement} element - The DOM element to animate
 * @param {number} delay - Animation delay in milliseconds
 * @param {string} direction - Direction to slide from ('left', 'right', 'top', 'bottom')
 * @param {number} distance - Distance to slide in pixels
 * @param {number} duration - Animation duration in milliseconds
 */
export const slideIn = (element, delay = 0, direction = 'left', distance = 50, duration = 800) => {
  if (!element) return;
  
  let initialTransform;
  
  switch (direction) {
    case 'left':
      initialTransform = `translateX(-${distance}px)`;
      break;
    case 'right':
      initialTransform = `translateX(${distance}px)`;
      break;
    case 'top':
      initialTransform = `translateY(-${distance}px)`;
      break;
    case 'bottom':
      initialTransform = `translateY(${distance}px)`;
      break;
    default:
      initialTransform = `translateX(-${distance}px)`;
  }
  
  element.animate(
    [
      { opacity: 0, transform: initialTransform },
      { opacity: 1, transform: 'translate(0)' }
    ],
    {
      duration,
      delay,
      fill: 'forwards',
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
  );
};

/**
 * Scale in an element (grow from smaller to actual size)
 * @param {HTMLElement} element - The DOM element to animate
 * @param {number} delay - Animation delay in milliseconds
 * @param {number} duration - Animation duration in milliseconds
 */
export const scaleIn = (element, delay = 0, duration = 500) => {
  if (!element) return;
  
  element.animate(
    [
      { opacity: 0, transform: 'scale(0.8)' },
      { opacity: 1, transform: 'scale(1)' }
    ],
    {
      duration,
      delay,
      fill: 'forwards',
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
  );
};

/**
 * Animate an element to draw attention to it
 * @param {HTMLElement} element - The DOM element to animate
 * @param {number} delay - Animation delay in milliseconds
 */
export const pulse = (element, delay = 0) => {
  if (!element) return;
  
  element.animate(
    [
      { transform: 'scale(1)' },
      { transform: 'scale(1.05)' },
      { transform: 'scale(1)' }
    ],
    {
      duration: 600,
      delay,
      iterations: 1,
      easing: 'ease-in-out'
    }
  );
};