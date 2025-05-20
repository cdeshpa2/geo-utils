import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'], // entry point
    format: ['esm'], // only ESM
    dts: true, // generate .d.ts
    clean: true,
    outDir: 'dist',
    splitting: false, // everything in one file
    minify: false,
    target: 'es2020',
    bundle: true, // BUNDLE EVERYTHING
});
