const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@example.com',
  });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface Item {
  productId: number;
  quantity: number;
}

interface History {
  orderId: number;
  orderDate: Date;
  items: Item[];
  totalAmount: number;
}

interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address: Address;
  phoneNumber: string;
  orderHistory: History[];
}

interface ApiService {
  getUsers: () => Promise<User[]>;
}

// To Get The user Type Even If we have it above but Only for practice Typescript we can use this
// type Users = User[]

type Users = Awaited<ReturnType<ApiService['getUsers']>>;
