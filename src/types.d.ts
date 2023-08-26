type Links = {
  id: number;
  url: string;
  text: string;
};

interface UserState {
  theme: string;
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
