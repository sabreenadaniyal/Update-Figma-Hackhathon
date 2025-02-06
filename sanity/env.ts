export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "sk3SevsqJPqM7eoB7lKAk84Ytm2WzD0otWG5L4qXF2grsqBRYvwaLyRqp8DxZiC4Der9SUO2OrwTevTBH8fXHEdghqtgRukpA5TrQVHtmIZNvo5KGJwkQqLOKIW2kZB3caR91BkWPQuffRtiTY5gaqgBg079Ji0UT8k6One0RoZ6AOQT3qxo",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
