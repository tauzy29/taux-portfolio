export type Project = {
  id: string;
  title: string;
  category:
    | "Esports Poster"
    | "Gaming Thumbnail"
    | "Streamer Branding"
    | "Logo Design"
    | "Experimental Artwork"
    | "Cinematic Poster"
    | "Photo Manipulation";
  description: string;
  client?: string;
  tags: string[];
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  // 1. Strongest esports posters first
  {
    id: "poster-paper-rex-champions",
    title: "Paper Rex: VCT Pacific Champions",
    category: "Esports Poster",
    description:
      "Championship celebration poster for Paper Rex winning VCT Pacific Stage 1 Grand Finals with vibrant blue and pink neon aesthetics.",
    client: "Paper Rex",
    tags: ["Champions", "VCT Pacific", "Valorant", "Esports"],
    image: "/works/posters/p5.png",
    featured: true,
  },
  {
    id: "poster-red-force-champions",
    title: "Red Force: Santiago Masters Champions",
    category: "Esports Poster",
    description:
      "Championship composition for Red Force featuring team lineup, trophy spotlighting, and arena-energy lighting treatment.",
    client: "Red Force",
    tags: ["Champions", "Santiago Masters", "Valorant", "Esports"],
    image: "/works/posters/p6.jpg",
    featured: true,
  },
  {
    id: "poster-menatarms-5years",
    title: "MenAtArms: 5 Years of Legacy",
    category: "Esports Poster",
    description:
      "Anniversary milestone poster celebrating 5 years of MenAtArms Gaming with premium esports visual storytelling and legacy branding.",
    client: "MenAtArms Gaming",
    tags: ["Anniversary", "Community", "Esports Poster", "Legacy"],
    image: "/works/posters/p1.jpg",
    featured: true,
  },
  {
    id: "poster-back-to-immortal",
    title: "Back To Immortal",
    category: "Esports Poster",
    description:
      "Cinematic esports poster designed for gaming creator branding with aggressive red visual styling.",
    client: "MenAtArms Gaming",
    tags: ["Photoshop", "Poster Design", "Esports"],
    image: "/works/posters/p7.jpg",
    featured: true,
  },

  // 2. Streamer branding second
  {
    id: "branding-blind-joker-red",
    title: "Blind Joker: Live Screen (Red)",
    category: "Streamer Branding",
    description:
      "Vibrant red offline screen and live alert for Blind Joker featuring Valorant's Jett, bold typography, and stream urgency styling.",
    client: "Blind Joker",
    tags: ["Stream Alert", "Valorant", "Live Thumbnail"],
    image: "/works/thumbnail/t1.jpg",
  },
  {
    id: "branding-blind-joker-blue",
    title: "Blind Joker: Live Screen (Blue)",
    category: "Streamer Branding",
    description:
      "Cinematic blue variant offline stream layout for Blind Joker with focused character framing, creator portrait, and social icons.",
    client: "Blind Joker",
    tags: ["Offline Screen", "Streamer", "Twitch"],
    image: "/works/thumbnail/t2.jpg",
  },
  {
    id: "branding-menatarms-blue",
    title: "MenAtArms: Offline Banner (Blue)",
    category: "Streamer Branding",
    description:
      "Premium offline stream banner for MenAtArms featuring creator portrait, social icons, and dark blue smoky aesthetic.",
    client: "MenAtArms Gaming",
    tags: ["Offline Screen", "Kick", "Streamer Branding"],
    image: "/works/thumbnail/t4.jpg",
  },
  {
    id: "branding-menatarms-green",
    title: "MenAtArms: Offline Banner (Green)",
    category: "Streamer Branding",
    description:
      "Premium offline stream banner for MenAtArms featuring creator portrait, social icons, and dark green smoky aesthetic.",
    client: "MenAtArms Gaming",
    tags: ["Offline Screen", "Kick", "Streamer Branding"],
    image: "/works/thumbnail/t5.jpg",
  },
  {
    id: "branding-viper-wrapup",
    title: "Viper: Stream Completion",
    category: "Streamer Branding",
    description:
      "Stream-completion social visual for Viper Esports, using red grit textures and high-contrast typography to amplify event closure.",
    client: "Viper Esports",
    tags: ["Milestone", "YouTube", "Social Graphic"],
    image: "/works/posters/p2.jpg",
  },

  // 3. Gaming thumbnails third
  {
    id: "thumb-most-expensive-monitor",
    title: "Most Expensive Monitor Thumbnail",
    category: "Gaming Thumbnail",
    description:
      "YouTube tech review thumbnail for a BenQ Zowie XL2586X+ monitor feature, combining creator portrait, product render, and punchy pricing hook.",
    tags: ["YouTube", "Gaming Tech", "Hardware"],
    image: "/works/thumbnail/t6.jpg",
  },
  {
    id: "thumb-600hz-esports-monitor",
    title: "600Hz Esports Monitor Thumbnail",
    category: "Gaming Thumbnail",
    description:
      "YouTube gaming tech review thumbnail highlighting the 600Hz BenQ Zowie monitor with dynamic creator integration and bold typography.",
    tags: ["YouTube", "Hardware Review", "CS2"],
    image: "/works/thumbnail/t7.jpg",
  },
  {
    id: "thumb-kick-creator",
    title: "Kick Creator Portrait",
    category: "Gaming Thumbnail",
    description:
      "Creator portrait thumbnail with neon green KICK typography treatment and dark textured background for gaming content branding.",
    tags: ["Kick", "Creator Portrait", "Streaming"],
    image: "/works/thumbnail/t3.jpg",
  },

  // 4. Experimental artworks after
  {
    id: "art-cole-palmer",
    title: "Cole Palmer: Best Player",
    category: "Photo Manipulation",
    description:
      "Blue editorial football artwork centered on Cole Palmer with layered player cutouts and club-themed visual atmosphere.",
    tags: ["Football", "Chelsea", "Editorial Art"],
    image: "/works/posters/p3.jpg",
  },
  {
    id: "art-look-fall",
    title: "Look. Fall. (Glitch Art)",
    category: "Experimental Artwork",
    description:
      "Experimental glitch art poster featuring a high-contrast eye, abstract atomic icons, and emotional cinematic typography.",
    tags: ["Glitch Art", "Typography", "Abstract"],
    image: "/works/posters/p4.jpg",
  },
  {
    id: "art-multiverse-nolan",
    title: "Multiverse of Nolan",
    category: "Cinematic Poster",
    description:
      "Cinematic movie poster concept featuring a floating astronaut in a dreamy space setting with a glowing Batman symbol projection.",
    tags: ["Movie Poster", "Sci-Fi", "Concept Art"],
    image: "/works/posters/p8.jpg",
  },
  {
    id: "art-premam",
    title: "Premam: Cinematic Tribute",
    category: "Cinematic Poster",
    description:
      "Movie-themed dual-panel creative poster celebrating the film Premam, with monochrome portraits against vibrant red dahlias.",
    tags: ["Movie Poster", "Dual Panel", "Typography"],
    image: "/works/posters/p9.jpg",
  },

  // 5. Logos at the end
  {
    id: "logo-zenocorpz",
    title: "Zenocorpz Identity Mark",
    category: "Logo Design",
    description:
      "Bold, modern esports brand logo design for Zenocorpz with stylized mountain silhouette and competitive badge styling.",
    client: "Zenocorpz",
    tags: ["Logo", "Esports Identity", "Branding"],
    image: "/works/logos/l1.jpg",
  },
  {
    id: "logo-binary-legion",
    title: "Binary Legion Esports Logo",
    category: "Logo Design",
    description:
      "Purple-themed team logo for Binary Legion Esports designed with layered shield geometry and clean white type contrast.",
    client: "Binary Legion Esports",
    tags: ["Logo", "Team Identity", "Esports"],
    image: "/works/logos/l2.png",
  },
];

export const categories = [
  { id: "all", label: "All Works", count: projects.length },
  {
    id: "Esports Poster",
    label: "Esports Poster",
    count: projects.filter((p) => p.category === "Esports Poster").length,
  },
  {
    id: "Gaming Thumbnail",
    label: "Gaming Thumbnail",
    count: projects.filter((p) => p.category === "Gaming Thumbnail").length,
  },
  {
    id: "Streamer Branding",
    label: "Streamer Branding",
    count: projects.filter((p) => p.category === "Streamer Branding").length,
  },
  {
    id: "Logo Design",
    label: "Logo Design",
    count: projects.filter((p) => p.category === "Logo Design").length,
  },
  {
    id: "Experimental Artwork",
    label: "Experimental Artwork",
    count: projects.filter((p) => p.category === "Experimental Artwork").length,
  },
  {
    id: "Cinematic Poster",
    label: "Cinematic Poster",
    count: projects.filter((p) => p.category === "Cinematic Poster").length,
  },
  {
    id: "Photo Manipulation",
    label: "Photo Manipulation",
    count: projects.filter((p) => p.category === "Photo Manipulation").length,
  },
];
