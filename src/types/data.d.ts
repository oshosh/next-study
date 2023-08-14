// 상품 카테고리
export type Category = 'shoes' | 'clothes' | 'book';
// 상품 상태
export type Condition = 'new' | 'used';

// 사용자
export interface User {
  id: number;
  username: string;
  displayName: string;
  email: string;
  profileImageUrl: string;
  description: string;
}

// 상품
export interface Product {
  id: number;
  category: Category;
  title: string;
  description: string;
  imageUrl: string;
  blurDataUrl: string;
  price: number;
  condition: Condition;
  owner: User;
}

// API 컨텍스트
export interface ApiContext {
  apiRootUrl: string;
}
