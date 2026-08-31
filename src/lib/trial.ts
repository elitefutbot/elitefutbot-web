// Must match TRIAL_DAYS on fifa-snipe-bot-backend (controllers/authController.js).
// Backend defaults to 7 days (or user.trialDays if set).
export const TRIAL_LENGTH_DAYS = 7;

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
