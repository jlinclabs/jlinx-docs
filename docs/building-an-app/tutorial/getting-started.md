---
sidebar_position: 1
title: Getting Started
description: JLINX Tutorial
---

# Tutorial

## Getting Started


```bash
npm install jlinx-client jlinx-vault
```

```js
import JlinxClient from '@jlinx/client'

const jlinx = new JlinxClient({
  hostUrl: 'https://testnet1.jlinx.io/',
})

(async () => {
  const kp1 = jlinx.createOwnerKeyPair()
  const ml1 = await jlinx.create({
    ownerSigningKeys: kp1
    purpose: 'learning jlinx',
  })
  ml1.id // 'jlinx:ufVFkjvhOxnMyvwJtrEpiQTdBkhGvAx_QkbELE1Oxvhg'
  ml1.length // 1
  ml1.httpUri // 'https://testnet1.jlinx.io/jlinx:ufVFkjvhOxnMyvwJtrEpiQTdBkhGvAx_QkbELE1Oxvhg'
  await ml1.events() // []
  await ml1.appendEvent('DidTutorial', {
    example: 'payload',
  })
  ml1.length // 2
  await ml1.events() // [ {…} ]
}).catch(error => {
  process.error(error)
  process.exit(1)
})
```
