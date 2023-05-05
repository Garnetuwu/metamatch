import { Realm } from "@realm/react";

export class HeroSchema extends Realm.Object {
  static schema = {
    name: "Hero",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      role: "string",
      image: "string",
      type: "string",
      strength: "string?",
      weakness: "string?",
      relationships: {
        type: "list",
        objectType: "HeroRelationship",
      },
    },
  };
}

export class HeroRelationshipSchema extends Realm.Object {
  static schema = {
    name: "HeroRelationship",
    embedded: true,
    properties: {
      _id: "objectId?",
      hero: "objectId?",
      score: { type: "int", optional: true },
      combo: { type: "int", optional: true },
      special: "bool?",
      counterComment: "string?",
      comboComment: "string?",
    },
  };
}

// export const Hero = {
//   name: "Hero",
//   properties: {
//     _id: "objectId",
//     __v: "int?",
//     image: "string",
//     name: "string",
//     relationships: {
//       type: "list",
//       objectType: "Relationship",
//     },
//     role: "string",
//     strength: "string?",
//     type: "string",
//     weakness: "string?",
//   },
//   primaryKey: "_id",
// };

// export const HeroRelationship = {
//   name: "Relationship",
//   properties: {
//     _id: "objectId",
//     __v: "int",
//     combo: "int",
//     comboComment: "string?",
//     counterComment: "string?",
//     hero: "objectId?",
//     score: "int",
//     special: "bool",
//   },
//   primaryKey: "_id",
// };

// export const Hero = {
//   name: "Hero",
//   properties: {
//     _id: "objectId",
//     name: "string",
//     role: "string",
//     image: "string",
//     type: "string",
//     strength: "string?",
//     weakness: "string?",
//     relationships: {
//       type: "list",
//       objectType: "HeroRelationship",
//     },
//   },
//   primaryKey: "_id",
// };

// export const HeroRelationship = {
//   name: "HeroRelationship",
//   properties: {
//     _id: "objectId",
//     hero: "objectId?",
//     score: "int",
//     combo: "int",
//     special: "bool",
//     counterComment: "string?",
//     comboComment: "string?",
//   },
//   primaryKey: "_id",
// };
