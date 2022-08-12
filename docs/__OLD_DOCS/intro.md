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


the jlinx-host can be run as Daemon or a service you can charge for. 
its a general data strore & cache, event bus and api
it costs money to run and you can charge for running your own api on top of these
cloud flare should buy us lol
we should run free ones until a partner's traffic becomes expensive and we charge
or charge to help then run their own


the jlinx host could also offer an array of key recovery options

## JLINX peer-to-peer networks

JLINX Node's can share Private Microledgers over a both public and private peer-to-peer networks.

## First Implementation

Our first implementation of JLINX is in [JavaScript and NodeJS](./nodejs)







--- old notes ---

# Jlinx

Self Sovereign Identity and Data 

## Urls

parts: `jlinx:#{publicKey}`

example: `jlinx:XR1uqOPeizww9JySKtvk9vVsvTpyg-v4OSmi5P6zDg0`


### Examples

```
did = 'did:jlinx:wViFSkwmscps0EtnJ2VtUxvVSlt-s_lUFC1bh2byHbU'
didAsJlinxUrl = 'jlinx:wViFSkwmscps0EtnJ2VtUxvVSlt-s_lUFC1bh2byHbU'
```

## Documents

jlinx urls can point to
- event stream
- key value store
- hyperdrive (full versioned filesystem)
  - jlinx:nlyBJZoG1ZUx4QX9pWSIYqfx-NNdkcC3A_50J0E7J4g#images/frog.jpeg


## Bi-Directional Communication

mvp: I give you an id for an event stream I control and you give me one back

some signing process should be used to ensure actors are sharing a stream they author

basic membership works this way


### Facts

- you can make more then one did from the same pair of signing keys
- the did is locked to the hypercore, not your signing keys








## TODO

- implement support for did versions
  - RE: did document metadata
- get added to universal resolvers
  - https://dev.uniresolver.io/
  - https://github.com/decentralized-identity/universal-resolver/blob/main/docs/driver-development.md
- look into Lamport Clocks and Vector Clocks

## support for did versions

did:xxx:12345?version=16


