const { parse } = require('../dist');

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
  const parsed = parse(script);
  console.log(JSON.stringify(parsed, null, 4));
};

start();
