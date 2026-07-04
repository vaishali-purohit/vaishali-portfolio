'use client'

import { useTheme } from '@/hooks/use-theme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
    </button>
  )
}
