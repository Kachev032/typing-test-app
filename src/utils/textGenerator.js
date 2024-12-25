const sampleText = [
  "It is not our abilities that show what we truly are… it is our choices. And even if we don't know what we're capable of, we can still make a difference by choosing to fight for the right cause, no matter how small we feel.",
  "The future is not set. There is no fate but what we make for ourselves. You can't be told what the future holds, but you can choose your own path. That is the only true freedom you have. Make it count.",
  "We are all stories in the end. Just make it a good one, eh? You'll see that, in the end, the things that matter are not the things we gather, but the love we give and the stories we share.",
  "The world is indeed full of peril, and in it there are many dark places. But still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater. And that is what makes it worth living for.",
  "You have to be a little bit crazy to really make a difference. To think outside the box, to follow your heart instead of the rules. The world may not always understand, but in the end, it's those crazy ideas that change everything.",
  "In our society, letting go of everything you've been taught to believe is the hardest part of living. Sometimes, it's easier to just cling to the comfort of the old ways, even when they don't serve you. It takes strength to choose a new path.",
  "There are no guarantees, no promises of a happy ending. Life is about taking chances, facing the unknown, and learning along the way. No matter how hard things get, there's always a lesson hidden within the struggle. Find it, and you'll grow.",
  "Sometimes, the only way to find peace is to embrace chaos. When the world falls apart around you, when everything seems to go wrong, that's when you'll truly discover what you're made of. It's in the storm that we learn to stand tall.",
];

export const getRandomText = () => {
  return sampleText[Math.floor(Math.random() * sampleText.length)];
};

// This is to  be implemented in the future for difficulty levels
// export const generateTexts = (difficult = "medium", count = 10) => {
//   return sampleText;
// };
