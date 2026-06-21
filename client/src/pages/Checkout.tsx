import { useState } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { createOrder } from "@/lib/firestore";

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  state: string;
};

export default function Checkout() {
  const [, navigate] = useLocation();
  const { items, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const { t } = useLanguage();
  const shipping = 100;
  const total = subtotal + shipping;

  const [form, setForm] = useState<FormData>({
    email: user?.email || "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    state: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createOrder({
        uid: user?.uid || "guest",
        items,
        subtotal,
        shipping,
        total,
        address: form,
        status: "pending",
      });
    } catch {
    }
    clearCart();
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <main className="relative min-h-screen bg-transparent flex flex-col items-center justify-center">
        <div className="relative z-10 text-center mt-[-80px]">
          <p className="[font-family:'Beatrice_Deck_Trial-Extrabold',Helvetica] text-3xl tracking-[2px] text-black mb-4">
            {t("checkout_confirmed")}
          </p>
          <p className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-base tracking-[2px] text-black mb-8">
            {t("checkout_thank_you")}
          </p>
          <button
            onClick={() => navigate("/")}
            className="h-[50px] w-[265px] bg-[#d9d9d9] text-black [font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-base tracking-[2px] hover:bg-black hover:text-white transition-colors"
          >
            {t("checkout_back_home")}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-transparent">
      <Header />

      <div className="relative z-10 px-[50px] pt-[24px] pb-[60px]">
        <p className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black mb-8">
          <button onClick={() => navigate("/")} className="hover:underline">{t("breadcrumb_home")}</button>
          {" / "}
          <button onClick={() => navigate("/products")} className="hover:underline">{t("breadcrumb_products")}</button>
        </p>

        <div className="flex gap-[60px]">
          <form className="flex-1" onSubmit={handleSubmit}>
            <h2 className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-base tracking-[2px] text-black mb-1 uppercase">
              {t("checkout_title")}
            </h2>

            <div className="mb-8">
              <h3 className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-xs tracking-[2px] text-black mb-1 uppercase">
                {t("checkout_info")}
              </h3>
              <p className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-[#000000a8] mb-4">
                {t("checkout_contact_info")}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                  className="h-[50px] w-full border-0 bg-[#d9d9d9] px-4 text-xs tracking-[2px] text-black placeholder:text-[#000000a8] [font-family:'Beatrice_Deck_Trial-Regular',Helvetica] focus:outline-none focus:ring-1 focus:ring-black"
                />
                <input
                  type="tel"
                  placeholder={t("checkout_phone")}
                  value={form.phone}
                  onChange={handleChange("phone")}
                  required
                  className="h-[50px] w-full border-0 bg-[#d9d9d9] px-4 text-xs tracking-[2px] text-black placeholder:text-[#000000a8] [font-family:'Beatrice_Deck_Trial-Regular',Helvetica] focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <p className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-[#000000a8] mb-4 mt-6">
                {t("checkout_shipping_address")}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { field: "firstName" as const, key: "checkout_first_name" as const },
                  { field: "lastName" as const, key: "checkout_last_name" as const },
                  { field: "address" as const, key: "checkout_address" as const },
                  { field: "city" as const, key: "checkout_city" as const },
                  { field: "postalCode" as const, key: "checkout_postal" as const },
                  { field: "country" as const, key: "checkout_country" as const },
                  { field: "state" as const, key: "checkout_state" as const },
                ].map(({ field, key }) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={t(key)}
                    value={form[field]}
                    onChange={handleChange(field)}
                    required
                    className="h-[50px] w-full border-0 bg-[#d9d9d9] px-4 text-xs tracking-[2px] text-black placeholder:text-[#000000a8] [font-family:'Beatrice_Deck_Trial-Regular',Helvetica] focus:outline-none focus:ring-1 focus:ring-black"
                  />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-xs tracking-[2px] text-black mb-4 uppercase border-t border-[#d6d6d6] pt-4">
                {t("checkout_shipping_section")}
              </h3>
              <div className="border border-[#d6d6d6] p-4 flex items-center justify-between">
                <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">{t("checkout_standard_shipping")}</span>
                <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">100 ₴</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-xs tracking-[2px] text-black mb-4 uppercase border-t border-[#d6d6d6] pt-4">
                {t("checkout_payment_section")}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-[50px] bg-[#d9d9d9] border-0" />
                <div className="h-[50px] bg-[#d9d9d9] border-0" />
                <div className="h-[50px] bg-[#d9d9d9] border-0" />
                <div className="h-[50px] bg-[#d9d9d9] border-0" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-[50px] w-[265px] bg-[#d9d9d9] text-black [font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-base tracking-[2px] hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? t("checkout_placing") : t("checkout_place_order")}
              {!loading && (
                <svg width="24" height="12" viewBox="0 0 48 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6H46M41 1L47 6L41 11" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              )}
            </button>
          </form>

          <div className="w-[320px] shrink-0">
            <div className="border border-[#d6d6d6] p-6">
              <h2 className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-sm tracking-[2px] text-black mb-6 uppercase">
                {t("checkout_your_order")}
              </h2>

              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-3 mb-4">
                  <div className="relative">
                    <div className="w-[60px] h-[60px] overflow-hidden bg-[#f7f7f7]">
                      <img className="w-full h-full object-cover" alt={item.product.name} src={item.product.image} />
                    </div>
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white rounded-full flex items-center justify-center text-[9px] [font-family:'Beatrice_Deck_Trial-Regular',Helvetica]">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-[10px] tracking-[2px] text-black">{item.product.type}</p>
                    <p className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-xs tracking-[1px] text-black">{item.product.name}</p>
                    <p className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-[10px] tracking-[1px] text-[#000000a8]">{item.size} / {item.color}</p>
                  </div>
                  <p className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">
                    {item.product.price * item.quantity} ₴
                  </p>
                </div>
              ))}

              <div className="border-t border-[#d6d6d6] pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">{t("checkout_subtotal")}</span>
                  <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">{subtotal} ₴</span>
                </div>
                <div className="flex justify-between">
                  <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">{t("checkout_shipping_label")}</span>
                  <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-[#000000a8] text-right text-[10px]">
                    {t("checkout_shipping_calc")}
                  </span>
                </div>
                <div className="flex justify-between border-t border-[#d6d6d6] pt-3">
                  <span className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-sm tracking-[2px] text-black">{t("checkout_total")}</span>
                  <span className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-sm tracking-[2px] text-black">{total} ₴</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
