/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Sheets Apps Script Web App deployment URL */
  readonly VITE_GOOGLE_SHEETS_WEBHOOK_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
