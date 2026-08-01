let introFinished = false
let resolveIntro: (() => void) | null = null
const introReadyPromise = new Promise<void>((resolve) => {
  resolveIntro = resolve
})

export function willPlayIntro(): boolean {
  if (typeof window === "undefined") return false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
  try {
    return sessionStorage.getItem("smv_intro_seen") !== "1"
  } catch {
    return true
  }
}

export function finishIntro(): void {
  if (introFinished) return
  introFinished = true
  resolveIntro?.()
}

export function introReady(): Promise<void> {
  return introReadyPromise
}
