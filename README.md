### This repo contains the advanced concepts of Typescript which could come in handy/used in big codebases.

1. Exclude : Helps exclude one or more properties from interface/type, eliminating the need to create a new type/interface.

2. Pick : Helps pick desired properties from a interface/type, allowing us to reuse the same type/interface again and again.

3. Records : Make key-value pair assignments concise and easy. We can use interfaces/types for that purpose as well, but records provide concise and clean syntax. Provides a way to create a type with a fixed set of properties. Similar to defining an object with fixed keys using an interface or type, but specifically useful for mapping known keys to specific value types.

```ts
type UserRoles = "admin" | "user" | "guest";
type RolePermissions = Record<UserRoles, boolean>;

const permissions: RolePermissions = {
  admin: true,
  user: false,
  guest: false,
};
```

4. Maps : JS concept, helps create maps in TS much similar to C++ maps by using key-value pair concept. A JavaScript object that allows for more flexible key types and ordered entries. Useful for collections where you need keys that are not strings or when you need to maintain insertion order.

```ts
const map = new Map<string, number>();
map.set("one", 1);
map.set("two", 2);
```

5. Zod Type Inference : Helps re-use the zod schema as a type in TS in frontends and backends both, eliminating the need to re-create a new type/interface based on the same schema.

6. Interfaces : Can be extended (merged) and implemented by classes. Better for defining object shapes and ensuring certain structure in class implementations.

7. Types : More versatile, can create unions and intersections, and can alias primitive types and other complex types. Cannot be re-opened (extended) like interfaces.

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice",
  age: 25,
};
```
