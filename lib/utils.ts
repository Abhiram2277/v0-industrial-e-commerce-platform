import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Calculate years since company establishment (2020)
export function getCompanyYearsActive(): number {
  const establishedYear = 2020
  const currentYear = new Date().getFullYear()
  return currentYear - establishedYear
}

// Format years for display
export function formatYearsActive(): string {
  const years = getCompanyYearsActive()
  return `${years}+`
}
