export const vestToHive = async (vestingShares, totalVestingShares, totalVestingFundSteem) =>
(
  parseFloat(totalVestingFundSteem) *
  (parseFloat(vestingShares) / parseFloat(totalVestingShares))
).toFixed(0);

