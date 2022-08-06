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
  // "event" (required)
  "event": "opened document",
  // "document type" (required)
  "document type": "didDocument",
  // "cryptographic signing key" (required)
  "cryptographic signing key": "unyxMCwpF0QQqF5M7KvIY8FTWJGQCBTaQF9cFnUgc0se",
  // "hyperswarm id" (optional) to get the latest more agressively 
  "hyperswarm id": "<publicKey:hex>", 
  // "host url" (optional) to get the latest more agressively 
  "host url": "https://testnet.jlinx.io/jlinx:uF5nyxMCwpF0QQqM7KvIY8FTWF9cFnUgc0seJGQCBTaQ",
  // required
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
