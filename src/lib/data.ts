// import {
//   BadgeCheck,
//   BarChart3,
//   Bell,
//   Boxes,
//   Building2,
//   CreditCard,
//   DollarSign,
//   Gift,
//   Heart,
//   Megaphone,
//   PackageCheck,
//   ReceiptText,
//   Settings,
//   ShieldCheck,
//   ShoppingBag,
//   Store,
//   Ticket,
//   Truck,
//   Users,
// } from "lucide-react";
// import type { LucideIcon } from "lucide-react";

// export type Product = {
//   id: string;
//   slug: string;
//   name: string;
//   brand: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   rating: number;
//   reviews: number;
//   stock: "In stock" | "Low stock" | "Pre-order";
//   badge: string;
//   image: string;
//   gallery: string[];
//   colors: string[];
//   sizes: string[];
//   description: string;
//   specs: Record<string, string>;
// };

// export type NavItem = {
//   title: string;
//   href: string;
//   icon: LucideIcon;
// };

// export const formatCurrency = (value: number) =>
//   new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     maximumFractionDigits: 0,
//   }).format(value);

// export const products: Product[] = [
//   {
//     id: "PRD-1001",
//     slug: "aero-sound-pro-headphones",
//     name: "AeroSound Pro Headphones",
//     brand: "Auralux",
//     category: "Audio",
//     price: 189,
//     originalPrice: 249,
//     rating: 4.8,
//     reviews: 1284,
//     stock: "In stock",
//     badge: "Flash deal",
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
//     ],
//     colors: ["#111827", "#d6d3d1", "#0f766e"],
//     sizes: ["One size"],
//     description:
//       "Adaptive noise cancellation, studio-grade drivers, and a travel-ready folding frame built for deep work and long flights.",
//     specs: {
//       Battery: "42 hours",
//       Connectivity: "Bluetooth 5.4, USB-C",
//       Warranty: "2 years",
//       Weight: "248g",
//     },
//   },
//   {
//     id: "PRD-1002",
//     slug: "velocity-knit-runners",
//     name: "Velocity Knit Runners",
//     brand: "StrideLab",
//     category: "Footwear",
//     price: 126,
//     originalPrice: 168,
//     rating: 4.7,
//     reviews: 843,
//     stock: "Low stock",
//     badge: "Best seller",
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
//     ],
//     colors: ["#ef4444", "#111827", "#f8fafc"],
//     sizes: ["7", "8", "9", "10", "11"],
//     description:
//       "A featherweight trainer with breathable knit, responsive foam, and city-to-gym traction.",
//     specs: {
//       Upper: "Engineered knit",
//       Sole: "Dual-density foam",
//       Drop: "8mm",
//       Care: "Spot clean",
//     },
//   },
//   {
//     id: "PRD-1003",
//     slug: "orbit-smart-watch",
//     name: "Orbit Smart Watch",
//     brand: "Northstar",
//     category: "Wearables",
//     price: 219,
//     originalPrice: 299,
//     rating: 4.6,
//     reviews: 674,
//     stock: "In stock",
//     badge: "New arrival",
//     image:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1200&q=80",
//     ],
//     colors: ["#0f172a", "#94a3b8", "#f59e0b"],
//     sizes: ["40mm", "44mm"],
//     description:
//       "A slim health and productivity watch with always-on display, precise sensors, and rapid charging.",
//     specs: {
//       Display: "AMOLED always-on",
//       Sensors: "ECG, SpO2, GPS",
//       Battery: "7 days",
//       Water: "5 ATM",
//     },
//   },
//   {
//     id: "PRD-1004",
//     slug: "workpod-ergonomic-chair",
//     name: "WorkPod Ergonomic Chair",
//     brand: "HavenDesk",
//     category: "Home Office",
//     price: 349,
//     originalPrice: 449,
//     rating: 4.9,
//     reviews: 411,
//     stock: "In stock",
//     badge: "Editor pick",
//     image:
//       "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80",
//     ],
//     colors: ["#18181b", "#78716c", "#f5f5f4"],
//     sizes: ["Standard", "Tall"],
//     description:
//       "A refined office chair with adaptive lumbar, breathable mesh, and all-day posture support.",
//     specs: {
//       Material: "Aluminum, mesh",
//       Recline: "110 to 135 degrees",
//       Capacity: "300 lb",
//       Assembly: "15 minutes",
//     },
//   },
//   {
//     id: "PRD-1005",
//     slug: "creator-mirrorless-camera",
//     name: "Creator Mirrorless Camera",
//     brand: "Lumio",
//     category: "Cameras",
//     price: 899,
//     originalPrice: 1099,
//     rating: 4.8,
//     reviews: 352,
//     stock: "Pre-order",
//     badge: "Creator kit",
//     image:
//       "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=1200&q=80",
//     ],
//     colors: ["#1f2937", "#525252"],
//     sizes: ["Body only", "18-55mm kit"],
//     description:
//       "A compact 4K camera with fast autofocus, cinematic color profiles, and creator-friendly controls.",
//     specs: {
//       Sensor: "26MP APS-C",
//       Video: "4K 60fps",
//       Stabilization: "5-axis IBIS",
//       Storage: "Dual SD slots",
//     },
//   },
//   {
//     id: "PRD-1006",
//     slug: "nomad-commuter-backpack",
//     name: "Nomad Commuter Backpack",
//     brand: "Avenue",
//     category: "Bags",
//     price: 98,
//     originalPrice: 138,
//     rating: 4.5,
//     reviews: 932,
//     stock: "In stock",
//     badge: "Travel ready",
//     image:
//       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1200&q=80",
//     ],
//     colors: ["#111827", "#14532d", "#a16207"],
//     sizes: ["18L", "24L"],
//     description:
//       "A water-resistant daily bag with device protection, hidden pockets, and luggage passthrough.",
//     specs: {
//       Volume: "24L",
//       Laptop: "Up to 16 inch",
//       Material: "Recycled nylon",
//       Pockets: "14 compartments",
//     },
//   },
//   {
//     id: "PRD-1007",
//     slug: "glow-daily-skincare-set",
//     name: "Glow Daily Skincare Set",
//     brand: "Solace",
//     category: "Beauty",
//     price: 74,
//     originalPrice: 98,
//     rating: 4.7,
//     reviews: 539,
//     stock: "In stock",
//     badge: "Clean beauty",
//     image:
//       "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=80",
//     ],
//     colors: ["#fde68a", "#f9a8d4", "#bbf7d0"],
//     sizes: ["Starter", "Full size"],
//     description:
//       "A gentle three-step skincare routine with cleanser, hydration serum, and mineral SPF.",
//     specs: {
//       Skin: "All skin types",
//       Formula: "Fragrance-free",
//       Contents: "3 products",
//       Certifications: "Cruelty-free",
//     },
//   },
//   {
//     id: "PRD-1008",
//     slug: "summit-weather-jacket",
//     name: "Summit Weather Jacket",
//     brand: "Alpine Row",
//     category: "Apparel",
//     price: 156,
//     originalPrice: 220,
//     rating: 4.6,
//     reviews: 287,
//     stock: "Low stock",
//     badge: "Seasonal",
//     image:
//       "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=900&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
//     ],
//     colors: ["#0f172a", "#065f46", "#f97316"],
//     sizes: ["S", "M", "L", "XL"],
//     description:
//       "A lightweight shell with taped seams, packable hood, and breathable all-weather protection.",
//     specs: {
//       Rating: "15K waterproof",
//       Fabric: "Recycled ripstop",
//       Fit: "Regular",
//       Weight: "390g",
//     },
//   },
// ];

