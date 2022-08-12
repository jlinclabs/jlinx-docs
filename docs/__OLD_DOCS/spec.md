---
sidebar_position: 1
---

# Spec


## Layer 1

single author ledgers

can use any reliable transport layer

## Layer 2

identity, rights, delegated capabilities

maybe we can use https://trustgraph.net/ here

## layer 3


what if we break the jlinx product apart from hyper-ledgers


we make a hyper-ledger system that anyone can use which is just a 
shared open hyperswarm. its the distributed key value store of 
ledgers

then we build jlinx on top of that. its a centrailized domain that
has a set of users and 



if we could only get peer-to-peer connections from your browser and
mobile device. we could build a truely serverless firebase-like sass
serverless-server-as-a-serverviceless-service



if we could allow any client-side browser app to talk to a new network
of data and services, it could be amazing. 

you would have to store keys in the browser. keys would have to be less 
important. like you could make an identity with keys in your browser
but then also provide some secret that could be used later to superseed 
that identity and move ledgers?


so browser clients connect to a swarm in-browser and that lets them 
query for ledgers by id and send messages to ???(host-names?).


hyper-ledgers: zero-concensus layer 1 network

layer 0: internet tcp/ip and below
layer 1: hyper-ledgers
layer 2: tools: identity, rights, delegated capabilities
layer 3: apps (profit)


nodes are hosted by whoever wants to make money selling access to the network
jlinx puts a new testnet and production servers up to bootstrap




# Layer 1

each document can be optionally signed and or encrypted

the publicly viewable json ledgers, or maybe all, can be
- replaced with a while new version, with a fail message
- we could always check for a tail message pointing to a replacement
- a tail message could also point to the next file
- we could roll event logs with header and footer messages
  - this could allow for scanning of all events by getting the current log and 
    scanning back as far as you want by walking back using the references in 
    the head and tail blocks
- supersceeding a document with a tail message could make versioning a lot easier
  - each app is responsible for upgrading to new jlinx and migrating up all docs
  - you even get to keep your original url/id :D
