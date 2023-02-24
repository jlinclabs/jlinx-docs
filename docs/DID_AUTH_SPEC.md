# The DID Web Authorization Framework

## Abstract

The DID Web Authorization Framework expands upon the [did:web spec][did-web-spec] 
enabling cross-domain authentication and the ability to grant and revokable 
access to protected HTTP resources to other identities.

[[table of contents here]]


## Introduction

As of 2023 authentication on the web is dominated by OAuth2. One-click-login 
buttons are limited to a small set of mega corporations. This is not open 
enough. A truly open authentication framework would allow you to host your 
identifiers and credentials anywhere you like. And ideally move them at will. 

What's wrong with OAuth 2.0? In short [OAuth 2.0][oauth-2-spec] 
was never designed to be a decentralized authentication framework. Oauth 2.0 
was designed to enable a third-party application to obtain limited access to 
an HTTP service on behalf of a user. It later reached massive adoption when 
it was used to simplify the signup and login process with one-click-login.

The major limitation with using OAuth2 as a basis for decentralized 
authentication is [The NASCAR Problem](https://indieweb.org/NASCAR_problem). 
There is only so much room for "sign in with X" brands. 

The DID Web Authorization Framework addresses these limitations by introducing 
decentralized cooperative protocols that allow any domain to both host and 
consume cross-domain identifiers and credentials.

Instead of authenticating in with an email and password, or with a major 
centralized brand, users can authenticate using any valid identity hosted 
at any domain. 

This specification is designed for use with HTTP ([RFC2616][http-spec]). The 
use of The DID Web Authorization Framework over any protocol other than HTTP 
is out of scope.



### Roles

- Identifier host
  - An http domain hosting [did:web][did-web-spec] [identifiers][did-spec]

- Identifier
   - A unique resource representing an individual human or organization
   - Can be granted revocable rights via verifiable credentials

- Client
  - An application making protected resource requests on behalf of an 
    individual human or organization using one unique identifier and one or 
    more credentials.


-----

### Protocol Flow



```
Alice visits app1.com
Alice registers for new idenitity alice@app1.com
Alice visits app2.com
Alice authenticates with alice@app1.com
app2 requests HTTP GET https://app1.com/.well-known/did.json (cachable)
app2 requests HTTP GET https://app1.com/dids/alice/did.json (latest)
(we could do a one-time-code here)
Alice is redirected to https://app1 

```


## Email Identifiers

`did:web` DIDs can be formatted as an email address 
`${base64_encoded_public_key}@${origin}`
or using a username alias `${username}@${origin}` (E.G. jared@jlinc.com) 

Formats: 

- `${base64_encoded_public_key}@${origin}`
- `${username}@${origin}`


## Authentication Methods

- messaged a one-time-code
- messaged a magic link
- http redirect dance



### TLS 

Transport Layer Security is considered essential at all times. Using this 
protocol over insecure connections is not recommended.


### HTTP Redirections

This specification makes extensive use of HTTP redirections, in which the 
client or the authorization server directs the resource owner's user-agent 
to another destination.  While the examples in this specification show the 
use of the HTTP 302 status code, any other method available via the 
user-agent to accomplish this redirection is allowed and is considered to be
an implementation detail.



### Notational Conventions

   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   specification are to be interpreted as described in [RFC2119].

   This specification uses the Augmented Backus-Naur Form (ABNF)
   notation of [RFC5234].  Additionally, the rule URI-reference is
   included from "Uniform Resource Identifier (URI): Generic Syntax"
   [RFC3986].

   Certain security-related terms are to be understood in the sense
   defined in [RFC4949].  These terms include, but are not limited to,
   "attack", "authentication", "authorization", "certificate",
   "confidentiality", "credential", "encryption", "identity", "sign",
   "signature", "trust", "validate", and "verify".

   Unless otherwise noted, all the protocol parameter names and values
   are case sensitive.


### Client Registration

Unlike OAuth there is not client registration. Any http host that complies 
with this specification should interoperate with any other. 



## Protocol Endpoints

Hosting DIDs request the host to respond to the following endpoints:

- host did document endpoint
- identity did document endpoint
- authentication endpoint

Any HTTP domain can host [did:web][did-web-spec] [identifiers][did-spec] by:


### Host DID Document Endpoint

Identifier hosts must respond to 

GET `https://${origin}/.well-known/did.json` 

with a valid DID Document.

### Identity DID Document Endpoint

Identifier hosts must respond to 

GET `https://${origin}/dids/${id}/did.json` 

with a valid DID Document. 

### Authentication Endpoint

Optional endpoint to support cross-domain authentication.

POST `https://${origin}/dids/${id}/auth`




## Identifiers

## Credentials

### Granting a Credential

### Verifying a Credential

Credentials are revokable so verifying applications should request updated 
copies before granting access. 



--------

enabling cross-domain authentication, and limited access to HTTP services on
behalf of for

a resource owner by generating verifiable credentials granting revocable access
   between the resource owner and the 
   third-party application to obtain access on its own behalf. 
  


http domains to host distributed identifiers that can be used on or by applications at domains
The DID Web Authorization Framework enables http domains to host distributed identifiers that can be used on or by applications at domains

any other domain to gain limited access to an HTTP service


third-party application to obtain

any http domain to


https://w3c-ccg.github.io/did-method-web/




## Federated Authentication





[http-spec]: https://www.rfc-editor.org/rfc/rfc2616
[did-spec]: https://www.w3.org/TR/did-core/
[did-web-spec]: https://w3c-ccg.github.io/did-method-web/
[oauth-2-spec]: https://www.rfc-editor.org/rfc/rfc6749#section-1.1