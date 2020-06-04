import { Client } from '@hiveio/dhive'

const nodes = [
    "https://api.hive.blog/",
    "https://anyx.io",
    "https://api.openhive.network/",
    "https://hive.roelandp.nl/",
    "https://api.followbtcnews.com/",
    "https://rpc.ausbit.dev/",
    "https://hived.privex.io/"
];

export let client = new Client(nodes);

export const getDynamicGlobalProperties = () => client.database.getDynamicGlobalProperties();

export const getRewardFund = () => client.database.call('get_reward_fund', ['post']);

export const getFeedHistory = async () => {
  try {
    const feedHistory = await client.database.call('get_feed_history');
    return feedHistory;
  } catch (error) {
    return error;
  }
};

export const getAccount = async (user) => {
  try {
    const account = client.database.getAccounts([user]);
    return account
  } catch (error) {
    return error
  }
};


