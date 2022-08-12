---
sidebar_position: 2
title: Storing Keys
description: Storing Keys - JLINX Tutorial
---

# Tutorial

## Storing Keys


```bash
npm install jlinx-client jlinx-vault
```

```js
import JlinxClient from '@jlinx/client'
import JlinxVault from '@jlinx/vault'

const jlinx = new JlinxClient({
  hostUrl: 'https://testnet1.jlinx.io/',
  vault
})

export async function createVaultForUser(user){
  const vaultKey = JlinxVault.generateKey()
  /* store vaultKey somewhere assoiciated to this user */
  const vault = JlinxVault({
    path: Path.join(process.env.JLINX_VAULTS_PATH, user.id),
    key: vaultKey
  })
  return vault
}

export async function getVaultForUser(user){
  const vaultKey = /* get this from somewhere assoiciated to this user */
  const vault = JlinxVault({
    path: Path.join(process.env.JLINX_VAULTS_PATH, user.id),
    key: vaultKey
  })
  return vault
}

export function getIdentifier({ id, currentUser }){


}
```
