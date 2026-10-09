// Must match TRIAL_DAYS on elitefutbot-backend (controllers/authController.js).
// New signups get 2 days; the backend reports each user's own trialDays.
export const TRIAL_LENGTH_DAYS = 2;
// Trials started before the switch to 2 days keep their stored 7 — never
// show more than this.
export const MAX_TRIAL_DAYS = 7;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function computeTrialDaysLeft(
  createdAt: string,
  trialLengthDays: number = TRIAL_LENGTH_DAYS,
): number {
  const trialStart = new Date(createdAt).getTime();
  const trialEnd = trialStart + trialLengthDays * MS_PER_DAY;
  const msLeft = trialEnd - Date.now();
  return Math.max(0, Math.ceil(msLeft / MS_PER_DAY));
}
