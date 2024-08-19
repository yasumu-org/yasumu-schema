const {
    YasumuSchemaLexer,
    YasumuSchemaScanner,
    YasumuSchemaTokenTypes,
} = require("../dist");

const content = `
Kek {
    Bro: "Hello \\u1234"
}
`;

const start = () => {
    const lexer = new YasumuSchemaLexer(content);
    const scanner = new YasumuSchemaScanner(lexer);
    while (true) {
        const token = scanner.readToken();
        console.log(JSON.stringify(token));
        if (token.type === YasumuSchemaTokenTypes.EOF) {
            break;
        }
    }
};

start();
