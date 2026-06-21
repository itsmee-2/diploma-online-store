import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Cart() {
  const [, navigate] = useLocation();
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();
  const { t } = useLanguage();
  const shipping = items.length > 0 ? 100 : 0;
  const total = subtotal + shipping;

  return (
    <main className="relative min-h-screen bg-transparent">
      <Header />

      <div className="relative z-10 px-[50px] pt-[24px]">
        <div className="flex gap-8 border-b border-[#d6d6d6] mb-8">
          <button className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-sm tracking-[2px] text-black pb-3 border-b-2 border-black">
            {t("cart_tab")}
          </button>
          <button className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-sm tracking-[2px] text-[#000000a8] pb-3">
            {t("cart_favorites_tab")}
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <p className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-base tracking-[2px] text-black mb-6">
              {t("cart_empty")}
            </p>
            <button
              onClick={() => navigate("/products")}
              className="h-[50px] w-[265px] bg-[#d9d9d9] text-black [font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-base tracking-[2px] hover:bg-black hover:text-white transition-colors"
            >
              {t("cart_go_to_shop")}
            </button>
          </div>
        ) : (
          <div className="flex gap-[60px]">
            <div className="flex-1">
              {items.map((item, index) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`}>
                  <div className="flex gap-4 py-6">
                    <div className="w-[100px] h-[100px] overflow-hidden bg-[#f7f7f7] shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        alt={item.product.name}
                        src={item.product.image}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">
                            {item.product.type}
                          </p>
                          <p className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-sm tracking-[1px] text-black">
                            {item.product.name}
                          </p>
                        </div>
                        <p className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-sm tracking-[1px] text-black shrink-0 ml-4">
                          {item.product.price * item.quantity} ₴
                        </p>
                      </div>

                      <div className="flex items-center gap-6 mt-3">
                        <div className="flex items-center gap-2">
                          <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">
                            {t("cart_size")}
                          </span>
                          <span className="w-8 h-8 border border-[#d6d6d6] flex items-center justify-center [font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">
                            {item.size}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">
                            {t("cart_color")}
                          </span>
                          <span
                            className="w-5 h-5 rounded-full border border-[#d6d6d6]"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                            className="w-7 h-7 border border-[#d6d6d6] flex items-center justify-center text-base hover:bg-black hover:text-white hover:border-black transition-colors"
                          >
                            −
                          </button>
                          <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-sm tracking-[2px] text-black w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                            className="w-7 h-7 border border-[#d6d6d6] flex items-center justify-center text-base hover:bg-black hover:text-white hover:border-black transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                          className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[1px] text-[#000000a8] hover:text-black underline ml-2"
                        >
                          {t("cart_remove")}
                        </button>
                      </div>
                    </div>
                  </div>
                  {index < items.length - 1 && <div className="border-t border-[#d6d6d6]" />}
                </div>
              ))}
            </div>

            <div className="w-[320px] shrink-0">
              <div className="border border-[#d6d6d6] p-6">
                <h2 className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-sm tracking-[2px] text-black mb-6 uppercase">
                  {t("cart_order_summary")}
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">
                      {t("cart_subtotal")}
                    </span>
                    <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">
                      {subtotal} ₴
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">
                      {t("cart_shipping")}
                    </span>
                    <span className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black">
                      {shipping} ₴
                    </span>
                  </div>
                  <div className="border-t border-[#d6d6d6] pt-3 flex items-center justify-between">
                    <span className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-sm tracking-[2px] text-black">
                      {t("cart_total")}
                    </span>
                    <span className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-sm tracking-[2px] text-black">
                      {total} ₴
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-6">
                  <input type="checkbox" id="terms" className="mt-1 shrink-0" />
                  <label htmlFor="terms" className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-[10px] tracking-[1px] text-black cursor-pointer">
                    {t("cart_terms")}
                  </label>
                </div>
                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full h-[50px] bg-[#d9d9d9] text-black [font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-base tracking-[2px] hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-3"
                >
                  {t("cart_continue")}
                  <svg width="24" height="12" viewBox="0 0 48 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H46M41 1L47 6L41 11" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
