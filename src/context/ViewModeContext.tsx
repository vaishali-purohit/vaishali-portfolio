"use client"

import { createContext, useContext, useState, useMemo } from "react"

export type ViewMode = "overview" | "deepdive"

type ViewModeContextValue = {
  mode: ViewMode
  setMode: (mode: ViewMode) => void
}

const ViewModeContext = createContext<ViewModeContextValue | null>(null)

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ViewMode>("overview")
  const value = useMemo(() => ({ mode, setMode }), [mode])

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  )
}

export function useViewMode() {
  const ctx = useContext(ViewModeContext)
  if (!ctx) {
    throw new Error("useViewMode must be used within a ViewModeProvider")
  }
  return ctx
}
