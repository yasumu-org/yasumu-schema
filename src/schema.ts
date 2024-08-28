import { YasumuSchemaParasableScript } from "./parsable";

export const YasumuSchemaSpec: YasumuSchemaParasableScript = {
    Block1: {
        type: "object",
        schema: {
            Hello: {
                schema: {
                    type: "string",
                },
                required: true,
            },
            World: {
                schema: {
                    type: "number",
                },
                required: false,
            },
        },
        required: true,
    },
    Block2: {
        type: "object",
        schema: {
            Test: {
                schema: {
                    type: "boolean",
                },
                required: false,
            },
        },
        required: true,
    },
    Block3: {
        type: "code",
        required: false,
    },
};
