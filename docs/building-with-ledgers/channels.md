---
sidebar_position: 2
title: Channels
description: Channels
---

# Channels

Channels use two or more [Micro Ledgers](/docs/micro-ledgers) to communicate. 

Because [Micro Ledgers](/docs/micro-ledgers) are single-author we can only send data out by appending new events to the ledger. So we need at lease one stream to emit on and at least one other stream to listen to.

## Pairwise Channel

I make a new micro ledger and share the address with you, you also make a new micro ledger and share the address with me. Now both parties can subscribe to and react to events from the other and view versa.

## Multiparty Channels




```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```


import { Mermaid } from 'mdx-mermaid/Mermaid';
<Mermaid chart={`
	graph LR;
		A-->B;
		B-->C;
		B-->D[plop lanflz eknlzeknfz];
`}/>
