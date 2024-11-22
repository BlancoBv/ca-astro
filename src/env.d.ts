/// <reference path="../.astro/types.d.ts" />
declare namespace NodeJS {
  interface ProcessEnv {
    PORT_DB: number;
    HOST_DB: string;
    DATABASE: string;
    PASSWORD_DB: string;
    USER_DB: string;
    RUTA_IMG: string;
  }
}

declare namespace App {
  interface Locals {
    session: import("lucia").Session | null | undefined;
    user: import("lucia").User | null | undefined;
  }
}
