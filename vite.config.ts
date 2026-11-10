import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), Icons({ compiler: "jsx" })],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "../styles/variables" as *;\n`,
			},
		},
	},
});