// export const categories = [
//   {
//     name: "Audio",
//     count: 128,
//     image:
//       "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     name: "Footwear",
//     count: 94,
//     image:
//       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     name: "Wearables",
//     count: 76,
//     image:
//       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     name: "Home Office",
//     count: 52,
//     image:
//       "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=700&q=80",
//   },
// ];

// export const reviews = [
//   {
//     name: "Maya Rahman",
//     role: "Operations lead",
//     quote:
//       "The checkout and tracking flow feel like a mature retail product. It is fast, calm, and easy to scan.",
//     rating: 5,
//   },
//   {
//     name: "Daniel Kim",
//     role: "Vendor partner",
//     quote:
//       "Inventory alerts, revenue cards, and order queues are exactly what our sellers need day to day.",
//     rating: 5,
//   },
//   {
//     name: "Ariana Patel",
//     role: "Repeat customer",
//     quote:
//       "Product details are rich without getting noisy, and the dashboard makes reordering simple.",
//     rating: 5,
//   },
// ];

// export const cartItems = [
//   { product: products[0], quantity: 1 },
//   { product: products[2], quantity: 1 },
//   { product: products[5], quantity: 2 },
// ];

// export const dashboardStats = [
//   { label: "Total orders", value: "128", change: "+12.4%", icon: ShoppingBag },
//   { label: "Pending orders", value: "9", change: "-3.1%", icon: Truck },
//   { label: "Completed", value: "116", change: "+8.7%", icon: PackageCheck },
//   { label: "Wishlist", value: "34", change: "+5 saved", icon: Heart },
//   { label: "Rewards", value: "12,430", change: "Gold tier", icon: Gift },
// ];

