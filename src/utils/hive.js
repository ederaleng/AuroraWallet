import { PrivateKey } from '@hiveio/dhive'

export const vestToHive = async (vestingShares, totalVestingShares, totalVestingFundSteem) =>
(
  parseFloat(totalVestingFundSteem) *
  (parseFloat(vestingShares) / parseFloat(totalVestingShares))
).toFixed(0);

export const getWifAccount = (username, password) => {
  try {
    return {
      activeKey: PrivateKey.from(password),
      memoKey: PrivateKey.from(password),
      postingKey: PrivateKey.from(password),
    };
  } catch (e) {
    return {
      active: PrivateKey.fromLogin(username, password, 'active'),
      memo: PrivateKey.fromLogin(username, password, 'memo'),
      posting: PrivateKey.fromLogin(username, password, 'posting'),
    };
  }

}
