export default transformTypeToIcon = (type) => {
  if (type === "dive") return "hand-scissors";
  if (type === "brawl") return "hand-rock";
  if (type === "spam") return "hand-paper";
  return "exchange-alt";
};