// export const vendorStats = [
//   { label: "Revenue", value: "$84.2K", change: "+18.6%", icon: DollarSign },
//   { label: "Orders", value: "1,284", change: "+9.2%", icon: ReceiptText },
//   { label: "Products", value: "312", change: "24 low stock", icon: Boxes },
//   { label: "Customers", value: "8.7K", change: "+642", icon: Users },
// ];

// export const adminStats = [
//   { label: "Revenue", value: "$1.42M", change: "+21.8%", icon: DollarSign },
//   { label: "Orders", value: "42,809", change: "+11.2%", icon: ReceiptText },
//   { label: "Customers", value: "284K", change: "+18.1%", icon: Users },
//   { label: "Vendors", value: "1,284", change: "+64", icon: Store },
//   { label: "Products", value: "98K", change: "+4.9K", icon: Boxes },
// ];

// export const spendingData = [
//   { name: "Jan", value: 420, orders: 4 },
//   { name: "Feb", value: 580, orders: 5 },
//   { name: "Mar", value: 360, orders: 3 },
//   { name: "Apr", value: 760, orders: 7 },
//   { name: "May", value: 640, orders: 6 },
//   { name: "Jun", value: 920, orders: 9 },
// ];

// export const salesData = [
//   { name: "Jan", value: 12400, orders: 420 },
//   { name: "Feb", value: 18200, orders: 618 },
//   { name: "Mar", value: 15900, orders: 540 },
//   { name: "Apr", value: 21400, orders: 739 },
//   { name: "May", value: 26300, orders: 880 },
//   { name: "Jun", value: 31800, orders: 1024 },
// ];

// export const performanceData = [
//   { name: "Audio", value: 42 },
//   { name: "Fashion", value: 31 },
//   { name: "Beauty", value: 24 },
//   { name: "Office", value: 18 },
//   { name: "Cameras", value: 15 },
// ];

// export const orders = [
//   {
//     id: "ORD-91824",
//     customer: "Maya Rahman",
//     status: "Out for delivery",
//     total: "$412",
//     date: "Jun 10, 2026",
//   },
//   {
//     id: "ORD-91809",
//     customer: "Daniel Kim",
//     status: "Packed",
//     total: "$126",
//     date: "Jun 9, 2026",
//   },
//   {
//     id: "ORD-91778",
//     customer: "Ariana Patel",
//     status: "Delivered",
//     total: "$918",
//     date: "Jun 8, 2026",
//   },
//   {
//     id: "ORD-91742",
//     customer: "Nadia Hossain",
//     status: "Refund review",
//     total: "$74",
//     date: "Jun 7, 2026",
//   },
// ];

