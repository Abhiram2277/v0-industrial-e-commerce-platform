/**
 * Generate a simple UUID for client-side use
 * Compatible with SSR environments
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`
}
