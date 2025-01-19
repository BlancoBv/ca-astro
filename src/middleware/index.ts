import { sequence } from "astro:middleware";
import { apiAuth } from "./apiAuth";
import { panelAuth } from "./panelAuth";
import { rateLimiter } from "./rateLimiter";
import { noCache } from "./noCache";

export const onRequest = sequence(rateLimiter, noCache, panelAuth, apiAuth);