// export const notifications = [
//   "Flash sale campaign goes live tonight at 8:00 PM.",
//   "Order ORD-91824 is out for delivery.",
//   "A vendor payout batch is waiting for approval.",
//   "24 products are below reorder threshold.",
// ];

// export const addresses = [
//   {
//     name: "Home",
//     line: "House 12, Road 8, Dhanmondi, Dhaka",
//     tag: "Default shipping",
//   },
//   {
//     name: "Office",
//     line: "Level 9, Gulshan Avenue, Dhaka",
//     tag: "Weekdays only",
//   },
// ];

// export const paymentMethods = [
//   "Credit Card",
//   "PayPal",
//   "Stripe",
//   "SSLCommerz",
//   "bKash",
//   "Nagad",
//   "Rocket",
//   "Cash On Delivery",
// ];

// export const customerNav: NavItem[] = [
//   { title: "Dashboard", href: "/dashboard/customer", icon: BarChart3 },
//   { title: "My Profile", href: "/dashboard/customer/profile", icon: Users },
//   { title: "Addresses", href: "/dashboard/customer/addresses", icon: Building2 },
//   { title: "Orders", href: "/dashboard/customer/orders", icon: ReceiptText },
//   { title: "Wishlist", href: "/dashboard/customer/wishlist", icon: Heart },
//   { title: "Notifications", href: "/dashboard/customer/notifications", icon: Bell },
// ];

// export const vendorNav: NavItem[] = [
//   { title: "Dashboard", href: "/dashboard/vendor", icon: BarChart3 },
//   { title: "Products", href: "/dashboard/vendor/products", icon: Boxes },
//   { title: "Orders", href: "/dashboard/vendor/orders", icon: ReceiptText },
//   { title: "Inventory", href: "/dashboard/vendor/inventory", icon: PackageCheck },
// ];

// export const adminNav: NavItem[] = [
//   { title: "Overview", href: "/dashboard/admin", icon: BarChart3 },
//   { title: "Users", href: "/dashboard/admin/users", icon: Users },
//   { title: "Products", href: "/dashboard/admin/products", icon: Boxes },
//   { title: "Orders", href: "/dashboard/admin/orders", icon: ReceiptText },
//   { title: "Vendors", href: "/dashboard/admin/vendors", icon: Store },
//   { title: "Payments", href: "/dashboard/admin/payments", icon: CreditCard },
//   { title: "Marketing", href: "/dashboard/admin/marketing", icon: Megaphone },
//   { title: "Content", href: "/dashboard/admin/content", icon: Ticket },
//   { title: "Support", href: "/dashboard/admin/support", icon: ShieldCheck },
//   { title: "Reports", href: "/dashboard/admin/reports", icon: BadgeCheck },
//   { title: "Settings", href: "/dashboard/admin/settings", icon: Settings },
// ];

