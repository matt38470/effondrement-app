import type { EntitlementKey } from "./access";

export type UserEntitlements = {
  active: EntitlementKey[];
};

export type AppUser = {
  id: string;
  email: string;
  entitlements: UserEntitlements;
};