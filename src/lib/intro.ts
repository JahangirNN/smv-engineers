export const INTRO_CURTAIN_MS = 3450

export function willPlayIntro(): boolean {
  if (typeof window === "undefined") return false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
  try {
    return sessionStorage.getItem("smv_intro_seen") !== "1"
  } catch {
    return true
  }
}
