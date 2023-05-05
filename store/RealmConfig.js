import { createRealmContext } from "@realm/react";
import { HeroRelationshipSchema, HeroSchema } from "../Models/Hero";

export default RealmContext = createRealmContext({
  schema: [HeroSchema, HeroRelationshipSchema],
});
