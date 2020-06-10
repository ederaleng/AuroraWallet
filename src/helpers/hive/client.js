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

export const getDynamicGlobalProperties = async () => await client.database.getDynamicGlobalProperties();

export const getAccount = async (user) => {
  try {
    if(typeof user !== 'string') return undefined
    const account = await client.database.getAccounts([user]);
    return account[0]
  } catch (error) {
    return error
  }
};


