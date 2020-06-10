export let loginAccounts = (account, keys, chain = 'Hive') => {
  const active_info = account.active
  const posting_info = account.posting
  const pub_memo = account.memo_key
  let finalKeys = {}
  let havinKeys = []
  Object.keys(keys).map(key => {
    let pub_unknown = keys[key].createPublic().toString();
    if (pub_unknown === pub_memo) {
      finalKeys['memo'] = { key: keys[key].toString(), pubkey: pub_memo }
      havinKeys.push('memo')
    } else if (getPubkeyWeight(pub_unknown, posting_info)) {
      finalKeys['posting'] = { key: keys[key].toString(), pubkey: pub_memo }
      havinKeys.push('posting')
    } else if (getPubkeyWeight(pub_unknown, active_info)) {
      finalKeys['active'] = { key: keys[key].toString(), pubkey: pub_memo }
      havinKeys.push('active')
    }
  })
  if (havinKeys.length === 0) throw 'No the keys could not be obtained with the information entered'
  return {
    username: account['name'],
    chain: chain,
    keys: finalKeys,
    havinKeys: havinKeys
  }
}

let getPubkeyWeight = (publicKey, perfilKey) => {
  for (let key in perfilKey.key_auths) {
    const pk = perfilKey.key_auths[key]
    const publicKeyFinal = pk['0']
    if (publicKey === publicKeyFinal) {
      return pk['1']
    }
  }
  return 0
}
