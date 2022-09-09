import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: [
		"assets/scss/app.scss",
		"assets/scss/themes/dark/app-dark.scss",
		"assets/scss/iconly.scss",
		"toastify-js/src/toastify.css",
		"sweetalert2/dist/sweetalert2.min.css",
		"rater-js/lib/style.css"
	],
	vite: {
		clearScreen: true,
		logLevel: "info",
	}
});
