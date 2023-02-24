# The DID Web Authorization Framework

## Abstract

The DID Web Authorization Framework expands upon the [did:web spec][did-web-spec] 
enabling cross-domain authentication and limited access to HTTP services on 
behalf. DIDs can issue verifiable credentials to grant revocable access to 
third-party applications.

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
decentralized cooperative protocols that allow any domain to both host and use 
identifiers and credentials cross-domain.

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



Using the familiar format of email address `${id}@${origin}` 
(E.G. jared@jlinc.com) users can login











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