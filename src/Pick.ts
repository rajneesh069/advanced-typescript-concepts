type User = {
  name: string;
  email: string;
  password: string;
};

const user: User = {
  name: "Rajneesh",
  email: "rajneesh@gmail.com",
  password: "12345",
};

type UserUpdate = Pick<User, "name" | "email">; //lets you pick properties to create a new type from existing type

const updateUser: UserUpdate = {
  name: "Rajneesh",
  email: "rajneesh@gmail.com",
};
