// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { resolve } from "path";
import styleResources from "./helpers/style-resources";
import cssDoodleLoader from "./plugins/vite/css-doodle";
import docsLoader from "./plugins/vite/docs";
/* import CopyPlugin from "copy-webpack-plugin";
const wasmFile = resolve("node_modules/mediainfo.js/dist/MediaInfoModule.wasm"); */
type OriginalNuxtConfig = Parameters<typeof defineNuxtConfig>[0];
type BroadNuxtConfig = OriginalNuxtConfig & Record<Exclude<string, keyof OriginalNuxtConfig>, object | string>; // 还敢报错吗？
// TODO: 水合异常，这是 nuxt 那边的问题，详情请关注：https://github.com/nuxt/nuxt/issues/18635
const res = (...path: string[]) => resolve(__dirname, ...path);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // 支持 HTTPS。

export default defineNuxtConfig({
	plugins: [
		"plugins/vue/ripple.ts",
		"plugins/vue/css-var-i.ts",
		"plugins/nuxt/innerheight.ts",
	],
	modules: [
		"@nuxtjs/i18n",
		"@nuxt/content",
		"nuxt-icons",
		"@vueuse/nuxt",
		"modules/theme/module.ts",
		"modules/noscript/module.ts",
		"@nuxtjs/robots",
		"nuxt-simple-sitemap",
		// "@nuxtjs/color-mode", // 这个已经重写了，不用开启。
	],
	alias: {
		styles: res("assets/styles"),
		components: res("components"),
		composables: res("composables"),
		layouts: res("layouts"),
		pages: res("pages"),
		plugins: res("plugins"),
		static: res("public/static"),
		lotties: res("assets/lotties"),
		modules: res("modules"),
		content: res("content"),
		middleware: res("middleware"),
		server: res("server"),
		helpers: res("helpers"),
	},
	css: [
		"styles/global.scss",
	],
	vite: {
		plugins: [
			docsLoader(),
			cssDoodleLoader(),
		],
		optimizeDeps: {
			needsInterop: [
				"mediainfo.js",
			],
		},
		css: {
			preprocessorOptions: styleResources({
				scss: {
					use: [
						"sass:color",
						"sass:list",
						"sass:map",
						"sass:math",
						"sass:meta",
						"sass:selector",
						"sass:string",
					],
					import: [
						"styles/theme",
					],
				},
			}),
			modules: {
				localsConvention: "camelCaseOnly",
			},
		},
	},
	/* build: {
		plugins: [
			new CopyPlugin({
				patterns: [{
					from: wasmFile,
					to: ".",
				}, {
					from: "CNAME",
					to: ".",
				}],
			}),
		],
	}, */
	vue: {
		compilerOptions: {
			isCustomElement(tag) {
				return (
					tag === "marquee" ||
					tag.includes("-")
				);
			},
		},
	},
	i18n: {
		locales: [
			{ code: "zh", name: "简体中文" },
			{ code: "en", name: "English" },
			{ code: "ja", name: "日本語" },
		],
		defaultLocale: "zh",
		vueI18n: {
			legacy: false,
			locale: "zh",
		},
	},
	content: {
		markdown: {
			remarkPlugins: {
				"remark-emoji": {
					emoticon: true,
				},
			},
		},
		highlight: {
			theme: {
				default: "github-light",
				dark: "github-dark",
				sepia: "monokai",
			},
		},
	},
	runtimeConfig: {
		public: {
			siteUrl: "https://localhost:3000",
		},
	},
} as BroadNuxtConfig);
