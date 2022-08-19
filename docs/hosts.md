---
sidebar_position: 3
title: Hosts
description: Documentation for JLINX Hosts
---

# JLINX Hosts

Participants in the JLINX network are called **hosts**. Hosts are always-on servers that exchange Micro-Ledgers over a Kademlia based DHT.

We call them `hosts` and not `nodes` because hosts own the micro-ledgers they host. This is because a private key is required to update a micro ledger and private keys should never moved.




## Responsibilities

A JLINX host hosts micro-ledgers (documents, event streams, etc) on the JLINX peer-to-peer network

- connects to the peer-to-peer network
- sparse replicates ledger events
- verifies transport signatures before passing to client
- reads blocks of microledgers and verifies them





## Implementations

### Javascript

https://github.com/jlinclabs/jlinx-host
