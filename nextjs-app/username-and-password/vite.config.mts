import next from "next/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [next()],
	optimizeDeps: {
		// silence esbuild deps optimization warning
		exclude: ["@node-rs/argon2"],
	},
});
