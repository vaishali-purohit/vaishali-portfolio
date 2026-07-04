'use client'

import { useTheme } from '@/hooks/use-theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, toggle } = useTheme()

  return (
    <div data-theme={theme}>
      {children}
      <button
        onClick={toggle}
        aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-lg transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  )
}
