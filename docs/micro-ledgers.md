---
sidebar_position: 2
title: Micro Ledgers
description: Documentation for JLINX Micro Ledgers
---

# Micro Ledgers

…are the core primative to the JLINX ecosystem. Everything boils down to events, written to ledgers by their one and only owner. 


Micro Ledgers are append only logs whos events are signed by the host and the owner. 

Micro Ledgers are:

- A host keypair (ED25519)
- An owner keypair (ED25519)
- Append only
- Each block is signed by both the keypairs
- The host public key is the id
- Shared over BitTorrent like DHT

Some additional features:

- Sparse replication. Only download the data you are interested in.
- Realtime. Get the latest updates to the ledger fast and securely.
- Performant. Uses a simple flat file structure to maximize I/O performance.
- Secure. Uses signed merkle trees to verify log integrity in real time.
- Browser support. Simply pick a storage provider (like random-access-memory) that works in the browser


## Privacy

Unlike blockchains Micro Ledgers can be "forgotten".

Micro Ledgers only live as long as somebody is interested in that data.

Ledgers can hold public, published data that lives as long as somebody cares about it.

Ledgers are only visible to parties with the IDs (public keys) of them.


## Multiple Key Pairs

Micro Ledgers have two keypairs `Host Keys` and `Owner Keys`. The host keys are heald by the host and the owner keys are heald by the owner.

The host keys are used to validate each entry into a micro ledger at the transport level.

The owner keys are used to validate each event into a micro ledger at the application level.

The Host is the only process that can append to the micro ledgers it hosts. The Client is the only process that can sign a valid event. This means it require two keys across two machines to work together to append a micro-ledger.

## Moving around

Microledgers can only be written to if you have the private key so technically you could move your private keys from one device to another and update your micro ledgers. However since micro ledgers are append only and can be served from any host, it would be a failure case if two hosts shared valid but conflicting updates

So keys cannot move across devices and should be strictly semophored if multi-process or multi-threaded environments.

This is why we have "hosts" instead of "nodes". 