// export const getProductBySlug = (slug: string) =>
//   products.find((product) => product.slug === slug);
import {
  BadgeCheck,
  BarChart3,
  Bell,
  Boxes,
  Building2,
  CreditCard,
  DollarSign,
  Gift,
  Heart,
  Megaphone,
  PackageCheck,
  ReceiptText,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Store,
  Ticket,
  Truck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  stock: "In stock" | "Low stock" | "Pre-order";
  badge: string;
  image: string;
  gallery: string[];
  colors: string[];
  sizes: string[];
  description: string;
  specs: Record<string, string>;
};

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export const products: Product[] = [
  {
    id: "PRD-1001",
    slug: "eclaffia-date-seed-coffee",
    name: "Eclaffia Date Seed Coffee",
    brand: "Bliss Sihat",
    category: "Coffee",
    price: 450,
    originalPrice: 550,
    rating: 4.8,
    reviews: 312,
    stock: "In stock",
    badge: "Caffeine Free",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#5c3d2e", "#a0785a", "#d4b896"],
    sizes: ["220g"],
    description:
      "A 100% caffeine-free premium coffee brewed from locally sourced date seeds — rich in antioxidants, naturally sweet, and kind to your sleep. Bangladesh's first date seed coffee alternative.",
    specs: {
      Portion: "220 gm",
      Caffeine: "0%",
      Benefits: "Rich in antioxidants",
      Source: "Local Bangladeshi dates",
    },
  },
  {
    id: "PRD-1002",
    slug: "dulacate-date-chocolate",
    name: "Dulacate Date Chocolate",
    brand: "Bliss Sihat",
    category: "Chocolate",
    price: 150,
    originalPrice: 180,
    rating: 4.7,
    reviews: 198,
    stock: "In stock",
    badge: "Low GI",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1610450949065-1f2841536c88?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#3b1f0a", "#7b4a2d", "#c8956c"],
    sizes: ["100g"],
    description:
      "A date-based chocolate bar with a low glycemic index, natural sugar, and high fibre content. No chemical additives — just wholesome, guilt-free indulgence for health-conscious sweet lovers.",
    specs: {
      Portion: "100 gm",
      "Glycemic Index": "Low",
      Sugar: "Natural (dates)",
      Fibre: "High",
    },
  },
];

export const categories = [
  {
    name: "Coffee",
    count: 3,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Chocolate",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Gift Sets",
    count: 4,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Bundles",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=700&q=80",
  },
];

export const reviews = [
  {
    name: "Maya Rahman",
    role: "Operations lead",
    quote:
      "The checkout and tracking flow feel like a mature retail product. It is fast, calm, and easy to scan.",
    rating: 5,
  },
  {
    name: "Daniel Kim",
    role: "Vendor partner",
    quote:
      "Inventory alerts, revenue cards, and order queues are exactly what our sellers need day to day.",
    rating: 5,
  },
  {
    name: "Ariana Patel",
    role: "Repeat customer",
    quote:
      "Product details are rich without getting noisy, and the dashboard makes reordering simple.",
    rating: 5,
  },
];

export const cartItems = [
  { product: products[0], quantity: 1 },
  { product: products[1], quantity: 2 },
];

export const dashboardStats = [
  { label: "Total orders", value: "128", change: "+12.4%", icon: ShoppingBag },
  { label: "Pending orders", value: "9", change: "-3.1%", icon: Truck },
  { label: "Completed", value: "116", change: "+8.7%", icon: PackageCheck },
  { label: "Wishlist", value: "34", change: "+5 saved", icon: Heart },
  { label: "Rewards", value: "12,430", change: "Gold tier", icon: Gift },
];

export const vendorStats = [
  { label: "Revenue", value: "$84.2K", change: "+18.6%", icon: DollarSign },
  { label: "Orders", value: "1,284", change: "+9.2%", icon: ReceiptText },
  { label: "Products", value: "312", change: "24 low stock", icon: Boxes },
  { label: "Customers", value: "8.7K", change: "+642", icon: Users },
];

export const adminStats = [
  { label: "Revenue", value: "$1.42M", change: "+21.8%", icon: DollarSign },
  { label: "Orders", value: "42,809", change: "+11.2%", icon: ReceiptText },
  { label: "Customers", value: "284K", change: "+18.1%", icon: Users },
  { label: "Vendors", value: "1,284", change: "+64", icon: Store },
  { label: "Products", value: "98K", change: "+4.9K", icon: Boxes },
];

export const spendingData = [
  { name: "Jan", value: 420, orders: 4 },
  { name: "Feb", value: 580, orders: 5 },
  { name: "Mar", value: 360, orders: 3 },
  { name: "Apr", value: 760, orders: 7 },
  { name: "May", value: 640, orders: 6 },
  { name: "Jun", value: 920, orders: 9 },
];

