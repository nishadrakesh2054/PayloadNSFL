/// <reference types="vite/client" />

declare global {
    interface ImportMetaEnv {
      readonly VITE_API_BASE_URL: string;
      // Add other environment variables here
    }
  
    interface ImportMeta {
      readonly env: ImportMetaEnv;
    }
  }
  
  export {};
  