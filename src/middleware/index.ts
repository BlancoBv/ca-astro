import { sequence } from "astro:middleware";
import { apiAuth } from "./apiAuth";
import { panelAuth } from "./panelAuth";
import { rateLimiter } from "./rateLimiter";

export const onRequest = sequence(rateLimiter, panelAuth, apiAuth);
