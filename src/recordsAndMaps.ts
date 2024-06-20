type User = Record<string, { age: number; name: string }>; //TS specific concept

const user: User = {
  user1: { age: 21, name: "Rajneesh" },
};

console.log(user);

const map = new Map(); //JS concept
const user1 = map.set("Rajneesh", { age: 21, name: "Rajneesh" });
console.log(user1);
console.log(user1.get("Rajneesh"));
