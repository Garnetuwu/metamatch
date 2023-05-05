import Colors from "./Colors";

export default transScoreToTier = (score, isCombo = true) => {
  let tier;
  let tierColor;

  if (isCombo) {
    if (score === 4) {
      tier = "S";
      tierColor = Colors.primaryYellow;
    }
    if (score === 3) {
      tier = "A";
      tierColor = Colors.primaryBlue;
    }
    if (score === 2) {
      tier = "B";
      tierColor = Colors.primaryOrange;
    }
    if (score === 1) {
      tier = "C";
      tierColor = Colors.PrimaryPurple;
    }
    return { tier, tierColor };
  }
  if ((score >= 96 && score <= 100) || (score <= -96 && score >= -100)) {
    tier = "S+";
    tierColor = Colors.primaryYellow;
  }
  if ((score >= 86 && score <= 95) || (score <= -86 && score >= -95)) {
    tier = "S";
    tierColor = Colors.primaryYellow;
  }
  if ((score >= 61) & (score <= 85) || (score <= -61) & (score >= -85)) {
    tier = "A";
    tierColor = Colors.primaryBlue;
  }
  if ((score >= 41) & (score <= 60) || (score <= -41) & (score >= -60)) {
    tier = "B";
    tierColor = Colors.primaryOrange;
  }
  if ((score >= 11) & (score <= 40) || (score <= -11) & (score >= -40)) {
    tier = "C";
    tierColor = Colors.PrimaryPurple;
  }
  if ((score > 0) & (score <= 10) || (score < 0) & (score >= -10)) {
    tier = "D";
    tierColor = Colors.primaryGrey;
  }
  return { tier, tierColor };
};
