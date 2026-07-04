'use client'

import { useTheme } from '@/hooks/use-theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  return (
    <div data-theme={theme}>
      {children}
    </div>
  )
}
