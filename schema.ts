import { DocumentNode } from "graphql";

const { DocumentNode } = require("graphql");
export const schema: DocumentNode = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "NotFound", loc: { start: 5, end: 13 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "message", loc: { start: 18, end: 25 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 27, end: 33 },
              },
              loc: { start: 27, end: 33 },
            },
            loc: { start: 27, end: 34 },
          },
          directives: [],
          loc: { start: 18, end: 34 },
        },
      ],
      loc: { start: 0, end: 36 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 43, end: 48 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "hello", loc: { start: 53, end: 58 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 60, end: 66 },
            },
            loc: { start: 60, end: 66 },
          },
          directives: [],
          loc: { start: 53, end: 66 },
        },
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "Fetch all Astronauts from the Apollo space program",
            block: true,
            loc: { start: 70, end: 126 },
          },
          name: {
            kind: "Name",
            value: "astronauts",
            loc: { start: 129, end: 139 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Astronaut",
                  loc: { start: 142, end: 151 },
                },
                loc: { start: 142, end: 151 },
              },
              loc: { start: 141, end: 152 },
            },
            loc: { start: 141, end: 153 },
          },
          directives: [],
          loc: { start: 70, end: 153 },
        },
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "Find an Astronaut by their ID\nMay return a `NotFound`",
            block: true,
            loc: { start: 157, end: 224 },
          },
          name: {
            kind: "Name",
            value: "astronaut",
            loc: { start: 227, end: 236 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 237, end: 239 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 241, end: 244 },
                },
                loc: { start: 241, end: 244 },
              },
              directives: [],
              loc: { start: 237, end: 244 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AstronautResult",
                loc: { start: 247, end: 262 },
              },
              loc: { start: 247, end: 262 },
            },
            loc: { start: 247, end: 263 },
          },
          directives: [],
          loc: { start: 157, end: 263 },
        },
      ],
      loc: { start: 38, end: 265 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "AstronautResult",
        loc: { start: 273, end: 288 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Astronaut",
            loc: { start: 291, end: 300 },
          },
          loc: { start: 291, end: 300 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "NotFound",
            loc: { start: 303, end: 311 },
          },
          loc: { start: 303, end: 311 },
        },
      ],
      loc: { start: 267, end: 311 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Astronaut", loc: { start: 318, end: 327 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "ID is an auto-incrementing value from data store",
            block: true,
            loc: { start: 332, end: 386 },
          },
          name: { kind: "Name", value: "id", loc: { start: 389, end: 391 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 393, end: 395 },
              },
              loc: { start: 393, end: 395 },
            },
            loc: { start: 393, end: 396 },
          },
          directives: [],
          loc: { start: 332, end: 396 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 399, end: 408 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 410, end: 416 },
              },
              loc: { start: 410, end: 416 },
            },
            loc: { start: 410, end: 417 },
          },
          directives: [],
          loc: { start: 399, end: 417 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 420, end: 428 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 430, end: 436 },
              },
              loc: { start: 430, end: 436 },
            },
            loc: { start: 430, end: 437 },
          },
          directives: [],
          loc: { start: 420, end: 437 },
        },
      ],
      loc: { start: 313, end: 439 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 448, end: 456 } },
      directives: [],
      loc: { start: 441, end: 456 },
    },
  ],
  loc: { start: 0, end: 457 },
};
