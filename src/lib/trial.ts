// Must match TRIAL_DAYS on fifa-snipe-bot-backend (controllers/authController.js).
// The backend only returns a computed `isTrialActive` boolean, not the trial
// length itself, so this is duplicated here rather than derived from the API.
export const TRIAL_LENGTH_DAYS = 14;

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
