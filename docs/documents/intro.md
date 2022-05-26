---
sidebar_position: 1
title: Intro
---
# Intro

Jlinx Documents


All documents are hosted by one Jlinx-node. All other nodes can replicate a 
read-only copy if they know the document id


# Networking


## Node

A Jlinx Nodes host documents on the jlinx peer-to-peer network

- connects to the peer-to-peer network
- replicates documents
- resolve documents
- hosts documents
  - hosting === holds document write keys
- reads blocks of microledgers and verifies them

## Client 

A JLINX Client talks to one or more Jlinx Nodes. This is the primary
API interface for using jlinx.


stores signing keypairs




user tells client to do something
client signs a batch of appends to a document and sends it to the hosting node



## Creating A Document

```
|                      client                     |                  node                   |
| ask a node to host a document                   |
```