export const salesData = [
  { name: "Jan", value: 12400, orders: 420 },
  { name: "Feb", value: 18200, orders: 618 },
  { name: "Mar", value: 15900, orders: 540 },
  { name: "Apr", value: 21400, orders: 739 },
  { name: "May", value: 26300, orders: 880 },
  { name: "Jun", value: 31800, orders: 1024 },
];

export const performanceData = [
  { name: "Coffee", value: 58 },
  { name: "Chocolate", value: 42 },
  { name: "Gift Sets", value: 27 },
  { name: "Bundles", value: 19 },
  { name: "Online", value: 34 },
];

export const orders = [
  {
    id: "ORD-91824",
    customer: "Maya Rahman",
    status: "Out for delivery",
    total: "$412",
    date: "Jun 10, 2026",
  },
  {
    id: "ORD-91809",
    customer: "Daniel Kim",
    status: "Packed",
    total: "$126",
    date: "Jun 9, 2026",
  },
  {
    id: "ORD-91778",
    customer: "Ariana Patel",
    status: "Delivered",
    total: "$918",
    date: "Jun 8, 2026",
  },
  {
    id: "ORD-91742",
    customer: "Nadia Hossain",
    status: "Refund review",
    total: "$74",
    date: "Jun 7, 2026",
  },
];

export const notifications = [
  "Flash sale campaign goes live tonight at 8:00 PM.",
  "Order ORD-91824 is out for delivery.",
  "A vendor payout batch is waiting for approval.",
  "24 products are below reorder threshold.",
];

export const addresses = [
  {
    name: "Home",
    line: "House 12, Road 8, Dhanmondi, Dhaka",
    tag: "Default shipping",
  },
  {
    name: "Office",
    line: "Level 9, Gulshan Avenue, Dhaka",
    tag: "Weekdays only",
  },
];

export const paymentMethods = [
  "Credit Card",
  "PayPal",
  "Stripe",
  "SSLCommerz",
  "bKash",
  "Nagad",
  "Rocket",
  "Cash On Delivery",
];

export const customerNav: NavItem[] = [
  { title: "Dashboard", href: "/dashboard/customer", icon: BarChart3 },
  { title: "My Profile", href: "/dashboard/customer/profile", icon: Users },
  { title: "Addresses", href: "/dashboard/customer/addresses", icon: Building2 },
  { title: "Orders", href: "/dashboard/customer/orders", icon: ReceiptText },
  { title: "Wishlist", href: "/dashboard/customer/wishlist", icon: Heart },
  { title: "Notifications", href: "/dashboard/customer/notifications", icon: Bell },
];

export const vendorNav: NavItem[] = [
  { title: "Dashboard", href: "/dashboard/vendor", icon: BarChart3 },
  { title: "Products", href: "/dashboard/vendor/products", icon: Boxes },
  { title: "Orders", href: "/dashboard/vendor/orders", icon: ReceiptText },
  { title: "Inventory", href: "/dashboard/vendor/inventory", icon: PackageCheck },
];

export const adminNav: NavItem[] = [
  { title: "Overview", href: "/dashboard/admin", icon: BarChart3 },
  { title: "Users", href: "/dashboard/admin/users", icon: Users },
  { title: "Products", href: "/dashboard/admin/products", icon: Boxes },
  { title: "Orders", href: "/dashboard/admin/orders", icon: ReceiptText },
  { title: "Vendors", href: "/dashboard/admin/vendors", icon: Store },
  { title: "Payments", href: "/dashboard/admin/payments", icon: CreditCard },
  { title: "Marketing", href: "/dashboard/admin/marketing", icon: Megaphone },
  { title: "Content", href: "/dashboard/admin/content", icon: Ticket },
  { title: "Support", href: "/dashboard/admin/support", icon: ShieldCheck },
  { title: "Reports", href: "/dashboard/admin/reports", icon: BadgeCheck },
  { title: "Settings", href: "/dashboard/admin/settings", icon: Settings },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);