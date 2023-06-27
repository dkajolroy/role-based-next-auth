interface DataUser {
  id: string;
  name: string;
  email: string;
  username: string;
  image: string;
  role: "ADMIN" | "USER" | "MANAGER";
  password: string;
}
