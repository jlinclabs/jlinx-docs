---
sidebar_position: 2
title: Identity
description: Identity
---

# Identity

An Identity is a [Micro Ledger](/docs/micro-ledgers) where the owner keys are used as a [DID](https://www.w3.org/TR/did-core/).

A JLINX Micro Ledger with the ID of 

`jlinx:ufVFkjvhOxnMyvwJtrEpiQTdBkhGvAx_QkbELE1Oxvhg`

would have the DID of

`did:jlinx:ufVFkjvhOxnMyvwJtrEpiQTdBkhGvAx_QkbELE1Oxvhg`


## Usage

```js
import JlinxClient from 'jlinx-client'

const jlinx = new JlinxClient({ … })
const identifier = await jlinx.identifiers.create()

console.log(identifier.id) // jlinx:ufVFkjvhOxnMyvwJtrEpiQTdBkhGvAx_QkbELE1Oxvhg
console.log(identifier.did) // did:jlinx:ufVFkjvhOxnMyvwJtrEpiQTdBkhGvAx_QkbELE1Oxvhg

// https://www.w3.org/TR/did-core/#dfn-service
await identifier.addServer({ 
  id: '#profile',
  type: 'JlinxProfile',
  serviceEndpoint: 'jlinx:ukhGvAx_VFkjvhOxnMyvwJtrEpiQTdB1OxvhgQkbELE',
})
```
