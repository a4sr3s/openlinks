// ============================================================
// OpenLinks — Your Linktree-style landing page config
// Edit this file to customize everything about your page.
// ============================================================

export interface Link {
  title: string;
  url: string;
  icon?: string; // SVG string or emoji
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteConfig {
  // Profile
  name: string;
  tagline: string;
  avatar: string; // URL or local path in /public
  // Theming
  theme: "midnight" | "aurora" | "sunset" | "minimal" | "ocean";
  defaultMode?: "light" | "dark" | "system"; // defaults to "system"
  // Links
  links: Link[];
  socials: SocialLink[];
  // SEO
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  ogImage?: string;
  // Footer
  footerText?: string;
  footerLink?: string;
}

// ============================================================
// EDIT BELOW — Make it yours!
// ============================================================

export const config: SiteConfig = {
  // --- Profile ---
  name: "Your Name Here",
  tagline: "Your tagline goes here",
  avatar: "/avatar.svg",

  // --- Theme ---
  // Options: "midnight" | "aurora" | "sunset" | "minimal" | "ocean" | "custom"
  theme: "midnight",

  // --- Links ---
  links: [
    {
      title: "My Website",
      url: "https://example.com",
      icon: "🌐",
      description: "Check out my portfolio & blog",
    },
    {
      title: "Latest Project",
      url: "https://github.com",
      icon: "🚀",
      description: "See what I'm building",
    },
    {
      title: "YouTube Channel",
      url: "https://youtube.com",
      icon: "🎬",
      description: "Tutorials & behind the scenes",
    },
    {
      title: "Newsletter",
      url: "https://newsletter.example.com",
      icon: "📬",
      description: "Weekly insights delivered to your inbox",
    },
    {
      title: "Book a Call",
      url: "https://cal.com",
      icon: "📅",
      description: "Let's chat — schedule a 1:1",
    },
  ],

  // --- Socials ---
  socials: [
    { platform: "github", url: "https://github.com" },
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "youtube", url: "https://youtube.com" },
  ],

  // --- SEO ---
  siteTitle: "Your Name Here — Links",
  siteDescription: "All my links in one place. Find my projects, social media, and more.",
  siteUrl: "https://links.example.com",
  ogImage: "/og.png",

  // --- Footer ---
  footerText: "Made with ♥ by Alexis",
  footerLink: "https://alexisreyes.com",
};
