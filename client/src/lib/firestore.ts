import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import { Product } from "@/data/products";
import { CartItem } from "@/context/CartContext";

// ── Users ──────────────────────────────────────────────
export async function getUser(uid: string) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

// ── Products ───────────────────────────────────────────
export async function seedProducts(products: Product[]) {
  for (const product of products) {
    await setDoc(doc(db, "products", product.id), product);
  }
}

export async function getProducts() {
  const snap = await getDocs(collection(db, "products"));
  return snap.docs.map((d) => d.data() as Product);
}

// ── Cart ───────────────────────────────────────────────
export async function saveCart(uid: string, items: CartItem[]) {
  await setDoc(doc(db, "cart", uid), {
    uid,
    items: items.map((i) => ({
      productId: i.product.id,
      size: i.size,
      color: i.color,
      quantity: i.quantity,
    })),
    updatedAt: serverTimestamp(),
  });
}

export async function getCart(uid: string) {
  const snap = await getDoc(doc(db, "cart", uid));
  return snap.exists() ? snap.data() : null;
}

// ── Orders ─────────────────────────────────────────────
export type OrderData = {
  uid: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  address: Record<string, string>;
  status: string;
};

export async function createOrder(order: OrderData) {
  const ref = await addDoc(collection(db, "orders"), {
    ...order,
    items: order.items.map((i) => ({
      productId: i.product.id,
      productName: i.product.name,
      size: i.size,
      color: i.color,
      quantity: i.quantity,
      price: i.product.price,
    })),
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

export async function getUserOrders(uid: string) {
  const q = query(collection(db, "orders"), where("uid", "==", uid));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
