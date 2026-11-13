import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            },
            {
              name: 'mui-icons',
              test: /node_modules[\\/]@mui[\\/]icons-material[\\/]/,
            },
            {
              name: 'mui-pickers',
              test: /node_modules[\\/](@mui[\\/]x-date-pickers|dayjs)[\\/]/,
            },
            {
              name: 'mui-core',
              test: /node_modules[\\/](@mui[\\/]material|@mui[\\/]system|@mui[\\/]utils|@mui[\\/]lab|@emotion)[\\/]/,
            },
          ],
        },
      },
    },
  },
})
