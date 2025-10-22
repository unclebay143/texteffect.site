export interface TextEffect {
  id: number;
  name: string;
  preview: string;
  classes: string;
  customCSS?: string;
  category: string;
}

export const textEffects: TextEffect[] = [
  {
    id: 1,
    name: "Rainbow Gradient",
    preview: "Rulebase",
    classes:
      "font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 dark:from-pink-500 dark:via-purple-500 dark:to-blue-500 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 3,
    name: "3D Shadow",
    preview: "3D Text",
    classes:
      "font-black text-purple-700 dark:text-white drop-shadow-[0_5px_0_rgba(168,85,247,0.4)] drop-shadow-[0_10px_0_rgba(139,92,246,0.3)]",
    category: "Shadow/Glow",
  },
  {
    id: 2,
    name: "Neon Glow",
    preview: "Neon",
    classes: "font-bold text-cyan-600 dark:text-cyan-400 animate-glow",
    customCSS: `@keyframes glow {
    0%, 100% {
      text-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
    }
    50% {
      text-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
    }
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }`,
    category: "Shadow/Glow",
  },
  {
    id: 4,
    name: "Metallic Gold",
    preview: "Luxury",
    classes:
      "font-bold bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-800 dark:from-yellow-200 dark:via-yellow-400 dark:to-yellow-700 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 5,
    name: "Outlined",
    preview: "Outline",
    classes:
      "font-bold text-transparent [-webkit-text-stroke:2px_#7c3aed] dark:[-webkit-text-stroke:2px_white]",
    category: "Outline/Stroke",
  },
  {
    id: 6,
    name: "Dotted Border",
    preview: "Dotted",
    classes:
      "font-bold text-foreground border-4 border-dotted border-primary px-4",
    category: "Special/Other",
  },
  {
    id: 7,
    name: "Retro Wave",
    preview: "Retro",
    classes:
      "font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 dark:from-pink-500 dark:via-purple-600 dark:to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]",
    category: "Gradient",
  },
  {
    id: 8,
    name: "Fire Gradient",
    preview: "Fire",
    classes:
      "font-black bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 dark:from-red-600 dark:via-orange-500 dark:to-yellow-400 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 9,
    name: "Ice Blue",
    preview: "Frozen",
    classes:
      "font-bold text-cyan-700 dark:text-cyan-100 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] drop-shadow-[0_0_30px_rgba(8,145,178,0.6)]",
    category: "Shadow/Glow",
  },
  {
    id: 10,
    name: "Holographic",
    preview: "Holo",
    classes:
      "font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]",
    customCSS: `@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.animate-shimmer { animation: shimmer 3s linear infinite; }`,
    category: "Gradient",
  },
  {
    id: 11,
    name: "Embossed",
    preview: "Carved",
    classes:
      "font-black text-gray-700 dark:text-gray-300 drop-shadow-[2px_2px_0_rgba(255,255,255,0.3)] drop-shadow-[-2px_-2px_0_rgba(0,0,0,0.7)]",
    category: "Special/Other",
  },
  {
    id: 12,
    name: "Blur Effect",
    preview: "Blurred",
    classes:
      "font-bold text-purple-700 dark:text-white blur-[2px] hover:blur-none transition-all duration-300",
    category: "Blur/Glass",
  },
  {
    id: 13,
    name: "Double Exposure",
    preview: "Double",
    classes:
      "font-black text-gray-900 dark:text-white relative after:content-[attr(data-text)] after:w-full after:absolute after:left-[4px] after:top-[4px] after:text-purple-600 dark:after:text-purple-500 after:opacity-50 after:-z-10",
    category: "Special/Other",
  },
  {
    id: 14,
    name: "Comic Style",
    preview: "BOOM!",
    classes:
      "font-black text-yellow-500 dark:text-yellow-400 [-webkit-text-stroke:3px_black] drop-shadow-[4px_4px_0_rgba(0,0,0,1)]",
    category: "Outline/Stroke",
  },
  {
    id: 15,
    name: "Glitch Effect",
    preview: "Glitch",
    classes:
      "font-bold text-red-700 dark:text-red-500 relative before:content-[attr(data-text)] before:absolute before:left-[-2px] before:text-cyan-600 dark:before:text-cyan-500 before:animate-pulse",
    category: "Special/Other",
  },
  {
    id: 16,
    name: "Shimmer",
    preview: "Shine",
    classes:
      "font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 dark:from-gray-400 dark:via-white dark:to-gray-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]",
    customCSS: `@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.animate-shimmer { animation: shimmer 3s linear infinite; }`,
    category: "Gradient",
  },
  {
    id: 17,
    name: "Frosted Glass",
    preview: "Glass",
    classes:
      "font-bold text-gray-800/80 dark:text-white/80 backdrop-blur-md bg-gray-200/30 dark:bg-white/10 px-6 py-2 rounded-lg border border-gray-400/40 dark:border-white/20",
    category: "Blur/Glass",
  },
  {
    id: 18,
    name: "Chrome Effect",
    preview: "Chrome",
    classes:
      "font-black bg-gradient-to-b from-gray-500 via-gray-400 to-gray-600 dark:from-gray-200 dark:via-gray-400 dark:to-gray-600 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(156,163,175,0.5)]",
    category: "Gradient",
  },
  {
    id: 19,
    name: "Pixel Perfect",
    preview: "Pixel",
    classes:
      "font-mono font-bold text-green-700 dark:text-green-400 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] [-webkit-text-stroke:1px_rgba(0,255,0,0.3)]",
    category: "Mono/Pixel",
  },
  {
    id: 20,
    name: "Aurora",
    preview: "Aurora",
    classes:
      "font-bold bg-gradient-to-r from-teal-600 via-pink-600 to-purple-600 dark:from-teal-200 dark:via-pink-200 dark:to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,239,234,0.6)]",
    category: "Gradient",
  },
  {
    id: 21,
    name: "Toxic Green",
    preview: "Toxic",
    classes:
      "font-black bg-gradient-to-r from-lime-400 via-green-500 to-emerald-600 dark:from-lime-300 dark:via-green-400 dark:to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,197,94,0.7)]",
    category: "Gradient",
  },
  {
    id: 22,
    name: "Blood Red",
    preview: "Blood",
    classes:
      "font-bold text-red-600 dark:text-red-700 drop-shadow-[0_5px_15px_rgba(220,38,38,0.8)] [-webkit-text-stroke:1px_rgba(127,29,29,0.5)]",
    category: "Shadow/Glow",
  },
  {
    id: 23,
    name: "Electric Blue",
    preview: "Electric",
    classes:
      "font-black text-blue-400 dark:text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.9)] drop-shadow-[0_0_40px_rgba(37,99,235,0.6)]",
    category: "Shadow/Glow",
  },
  {
    id: 24,
    name: "Magma",
    preview: "Magma",
    classes:
      "font-black bg-gradient-to-t from-orange-900 via-red-600 to-yellow-400 dark:from-orange-800 dark:via-red-500 dark:to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_4px_0_rgba(234,88,12,0.5)]",
    category: "Gradient",
  },
  {
    id: 25,
    name: "Ocean Depth",
    preview: "Ocean",
    classes:
      "font-bold bg-gradient-to-b from-blue-300 via-cyan-600 to-blue-900 dark:from-blue-400 dark:via-cyan-500 dark:to-blue-800 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 26,
    name: "Sunset Glow",
    preview: "Sunset",
    classes:
      "font-black bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 dark:from-orange-300 dark:via-pink-400 dark:to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(251,146,60,0.5)]",
    category: "Gradient",
  },
  {
    id: 27,
    name: "Matrix",
    preview: "Matrix",
    classes:
      "font-mono font-bold text-green-500 dark:text-green-600 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] [-webkit-text-stroke:0.5px_rgba(21,128,61,0.3)]",
    category: "Mono/Pixel",
  },
  {
    id: 28,
    name: "Royal Purple",
    preview: "Royal",
    classes:
      "font-black bg-gradient-to-b from-purple-300 via-purple-600 to-purple-900 dark:from-purple-400 dark:via-purple-700 dark:to-purple-900 bg-clip-text text-transparent drop-shadow-[0_5px_0_rgba(88,28,135,0.4)]",
    category: "Gradient",
  },
  {
    id: 29,
    name: "Desert Sand",
    preview: "Desert",
    classes:
      "font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-500 dark:from-amber-300 dark:via-yellow-500 dark:to-orange-600 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 30,
    name: "Midnight",
    preview: "Night",
    classes:
      "font-black text-indigo-900 dark:text-indigo-700 drop-shadow-[2px_2px_0_rgba(99,102,241,0.3)] drop-shadow-[0_0_20px_rgba(67,56,202,0.5)]",
    category: "Solid Color",
  },
  {
    id: 31,
    name: "Cyber Pink",
    preview: "Cyber",
    classes:
      "font-black text-pink-500 dark:text-pink-600 [-webkit-text-stroke:2px_rgba(236,72,153,0.5)] drop-shadow-[0_0_30px_rgba(236,72,153,0.8)]",
    category: "Outline/Stroke",
  },
  {
    id: 32,
    name: "Forest",
    preview: "Forest",
    classes:
      "font-bold bg-gradient-to-b from-green-300 via-emerald-600 to-green-900 dark:from-green-400 dark:via-emerald-700 dark:to-green-900 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 33,
    name: "Volcano",
    preview: "Volcano",
    classes:
      "font-black bg-gradient-to-t from-red-900 via-orange-600 to-yellow-300 dark:from-red-800 dark:via-orange-500 dark:to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_6px_0_rgba(153,27,27,0.6)]",
    category: "Gradient",
  },
  {
    id: 34,
    name: "Ice Crystal",
    preview: "Crystal",
    classes:
      "font-bold text-sky-200 dark:text-sky-300 drop-shadow-[0_0_20px_rgba(186,230,253,0.9)] [-webkit-text-stroke:1px_rgba(125,211,252,0.3)]",
    category: "Shadow/Glow",
  },
  {
    id: 35,
    name: "Toxic Waste",
    preview: "Toxic",
    classes:
      "font-black text-lime-400 dark:text-lime-500 drop-shadow-[0_0_30px_rgba(163,230,53,0.8)] drop-shadow-[0_4px_0_rgba(77,124,15,0.6)]",
    category: "Shadow/Glow",
  },
  {
    id: 36,
    name: "Candy",
    preview: "Candy",
    classes:
      "font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(244,114,182,0.4)]",
    category: "Gradient",
  },
  {
    id: 37,
    name: "Steel",
    preview: "Steel",
    classes:
      "font-black bg-gradient-to-b from-gray-300 via-gray-500 to-gray-700 dark:from-gray-400 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(107,114,128,0.6)]",
    category: "Gradient",
  },
  {
    id: 38,
    name: "Lava Flow",
    preview: "Lava",
    classes:
      "font-black bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 dark:from-red-700 dark:via-orange-700 dark:to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(234,88,12,0.7)]",
    category: "Gradient",
  },
  {
    id: 39,
    name: "Midnight Blue",
    preview: "Midnight",
    classes:
      "font-bold text-blue-900 dark:text-blue-800 drop-shadow-[0_0_25px_rgba(30,58,138,0.8)] drop-shadow-[2px_2px_0_rgba(59,130,246,0.3)]",
    category: "Shadow/Glow",
  },
  {
    id: 40,
    name: "Emerald Shine",
    preview: "Emerald",
    classes:
      "font-black bg-gradient-to-r from-emerald-300 via-green-400 to-teal-500 dark:from-emerald-400 dark:via-green-500 dark:to-teal-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]",
    category: "Gradient",
  },
  {
    id: 41,
    name: "Cotton Candy",
    preview: "Fluffy",
    classes:
      "font-bold bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:from-pink-300 dark:via-purple-300 dark:to-blue-300 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 42,
    name: "Bronze",
    preview: "Bronze",
    classes:
      "font-black bg-gradient-to-b from-amber-400 via-orange-600 to-amber-800 dark:from-amber-500 dark:via-orange-700 dark:to-amber-900 bg-clip-text text-transparent drop-shadow-[0_4px_0_rgba(146,64,14,0.5)]",
    category: "Gradient",
  },
  {
    id: 43,
    name: "Arctic",
    preview: "Arctic",
    classes:
      "font-bold text-cyan-200 dark:text-cyan-300 drop-shadow-[0_0_30px_rgba(165,243,252,0.8)] drop-shadow-[0_0_50px_rgba(103,232,249,0.5)]",
    category: "Shadow/Glow",
  },
  {
    id: 44,
    name: "Crimson",
    preview: "Crimson",
    classes:
      "font-black text-rose-600 dark:text-rose-700 [-webkit-text-stroke:1px_rgba(190,18,60,0.6)] drop-shadow-[0_5px_15px_rgba(225,29,72,0.7)]",
    category: "Outline/Stroke",
  },
  {
    id: 45,
    name: "Mint Fresh",
    preview: "Mint",
    classes:
      "font-bold bg-gradient-to-r from-teal-300 via-green-300 to-lime-300 dark:from-teal-400 dark:via-green-400 dark:to-lime-400 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 46,
    name: "Rust",
    preview: "Rust",
    classes:
      "font-black bg-gradient-to-b from-orange-400 via-red-600 to-orange-800 dark:from-orange-500 dark:via-red-700 dark:to-orange-900 bg-clip-text text-transparent drop-shadow-[0_3px_0_rgba(154,52,18,0.6)]",
    category: "Gradient",
  },
  {
    id: 47,
    name: "Plasma",
    preview: "Plasma",
    classes:
      "font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-purple-600 dark:via-pink-600 dark:to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(236,72,153,0.7)]",
    category: "Gradient",
  },
  {
    id: 48,
    name: "Deep Sea",
    preview: "Deep",
    classes:
      "font-black bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-400 dark:from-blue-800 dark:via-blue-500 dark:to-cyan-300 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 49,
    name: "Amber Glow",
    preview: "Amber",
    classes:
      "font-bold text-amber-400 dark:text-amber-500 drop-shadow-[0_0_25px_rgba(251,191,36,0.9)] drop-shadow-[0_0_45px_rgba(245,158,11,0.6)]",
    category: "Shadow/Glow",
  },
  {
    id: 50,
    name: "Lavender",
    preview: "Lavender",
    classes:
      "font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 dark:from-purple-400 dark:via-pink-400 dark:to-purple-500 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 51,
    name: "Copper",
    preview: "Copper",
    classes:
      "font-black bg-gradient-to-b from-orange-300 via-orange-500 to-orange-700 dark:from-orange-400 dark:via-orange-600 dark:to-orange-800 bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(194,65,12,0.5)]",
    category: "Gradient",
  },
  {
    id: 52,
    name: "Lime Punch",
    preview: "Lime",
    classes:
      "font-black text-lime-400 dark:text-lime-500 [-webkit-text-stroke:2px_rgba(132,204,22,0.4)] drop-shadow-[0_0_20px_rgba(163,230,53,0.8)]",
    category: "Outline/Stroke",
  },
  {
    id: 53,
    name: "Sapphire",
    preview: "Sapphire",
    classes:
      "font-bold bg-gradient-to-b from-blue-300 via-blue-600 to-blue-800 dark:from-blue-400 dark:via-blue-700 dark:to-blue-900 bg-clip-text text-transparent drop-shadow-[0_5px_0_rgba(30,64,175,0.4)]",
    category: "Gradient",
  },
  {
    id: 54,
    name: "Peach",
    preview: "Peach",
    classes:
      "font-bold bg-gradient-to-r from-orange-200 via-pink-300 to-rose-300 dark:from-orange-300 dark:via-pink-400 dark:to-rose-400 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 55,
    name: "Aqua Neon",
    preview: "Aqua",
    classes:
      "font-black text-cyan-400 dark:text-cyan-500 drop-shadow-[0_0_15px_rgba(34,211,238,1)] drop-shadow-[0_0_35px_rgba(6,182,212,0.7)]",
    category: "Shadow/Glow",
  },
  {
    id: 56,
    name: "Burgundy",
    preview: "Wine",
    classes:
      "font-black bg-gradient-to-b from-red-400 via-red-700 to-red-900 dark:from-red-500 dark:via-red-800 dark:to-red-950 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 57,
    name: "Neon Yellow",
    preview: "Neon Y",
    classes:
      "font-bold text-yellow-300 dark:text-yellow-400 drop-shadow-[0_0_20px_rgba(253,224,71,1)] drop-shadow-[0_0_40px_rgba(250,204,21,0.8)]",
    category: "Shadow/Glow",
  },
  {
    id: 58,
    name: "Turquoise",
    preview: "Turquoise",
    classes:
      "font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 dark:from-teal-500 dark:via-cyan-600 dark:to-blue-600 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 59,
    name: "Charcoal",
    preview: "Charcoal",
    classes:
      "font-black text-gray-600 dark:text-gray-700 drop-shadow-[2px_2px_0_rgba(31,41,55,0.8)] drop-shadow-[0_0_15px_rgba(75,85,99,0.5)]",
    category: "Solid Color",
  },
  {
    id: 60,
    name: "Ruby",
    preview: "Ruby",
    classes:
      "font-black bg-gradient-to-b from-rose-400 via-red-600 to-rose-800 dark:from-rose-500 dark:via-red-700 dark:to-rose-900 bg-clip-text text-transparent drop-shadow-[0_4px_0_rgba(159,18,57,0.6)]",
    category: "Gradient",
  },
  {
    id: 61,
    name: "Mint Ice",
    preview: "Mint",
    classes:
      "font-bold text-teal-200 dark:text-teal-300 drop-shadow-[0_0_25px_rgba(153,246,228,0.9)] [-webkit-text-stroke:0.5px_rgba(94,234,212,0.4)]",
    category: "Shadow/Glow",
  },
  {
    id: 62,
    name: "Tangerine",
    preview: "Tang",
    classes:
      "font-black bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 dark:from-orange-500 dark:via-orange-600 dark:to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(249,115,22,0.6)]",
    category: "Gradient",
  },
  {
    id: 63,
    name: "Orchid",
    preview: "Orchid",
    classes:
      "font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 dark:from-purple-500 dark:via-fuchsia-500 dark:to-pink-500 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 64,
    name: "Slate Storm",
    preview: "Storm",
    classes:
      "font-black text-slate-400 dark:text-slate-500 drop-shadow-[3px_3px_0_rgba(15,23,42,0.7)] drop-shadow-[0_0_20px_rgba(71,85,105,0.6)]",
    category: "Shadow/Glow",
  },
  {
    id: 65,
    name: "Coral Reef",
    preview: "Coral",
    classes:
      "font-bold bg-gradient-to-r from-pink-400 via-orange-400 to-red-400 dark:from-pink-500 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 66,
    name: "Jade",
    preview: "Jade",
    classes:
      "font-black bg-gradient-to-b from-green-300 via-emerald-500 to-green-700 dark:from-green-400 dark:via-emerald-600 dark:to-green-800 bg-clip-text text-transparent drop-shadow-[0_4px_0_rgba(21,128,61,0.5)]",
    category: "Gradient",
  },
  {
    id: 67,
    name: "Sunset Pink",
    preview: "Sunset",
    classes:
      "font-bold bg-gradient-to-r from-rose-300 via-pink-400 to-purple-400 dark:from-rose-400 dark:via-pink-500 dark:to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(244,114,182,0.5)]",
    category: "Gradient",
  },
  {
    id: 68,
    name: "Cobalt",
    preview: "Cobalt",
    classes:
      "font-black text-blue-600 dark:text-blue-700 [-webkit-text-stroke:1px_rgba(37,99,235,0.5)] drop-shadow-[0_5px_15px_rgba(59,130,246,0.7)]",
    category: "Outline/Stroke",
  },
  {
    id: 69,
    name: "Honey Gold",
    preview: "Honey",
    classes:
      "font-bold bg-gradient-to-b from-yellow-300 via-amber-500 to-orange-600 dark:from-yellow-400 dark:via-amber-600 dark:to-orange-700 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 70,
    name: "Plum",
    preview: "Plum",
    classes:
      "font-black bg-gradient-to-b from-purple-400 via-purple-700 to-purple-900 dark:from-purple-500 dark:via-purple-800 dark:to-purple-950 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 71,
    name: "Seafoam",
    preview: "Seafoam",
    classes:
      "font-bold bg-gradient-to-r from-cyan-300 via-teal-300 to-green-300 dark:from-cyan-400 dark:via-teal-400 dark:to-green-400 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 72,
    name: "Brick Red",
    preview: "Brick",
    classes:
      "font-black text-red-700 dark:text-red-800 drop-shadow-[2px_2px_0_rgba(127,29,29,0.8)] drop-shadow-[0_0_15px_rgba(185,28,28,0.5)]",
    category: "Solid Color",
  },
  {
    id: 73,
    name: "Lilac",
    preview: "Lilac",
    classes:
      "font-bold bg-gradient-to-r from-purple-200 via-violet-300 to-purple-300 dark:from-purple-300 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 74,
    name: "Moss",
    preview: "Moss",
    classes:
      "font-black bg-gradient-to-b from-lime-400 via-green-600 to-green-800 dark:from-lime-500 dark:via-green-700 dark:to-green-900 bg-clip-text text-transparent drop-shadow-[0_3px_0_rgba(22,101,52,0.5)]",
    category: "Gradient",
  },
  {
    id: 75,
    name: "Raspberry",
    preview: "Berry",
    classes:
      "font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 dark:from-pink-600 dark:via-rose-600 dark:to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(244,63,94,0.6)]",
    category: "Gradient",
  },
  {
    id: 76,
    name: "Sky Blue",
    preview: "Sky",
    classes:
      "font-bold text-sky-400 dark:text-sky-500 drop-shadow-[0_0_20px_rgba(56,189,248,0.8)] drop-shadow-[0_0_40px_rgba(14,165,233,0.5)]",
    category: "Shadow/Glow",
  },
  {
    id: 77,
    name: "Graphite",
    preview: "Graphite",
    classes:
      "font-black bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800 dark:from-gray-500 dark:via-gray-700 dark:to-gray-900 bg-clip-text text-transparent drop-shadow-[0_3px_7px_rgba(55,65,81,0.6)]",
    category: "Gradient",
  },
  {
    id: 78,
    name: "Cherry",
    preview: "Cherry",
    classes:
      "font-black text-red-500 dark:text-red-600 [-webkit-text-stroke:1.5px_rgba(220,38,38,0.5)] drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]",
    category: "Outline/Stroke",
  },
  {
    id: 79,
    name: "Pearl",
    preview: "Pearl",
    classes:
      "font-bold bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-200 dark:via-gray-300 dark:to-gray-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(229,231,235,0.7)]",
    category: "Gradient",
  },
  {
    id: 80,
    name: "Indigo Night",
    preview: "Indigo",
    classes:
      "font-black bg-gradient-to-b from-indigo-400 via-indigo-700 to-indigo-900 dark:from-indigo-500 dark:via-indigo-800 dark:to-indigo-950 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 81,
    name: "Coral Pink",
    preview: "Coral",
    classes:
      "font-bold text-pink-400 dark:text-pink-500 drop-shadow-[0_0_25px_rgba(244,114,182,0.9)] drop-shadow-[0_0_45px_rgba(236,72,153,0.6)]",
    category: "Shadow/Glow",
  },
  {
    id: 82,
    name: "Olive",
    preview: "Olive",
    classes:
      "font-black bg-gradient-to-b from-lime-500 via-green-700 to-green-900 dark:from-lime-600 dark:via-green-800 dark:to-green-950 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 83,
    name: "Rose Gold",
    preview: "Rose",
    classes:
      "font-bold bg-gradient-to-r from-pink-300 via-rose-400 to-orange-400 dark:from-pink-400 dark:via-rose-500 dark:to-orange-500 bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(251,113,133,0.5)]",
    category: "Gradient",
  },
  {
    id: 84,
    name: "Teal Wave",
    preview: "Teal",
    classes:
      "font-black text-teal-400 dark:text-teal-500 [-webkit-text-stroke:1px_rgba(20,184,166,0.4)] drop-shadow-[0_0_20px_rgba(45,212,191,0.8)]",
    category: "Outline/Stroke",
  },
  {
    id: 85,
    name: "Mustard",
    preview: "Mustard",
    classes:
      "font-bold bg-gradient-to-b from-yellow-400 via-yellow-600 to-yellow-800 dark:from-yellow-500 dark:via-yellow-700 dark:to-yellow-900 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 86,
    name: "Violet Storm",
    preview: "Violet",
    classes:
      "font-black text-violet-500 dark:text-violet-600 drop-shadow-[0_5px_15px_rgba(139,92,246,0.8)] drop-shadow-[2px_2px_0_rgba(109,40,217,0.4)]",
    category: "Shadow/Glow",
  },
  {
    id: 87,
    name: "Cream",
    preview: "Cream",
    classes:
      "font-bold bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 dark:from-amber-200 dark:via-yellow-200 dark:to-orange-200 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(254,243,199,0.6)]",
    category: "Gradient",
  },
  {
    id: 88,
    name: "Fuchsia Glow",
    preview: "Fuchsia",
    classes:
      "font-black text-fuchsia-500 dark:text-fuchsia-600 drop-shadow-[0_0_20px_rgba(217,70,239,1)] drop-shadow-[0_0_40px_rgba(192,38,211,0.7)]",
    category: "Shadow/Glow",
  },
  {
    id: 89,
    name: "Navy",
    preview: "Navy",
    classes:
      "font-black bg-gradient-to-b from-blue-600 via-blue-800 to-blue-950 dark:from-blue-700 dark:via-blue-900 dark:to-blue-950 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 90,
    name: "Apricot",
    preview: "Apricot",
    classes:
      "font-bold bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-400 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 91,
    name: "Crimson Shadow",
    preview: "Shadow",
    classes:
      "font-black text-red-600 dark:text-red-700 drop-shadow-[4px_4px_0_rgba(127,29,29,1)] drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]",
    category: "Shadow/Glow",
  },
  {
    id: 92,
    name: "Cyan Pulse",
    preview: "Pulse",
    classes:
      "font-bold text-cyan-300 dark:text-cyan-400 drop-shadow-[0_0_15px_rgba(103,232,249,1)] drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]",
    category: "Shadow/Glow",
  },
  {
    id: 93,
    name: "Marigold",
    preview: "Marigold",
    classes:
      "font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 dark:from-yellow-500 dark:via-orange-600 dark:to-amber-700 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 94,
    name: "Periwinkle",
    preview: "Peri",
    classes:
      "font-bold bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 95,
    name: "Onyx",
    preview: "Onyx",
    classes:
      "font-black text-gray-800 dark:text-gray-900 drop-shadow-[3px_3px_0_rgba(0,0,0,0.9)] [-webkit-text-stroke:1px_rgba(31,41,55,0.6)]",
    category: "Outline/Stroke",
  },
  {
    id: 96,
    name: "Lemon",
    preview: "Lemon",
    classes:
      "font-bold text-yellow-300 dark:text-yellow-400 drop-shadow-[0_0_20px_rgba(253,224,71,0.9)] [-webkit-text-stroke:0.5px_rgba(250,204,21,0.4)]",
    category: "Outline/Stroke",
  },
  {
    id: 97,
    name: "Sangria",
    preview: "Sangria",
    classes:
      "font-black bg-gradient-to-b from-rose-500 via-red-700 to-purple-800 dark:from-rose-600 dark:via-red-800 dark:to-purple-900 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 98,
    name: "Pistachio",
    preview: "Pistachio",
    classes:
      "font-bold bg-gradient-to-r from-green-300 via-lime-300 to-green-400 dark:from-green-400 dark:via-lime-400 dark:to-green-500 bg-clip-text text-transparent",
    category: "Gradient",
  },
  {
    id: 99,
    name: "Blueberry",
    preview: "Blueberry",
    classes:
      "font-black bg-gradient-to-b from-blue-400 via-indigo-600 to-purple-700 dark:from-blue-500 dark:via-indigo-700 dark:to-purple-800 bg-clip-text text-transparent drop-shadow-[0_4px_0_rgba(67,56,202,0.5)]",
    category: "Gradient",
  },
  {
    id: 100,
    name: "Champagne",
    preview: "Champagne",
    classes:
      "font-bold bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 dark:from-yellow-300 dark:via-amber-300 dark:to-orange-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(254,240,138,0.6)]",
    category: "Gradient",
  },
];
