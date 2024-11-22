import { RateLimiterMemory } from "rate-limiter-flexible";

export const rateLimiter = new RateLimiterMemory({
  points: 500,
  duration: 1,
  blockDuration: 30,
});
