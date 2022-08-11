# Micro-Ledgers




## Events 

- all events must be signed
- they're json canonicalized and then appended with "signature"

```json
{
  event: "event exampled",
  something: "else",
  "signature": "…",
}
```

### opened document

- must be the fist event in a micro-ledger
- considered the header

```json
{
  "Event": "opened document",
  "Document Type": "didDocument",
  "Cryptographic Signing Key": "unyxMCwpF0QQqF5M7KvIY8FTWJGQCBTaQF9cFnUgc0se",
  "Hyperswarm ID": "<publicKey:hex>", 
  "Host URL": "https://testnet.jlinx.io/jlinx:uF5nyxMCwpF0QQqM7KvIY8FTWF9cFnUgc0seJGQCBTaQ",
  "signature": "…",
}
```

### closed document

- must be the last event in a micro-ledger
- all events past this event should be ignored

```json
{
  "event": "closed document",
  "signature": "…",
}
```

### moved document

- must be the last event in a micro-ledger
- only oporunity to change the signing key
- all events past this event should be ignored


#### Example

```json
{
  "event": "moved document",
  "new id": "jlinx:uM7KxMCwpF0QQqnUgc0seJGQCBTaQvIY8FTWF9cFF5ny",
  "new cryptographic signing key": "uQqF5M7KvIY8FTWJGQCBTaQF9cFnUgc0senyxMCwpF0Q",
  "signature": "…",
}
```

#### Schema

```js
{
  type: 'object',
  properties: {
    "event": { 
      type: 'string',
      value: 'moved document'
    },
    "new id": { type: 'string' },
    "new cryptographic signing key": { type: 'string' },
  },
  required: ['event', 'new id', 'new cryptographic signing key'],
  additionalProperties: false,
}
```

### became document 

- must be the fist event in a micro-ledger
- otherside of moved
- always keep orginal id)



- never change a signing key mid-stream
  - declaired signing key (AKA supersede)
    - this would require the host look for these events and keep track of changes to the signing key 
    - yuck but doable
    - wait isnt this ownerDid now? 













### Merging streams

- everything is a MicroLedger class or subclass
- it has a main stream which is its id
- if its moved we add another 
- it can add other MicroLedgers

#### Ledger class

- only deal with one hypercore (unless its been moved)
  - WE NEED TO ALWAYS DEAL WITH MORE THAN ONE CORE SO WE CAN MOVE CORES

- apply handlers serialization and signing
- define events?

`Ledger(Document || RemoteDocument)`


#### MultiLedger class

- starts with one core as a Leger
- tracks and reads from multiple input Ledgers
- has one localInput Ledger (where we write to)

- we can know which ledger is yours by which is writable
  - IF BIG CHANGE: we'd have to give each app user their own vault

```js

const chatRoom = jlinx.get(chatRoomId)
chatRoom instanceof MicroLedger // true

```

