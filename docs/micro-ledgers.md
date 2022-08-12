---
sidebar_position: 2
title: Micro Ledgers
description: Documentation for JLINX Micro Ledgers
---

# Micro Ledgers

At their core they are:

- A ED25519 keypair
- Append only
- Each block is signed by the keypair
- The public key is the id
- Shared over BitTorrent like DHT

Some additional features:

- Sparse replication. Only download the data you are interested in.
- Realtime. Get the latest updates to the log fast and securely.
- Performant. Uses a simple flat file structure to maximize I/O performance.
- Secure. Uses signed merkle trees to verify log integrity in real time.
- Browser support. Simply pick a storage provider (like random-access-memory) that works in the browser
