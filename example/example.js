const {
    YasumuSchemaLexer,
    YasumuSchemaScanner,
    YasumuSchemaParser,
    YasumuSchemaSpec,
} = require("../dist");

const content = `
Block1 {
    Hello: "Hello \\u1234"
    World: null
}

Block3 {
    import "dotenv";
    const start = () => {};
    start();
}

Block2 {}
`;

const start = () => {
    const lexer = new YasumuSchemaLexer(content);
    const scanner = new YasumuSchemaScanner(lexer);
    const parser = new YasumuSchemaParser(scanner);
    const parsed = parser.parse(YasumuSchemaSpec);
    console.log(JSON.stringify(parsed, null, 4));
};

start();
