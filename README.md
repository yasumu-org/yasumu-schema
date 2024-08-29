# Yasumu Schema Language

Yasumu Schema Language Parser

## Example

```ts
import { parseYasumuSchemaScript } from '@yasumu/schema'

const code = `
Metadata {
    name: "Get request"
    method: "GET"
}

Request {
    url: "https://example.com"
    body: null
}

Test {
    console.log("tested");
}
`;

const parsed = parseYasumuSchemaScript(script);
console.log(JSON.stringify(parsed, null, 4));
```
