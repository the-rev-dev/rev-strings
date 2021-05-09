# Overview

The `rev-strings` package is a library to facilitate string composition and interpretation. 

## Capabilities

- includes common regex patterns (phone, zip, etc)
- quickly compose query strings on the fly

## Table of Contents
- [Overview](#overview)
  - [Capabilities](#capabilities)
  - [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Install](#install)
- [Usage Example](#usage-example)

# Getting Started

## Install
```
$ npm install rev-strings
```

# Usage Example

Suppose we have a UI that needs to append an object as a query string.

```typescript
import { rStrings } from 'rev-strings';

const query = { userId: 12 };
const result = rStrings.toQueryString(query);

// result = "?userId=12"
```

