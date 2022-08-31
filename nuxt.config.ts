import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: true,
	css: [
		"assets/scss/app.scss",
		"assets/scss/themes/dark/app-dark.scss",
		"assets/scss/iconly.scss",
	],
	vite: {
		clearScreen: true,
		logLevel: "info",
	}
});
