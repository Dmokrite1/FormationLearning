import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ['**/*.test.js'],
        global: true,
        environment: 'jsdom'
    }
})