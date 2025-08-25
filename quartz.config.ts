import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "WikiQuedia",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: {
          name: "Neuton",
          weights: [400, 800]
        },
        body: {
          name: "Atkinson Hyperlegible", // "Space Grotesk"
          weights: [400, 700],
        },
        code: {
          name: "JetBrains Mono",
          weights: [100, 250]
        }
      },
      colors: {
        lightMode: {
          light: "#eeede5ff",                                         // page background
          lightgray: "#c9cec1ff",                                     // borders
          gray: "#9bab85",                                            // graph links heavier borders
          darkgray: "#475339", // 3e4733                              // body text
          dark: "#292f22",                                            // header text and icons
          secondary: "#81916e", // 3e4733// 475339                    // link coulour, current graph  node
          tertiary: "#853f44ff",                                      // hover states and visited graph nodes
          highlight: "rgba(191, 201, 176, 0)", // was ooit 0.25 gamma // internal link background, highlighted text, highlighted lines of code
          textHighlight: "#fff23688",                                 // markdown highlighted text background
        },
        darkMode: {
          light: "#161618",                                           // page background
          lightgray: "#393639",                                       // borders
          gray: "#646464",                                            // graph links heavier borders
          darkgray: "#d4d4d4",                                        // body text
          dark: "#ebebec",                                            // header text and icons
          secondary: "#9bab85",                                       // link coulour, current graph  node
          tertiary: "#743c41ff",                                      // hover states and visited graph nodes
          highlight: "rgba(143, 159, 169, 0)", // was ooit 0.15 gamma // internal link background, highlighted text, highlighted lines of code
          textHighlight: "#b3aa0288",                                 // markdown highlighted text background
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["git", "frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
