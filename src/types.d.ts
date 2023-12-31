type Links = {
  id: number;
  url: string;
  text: string;
};
type Action = Object;
type AsyncAction = any;
type State = any;

type Dispatch = (a: Action | AsyncAction) => any;

type Store = {
  dispatch: Dispatch;
  getState: () => State;
};

interface User {
  username: string;
}
interface UserState {
  user: User | null;
  theme: string;
}

interface CartState {
  cartItems: CartProduct[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
}

interface Products {
  products: ProductsData[];
}
interface ProductsData {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  title: string;
  company: string;
  description: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  category: string;
  image: string;
  price: string;
  shipping: boolean;
  colors: string[];
}

interface CartProduct {
  amount: number;
  cartID: string;
  company: string;
  image: string;
  price: string;
  productColor: string;
  productID: number;
  title: string;
}

interface CartProducts {
  product: CartProduct;
}
