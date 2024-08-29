const { parseYasumuSchemaScript } = require("../dist");

const script = `
Metadata {
    name: "Test"
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

const start = () => {
    const parsed = parseYasumuSchemaScript(script);
    console.log(JSON.stringify(parsed, null, 4));
};

start();
