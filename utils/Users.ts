interface User {
  id: number;
  username: string;
  initial: string;
  color: string;
}

const Users: User[] = [
  { id: 1, username: "John", initial: "J", color: "bg-indigo-200" },
  { id: 2, username: "Alice", initial: "A", color: "bg-gray-200" },
  { id: 3, username: "Bob", initial: "B", color: "bg-indigo-200" },
  { id: 4, username: "Eva", initial: "E", color: "bg-pink-200" },
  { id: 5, username: "David", initial: "D", color: "bg-purple-200" },
  { id: 6, username: "Linda", initial: "L", color: "bg-indigo-200" },
  { id: 7, username: "Sarah", initial: "S", color: "bg-gray-200" },
  { id: 8, username: "Michael", initial: "M", color: "bg-indigo-200" },
];

export default Users;
