const questions = [
  {
    question: "Pick your perfect BBQ option:",
    options: [
      { meat: "Filet Mignon", rarity: "Epic" },
      { meat: "Salami", rarity: "Common" },
      { meat: "Drum Stick", rarity: "Common" },
    ],
  },
  {
    question: "Dinner party centerpiece?",
    options: [
      { meat: "Ground Beef", rarity: "Common" },
      { meat: "Kebab", rarity: "Uncommon" },
      { meat: "Chicken Thigh", rarity: "Uncommon" },
    ],
  },
  {
    question: "Which cut are you craving today?",
    options: [
      { meat: "Filet Mignon", rarity: "Epic" },
      { meat: "Salami", rarity: "Common" },
      { meat: "Picanha", rarity: "Legendary" },
    ],
  },
  {
    question: "Your grill deserves the best. Pick one:",
    options: [
      { meat: "Chicken Thigh", rarity: "Uncommon" },
      { meat: "Picanha", rarity: "Legendary" },
      { meat: "Sirloin", rarity: "Epic" },
    ],
  },
  {
    question: "Which meat wins your heart?",
    options: [
      { meat: "Short Rib", rarity: "Common" },
      { meat: "Sirloin", rarity: "Epic" },
      { meat: "Kebab", rarity: "Uncommon" },
    ],
  },
  {
    question: "Dinner party centerpiece?",
    options: [
      { meat: "Filet Mignon", rarity: "Epic" },
      { meat: "Top Round", rarity: "Common" },
      { meat: "Neck", rarity: "Common" },
    ],
  },
  {
    question: "Which cut are you craving today?",
    options: [
      { meat: "Brisket", rarity: "Legendary" },
      { meat: "Sirloin", rarity: "Epic" },
      { meat: "Neck", rarity: "Common" },
    ],
  },
  {
    question: "Which meat wins your heart?",
    options: [
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Filet Mignon", rarity: "Epic" },
      { meat: "Ribeye", rarity: "Legendary" },
    ],
  },
  {
    question: "Tonight’s menu starts with:",
    options: [
      { meat: "Hotdog", rarity: "Common" },
      { meat: "Filet Mignon", rarity: "Epic" },
      { meat: "Neck", rarity: "Common" },
    ],
  },
  {
    question: "Which meat wins your heart?",
    options: [
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Flank", rarity: "Uncommon" },
      { meat: "Hotdog", rarity: "Common" },
    ],
  },
  {
    question: "Your grill deserves the best. Pick one:",
    options: [
      { meat: "Wing", rarity: "Common" },
      { meat: "Dino Rib", rarity: "Epic" },
      { meat: "Brisket", rarity: "Legendary" },
    ],
  },
  {
    question: "If you could only have one cut forever:",
    options: [
      { meat: "Ground Beef", rarity: "Common" },
      { meat: "Chorizo", rarity: "Uncommon" },
      { meat: "Osobuko", rarity: "Uncommon" },
    ],
  },
  {
    question: "Which meat wins your heart?",
    options: [
      { meat: "Lamb Chop", rarity: "Epic" },
      { meat: "Drum Stick", rarity: "Common" },
      { meat: "Denver", rarity: "Uncommon" },
    ],
  },
  {
    question: "What's your go-to meat for flavor?",
    options: [
      { meat: "Brisket", rarity: "Legendary" },
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Filet Mignon", rarity: "Epic" },
    ],
  },
  {
    question: "Which cut are you craving today?",
    options: [
      { meat: "Drum Stick", rarity: "Common" },
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Drum Stick", rarity: "Common" },
    ],
  },
  {
    question: "Pick your perfect BBQ option:",
    options: [
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Sirloin", rarity: "Epic" },
      { meat: "Dino Rib", rarity: "Epic" },
    ],
  },
  {
    question: "Select a cut that speaks to your soul:",
    options: [
      { meat: "Chicken Breast", rarity: "Common" },
      { meat: "T-bone", rarity: "Epic" },
      { meat: "Shank", rarity: "Uncommon" },
    ],
  },
  {
    question: "Pick your perfect BBQ option:",
    options: [
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Shank", rarity: "Uncommon" },
      { meat: "Chorizo", rarity: "Uncommon" },
    ],
  },
  {
    question: "What's your go-to meat for flavor?",
    options: [
      { meat: "Sirloin", rarity: "Epic" },
      { meat: "Ground Beef", rarity: "Common" },
      { meat: "Denver", rarity: "Uncommon" },
    ],
  },
  {
    question: "Dinner party centerpiece?",
    options: [
      { meat: "Chorizo", rarity: "Uncommon" },
      { meat: "Sirloin", rarity: "Epic" },
      { meat: "Ground Beef", rarity: "Common" },
    ],
  },
  {
    question: "Your grill deserves the best. Pick one:",
    options: [
      { meat: "Chicken Thigh", rarity: "Uncommon" },
      { meat: "Kebab", rarity: "Uncommon" },
      { meat: "Brisket", rarity: "Legendary" },
    ],
  },
  {
    question: "Choose your weekend special:",
    options: [
      { meat: "Chuck", rarity: "Common" },
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Hotdog", rarity: "Common" },
    ],
  },
  {
    question: "Your grill deserves the best.",
    options: [
      { meat: "Ribeye", rarity: "Legendary" },
      { meat: "T-bone", rarity: "Epic" },
      { meat: "Lamb Chop", rarity: "Epic" },
    ],
  },
  {
    question: "Choose your weekend special:",
    options: [
      { meat: "Shank", rarity: "Uncommon" },
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Osobuko", rarity: "Uncommon" },
    ],
  },
  {
    question: "Select a cut that speaks to your soul:",
    options: [
      { meat: "Hotdog", rarity: "Common" },
      { meat: "Salami", rarity: "Common" },
      { meat: "Picanha", rarity: "Legendary" },
    ],
  },
  {
    question: "Which cut are you craving today?",
    options: [
      { meat: "Filet Mignon", rarity: "Epic" },
      { meat: "Wing", rarity: "Common" },
      { meat: "Neck", rarity: "Common" },
    ],
  },
  {
    question: "Tonight’s menu starts with:",
    options: [
      { meat: "Chorizo", rarity: "Uncommon" },
      { meat: "Shank", rarity: "Uncommon" },
      { meat: "Shank", rarity: "Uncommon" },
    ],
  },
  {
    question: "Your grill deserves the best. Pick one:",
    options: [
      { meat: "Osobuko", rarity: "Uncommon" },
      { meat: "Ribeye", rarity: "Legendary" },
      { meat: "Ribeye", rarity: "Legendary" },
    ],
  },
  {
    question: "Which meat wins your heart?",
    options: [
      { meat: "Kebab", rarity: "Uncommon" },
      { meat: "Picanha", rarity: "Legendary" },
      { meat: "Top Round", rarity: "Common" },
    ],
  },
  {
    question: "Pick your perfect BBQ option:",
    options: [
      { meat: "Short Rib", rarity: "Common" },
      { meat: "Brisket", rarity: "Legendary" },
      { meat: "Neck", rarity: "Common" },
    ],
  },
  {
    question: "Choose your weekend special:",
    options: [
      { meat: "Dino Rib", rarity: "Epic" },
      { meat: "Filet Mignon", rarity: "Epic" },
      { meat: "Flank", rarity: "Uncommon" },
    ],
  },
  {
    question: "Dinner party centerpiece?",
    options: [
      { meat: "T-bone", rarity: "Epic" },
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Chuck", rarity: "Common" },
    ],
  },
  {
    question: "Pick your perfect BBQ option:",
    options: [
      { meat: "Flank", rarity: "Uncommon" },
      { meat: "Chicken Breast", rarity: "Common" },
      { meat: "Lamb Chops", rarity: "Epic" },
    ],
  },
  {
    question: "Your grill deserves the best.",
    options: [
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Sirloin", rarity: "Epic" },
    ],
  },
  {
    question: "Choose your weekend special:",
    options: [
      { meat: "Brisket", rarity: "Legendary" },
      { meat: "Ribeye", rarity: "Legendary" },
      { meat: "Filet Mignon", rarity: "Epic" },
    ],
  },
  {
    question: "Dinner party centerpiece?",
    options: [
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Shank", rarity: "Uncommon" },
      { meat: "Neck", rarity: "Common" },
    ],
  },
  {
    question: "If you could only have one cut forever:",
    options: [
      { meat: "Filet Mignon", rarity: "Epic" },
      { meat: "Ground Beef", rarity: "Common" },
      { meat: "Dino Rib", rarity: "Epic" },
    ],
  },
  {
    question: "Pick your perfect BBQ option:",
    options: [
      { meat: "Filet Mignon", rarity: "Epic" },
      { meat: "Dino Rib", rarity: "Epic" },
      { meat: "Brisket", rarity: "Legendary" },
    ],
  },
  {
    question: "If you could only have one cut forever:",
    options: [
      { meat: "Dino Rib", rarity: "Epic" },
      { meat: "Chuck", rarity: "Common" },
      { meat: "Top Round", rarity: "Common" },
    ],
  },
  {
    question: "Select a cut that speaks to your soul:",
    options: [
      { meat: "Wing", rarity: "Common" },
      { meat: "Chorizo", rarity: "Uncommon" },
      { meat: "Chorizo", rarity: "Uncommon" },
    ],
  },
  {
    question: "Pick your perfect BBQ option:",
    options: [
      { meat: "Sirloin", rarity: "Epic" },
      { meat: "Ribeye", rarity: "Legendary" },
      { meat: "Wing", rarity: "Common" },
    ],
  },
  {
    question: "Choose your weekend special:",
    options: [
      { meat: "Denver", rarity: "Uncommon" },
      { meat: "Brisket", rarity: "Legendary" },
      { meat: "Salami", rarity: "Common" },
    ],
  },
  {
    question: "Tonight’s menu starts with:",
    options: [
      { meat: "Hotdog", rarity: "Common" },
      { meat: "Salami", rarity: "Common" },
      { meat: "Sirloin", rarity: "Epic" },
    ],
  },
  {
    question: "If you could only have one cut forever:",
    options: [
      { meat: "Lamb Chop", rarity: "Epic" },
      { meat: "Chicken Thigh", rarity: "Uncommon" },
      { meat: "Flank", rarity: "Uncommon" },
    ],
  },
  {
    question: "Tonight’s menu starts with:",
    options: [
      { meat: "Shank", rarity: "Uncommon" },
      { meat: "Top Round", rarity: "Common" },
      { meat: "Picanha", rarity: "Legendary" },
    ],
  },
  {
    question: "Which meat wins your heart?",
    options: [
      { meat: "Top Round", rarity: "Common" },
      { meat: "Chicken Thigh", rarity: "Uncommon" },
      { meat: "Chicken Breast", rarity: "Common" },
    ],
  },
  {
    question: "Your grill deserves the best. Pick one:",
    options: [
      { meat: "Ribeye", rarity: "Legendary" },
      { meat: "Chorizo", rarity: "Uncommon" },
      { meat: "Chicken Breast", rarity: "Common" },
    ],
  },
  {
    question: "Tonight’s menu starts with:",
    options: [
      { meat: "T-bone", rarity: "Epic" },
      { meat: "Salami", rarity: "Common" },
      { meat: "Filet Mignon", rarity: "Epic" },
    ],
  },
  {
    question: "Tonight’s menu starts with:",
    options: [
      { meat: "Picanha", rarity: "Legendary" },
      { meat: "Short Rib", rarity: "Common" },
      { meat: "T-bone", rarity: "Epic" },
    ],
  },
  {
    question: "Your grill deserves the best. Pick one:",
    options: [
      { meat: "Osobuko", rarity: "Uncommon" },
      { meat: "Ground Beef", rarity: "Common" },
      { meat: "Chorizo", rarity: "Uncommon" },
    ],
  },
]

export default questions