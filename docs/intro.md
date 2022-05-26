---
sidebar_position: 1
---

# Introduction

JLINX is a giant virtual key/value store of block chains

JLINX is a truly distributed set of peer-to-peer protocols enabling 
self sovereign identity and data.

Instead of a single ledger with group consensus JLINX uses collections
of single-author micro ledgers braided together.


You can think of JLINX is a distributed key value store where:
- each key is a ed25519 public key
- each value is a ledger
- each ledger is a single author block chain
- each block in that chain is signed by the same ed25519 keypair
- anyone can access any ledger, if they know its id (public key)
- anyone can verify the signatures within each ledger
- each block in a ledger can be encrypted in a variety of ways if needed
- each ledger is hosted as a specific jlinx-host web2 url (CENTRALIZATION!)
  - this means hypercore keys are seperate from author/owner keys
  - this introduces so many points of failure! 
  - if you could use any server to write how would you prevent forks?

Using this single building block we can build a lot of useful tools.

First and foremost we need a concept of [identity](./Identity)

## Ledger

Every document on jlinx is stored in ledgers. 

Ledgers are a block chain.

All of JLINX is built on top of 

A Private Microledger is an append only chain of signed blocks identified by a ed25519 public key.

You can share you Private Microledgers over the JLINX peer-to-peer network.
can be shared simply by giving someone the id.

## Jlinx Host

A jlinx host is an always up peer in the peer-to-peer network.




## JLINX peer-to-peer networks

JLINX Node's can share Private Microledgers over a both public and private peer-to-peer networks.

## First Implementation

Our first implementation of JLINX is in [JavaScript and NodeJS](./nodejs)

