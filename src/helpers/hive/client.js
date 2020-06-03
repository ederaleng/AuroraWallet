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

export  let client = new Client(nodes);


