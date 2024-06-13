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

export interface User {
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
