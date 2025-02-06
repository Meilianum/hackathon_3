export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
"skePlCDKTMKWtvi5hISTyX8HP21EtDjr1MPYpOLczGy9eBF5zUz406AKv4D21ilDU1Y6veO8pRUKAngBAqCkB0Gn8smDXUxWTQkZcHIn6DkTR4ImScJHsFd5qCmHzfqiJmZAvZDYDMgG525A8xBZmMAXmRGTFubABzpTaMbN4Z4RM2kgsdyk",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
