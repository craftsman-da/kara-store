// Product Type Definition
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  description?: string;
}

// Category Type Definition
export interface Category {
  id: number;
  name: string;
  price: number;
  image: string;
  productCount?: number;
}

// Top Selling Products - Featured on homepage
export const topSellingProducts: Product[] = [
  {
    id: 1,
    name: 'Diesel Generator 250 Kva',
    price: 1000000,
    image: '/images/gen1.png',
    category: 'Power Supplies',
    badge: 'Hot Sell',
    description:
      'High-performance diesel generator suitable for industrial use',
  },
  {
    id: 2,
    name: 'Diesel Generator 500 Kva',
    price: 540000,
    image: '/images/gen2.png',
    category: 'Power Supplies',
    badge: 'Hot Sell',
    description: 'Heavy-duty generator for large-scale operations',
  },
  {
    id: 3,
    name: 'Diesel Generator 150 kva',
    price: 125000,
    image: '/images/gen3.png',
    category: 'Power Supplies',
    badge: 'Hot Sell',
    description: 'Compact and efficient power solution',
  },
];

// Product Categories
export const categories: Category[] = [
  {
    id: 1,
    name: 'Phones',
    price: 95000,
    image: '/images/phones.png',
    productCount: 234,
  },
  {
    id: 2,
    name: 'Generators',
    price: 8500000,
    image: '/images/gen1.png',
    productCount: 45,
  },
  {
    id: 3,
    name: 'Cameras',
    price: 125000,
    image: '/images/camera.png',
    productCount: 89,
  },
  {
    id: 4,
    name: 'Inverters',
    price: 450000,
    image: '/images/inverter.png',
    productCount: 67,
  },
  {
    id: 5,
    name: 'Office Chairs',
    price: 75000,
    image: '/images/office-chair.png',
    productCount: 156,
  },
  {
    id: 6,
    name: 'Desktops',
    price: 350000,
    image: '/images/computer.png',
    productCount: 123,
  },
  {
    id: 7,
    name: 'Cookers',
    price: 89000,
    image: '/images/gasooker.png',
    productCount: 98,
  },
  {
    id: 8,
    name: 'Stabilizers',
    price: 65000,
    image: '/images/stabilizer.png',
    productCount: 78,
  },
];

// Discount/Sale Products
export const discountProducts: Product[] = [
  {
    id: 101,
    name: 'LG Phones',
    price: 85000,
    originalPrice: 120000,
    image: '/images/phones.png',
    category: 'Electronics',
    badge: 'Save 29%',
  },
  {
    id: 102,
    name: 'Portable Generators',
    price: 550000,
    originalPrice: 720000,
    image: '/images/gen1.png',
    category: 'Power Supplies',
    badge: 'Save 24%',
  },
  {
    id: 103,
    name: 'Canon DSLR Camera',
    price: 98000,
    originalPrice: 135000,
    image: '/images/camera.png',
    category: 'Electronics',
    badge: 'Save 27%',
  },
  {
    id: 104,
    name: 'Solar Inverters',
    price: 380000,
    originalPrice: 550000,
    image: '/images/inverter.png',
    category: 'Power Supplies',
    badge: 'Save 31%',
  },
  {
    id: 105,
    name: 'Executive Office Chairs',
    price: 55000,
    originalPrice: 85000,
    image: '/images/office-chair.png',
    category: 'Furniture',
    badge: 'Save 35%',
  },
  {
    id: 106,
    name: 'Gaming Desktops',
    price: 280000,
    originalPrice: 420000,
    image: '/images/computer.png',
    category: 'Computing',
    badge: 'Save 33%',
  },
  {
    id: 107,
    name: 'Gas Cookers',
    price: 65000,
    originalPrice: 92000,
    image: '/images/gasooker.png',
    category: 'Kitchen Appliances',
    badge: 'Save 29%',
  },
  {
    id: 108,
    name: 'Voltage Stabilizers',
    price: 48000,
    originalPrice: 75000,
    image: '/images/stabilizer.png',
    category: 'Power Supplies',
    badge: 'Save 36%',
  },
];

// All Products (for search/filter functionality)
export const allProducts: Product[] = [
  ...topSellingProducts,
  ...discountProducts,
];

// Product Category Filters
export const categoryFilters: string[] = [
  'Phone & Tablet',
  'Computing',
  'Electronics',
  'Home & Kitchen',
  'Power Supplies',

  'Other Categories',
];

// Utility Functions

/**
 * Format price to Nigerian Naira with proper formatting
 */
export const formatPrice = (price: number): string => {
  return `₦${price.toLocaleString('en-NG')}`;
};

/**
 * Calculate discount percentage
 */
export const calculateDiscount = (
  originalPrice: number,
  currentPrice: number
): number => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

/**
 * Get products by category
 */
export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All Categories') return allProducts;
  return allProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Get featured products
 */
export const getFeaturedProducts = (limit: number = 6): Product[] => {
  return allProducts.slice(0, limit);
};

/**
 * Search products by name or category
 */
export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );
};
