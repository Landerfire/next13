export type User = {
  id: string;
  email: string;
  password: string;
  name?: string;
  image?: string | null;
};

export const users: User[] = [
  { id: '0', email: 'admin@admin.com', password: 'admin', name: 'Admin', image: null },
  { id: '1', email: 'user@test.com', password: '12345', name: 'User', image: null },
  {
    id: '2',
    email: 'mrwrinkles@test.com',
    password: 'notacat123',
    name: 'Mr. Wrinkles Jr. The Second of his name, beloved son of The Mr. Wrincles The First',
    image: 'http://localhost:3000/mrWrinkles.jpg',
  },
];
