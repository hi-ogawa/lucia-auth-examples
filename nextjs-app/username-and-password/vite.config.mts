import next from "next/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		next({
			plugins: [
				{
					name: "config",
					config() {
						return {
							ssr: {
								// externalize cjs or native deps
								external: [
									"@node-rs/argon2",
									"better-sqlite3",
								],
							},
						};
					},
				},
			],
		}),
	],
	optimizeDeps: {
		// silence esbuild deps optimization warning
		exclude: ["@node-rs/argon2"],
	},
});
