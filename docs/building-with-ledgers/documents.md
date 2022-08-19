---
sidebar_position: 2
title: Documents
description: Documents
---

# Documents

Documents are backed by [Micro Ledgers](/docs/micro-ledgers) so they're effectively an opt-log for edits to whichever type of document you want to create.

A JLINX Document link is the same as a Micro Ledger link. Example: 

`jlinx:u9qha-mQ2eMHZaxZOyEY-o0cXqCwTaR_zLZtfsUsfDAY`

to link to a specific version of a document you can append a `:{index}`. Example: 

`jlinx:u9qha-mQ2eMHZaxZOyEY-o0cXqCwTaR_zLZtfsUsfDAY:42`

The first entry into a document is the header

`jlinx:u9qha-mQ2eMHZaxZOyEY-o0cXqCwTaR_zLZtfsUsfDAY:0`


The value of a document is calculated using a [projection](/docs/building-with-ledgers/projections)


## Hosts

All documents are hosted by one Jlinx-node. All other nodes can replicate a 
read-only copy if they know the document id
