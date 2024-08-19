const _YasumuSchemaTokenTypes = [
    "ILLEGAL",
    "EOF",
    "IDENTIFIER",
    "NUMBER",
    "STRING",
    "LEFT_CURLY_BRACKET", // {
    "RIGHT_CURLY_BRACKET", // }
    "COLON", // :
] as const;

export type YasumuSchemaTokenType = (typeof _YasumuSchemaTokenTypes)[number];

export const YasumuSchemaTokenTypes = _YasumuSchemaTokenTypes.reduce(
    (pv, cv) => {
        // @ts-expect-error
        pv[cv] = cv;
        return pv;
    },
    {} as { [K in YasumuSchemaTokenType]: K }
);

export interface YasumuSchemaTokenSpanPosition {
    line: number;
    column: number;
}

export interface YasumuSchemaTokenSpan {
    start: YasumuSchemaTokenSpanPosition;
    end: YasumuSchemaTokenSpanPosition;
}

export interface YasumuSchemaToken {
    type: YasumuSchemaTokenType;
    value: string;
    span: YasumuSchemaTokenSpan;
    error?: string;
}
