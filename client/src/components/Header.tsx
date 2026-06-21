import { useLocation } from "wouter";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const [, navigate] = useLocation();
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const { t } = useLanguage();

  const handleProfileClick = async () => {
    if (user) {
      await logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="relative z-10 flex items-start justify-between px-[31px] pt-[32px]">
      <div className="flex items-center gap-[42px]">
        <button type="button" className="h-auto shrink-0" aria-label={t("nav_menu")}>
          <img className="h-[18px] w-7" alt={t("nav_menu")} src="/figmaAssets/group-36.png" />
        </button>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-8">
            {[
              { key: "nav_home" as const, path: "/" },
              { key: "nav_collections" as const, path: "/products" },
              { key: "nav_new" as const, path: "/products?tag=New" },
            ].map((item) => (
              <li
                key={item.key}
                className="[font-family:'Beatrice_Deck_Trial-Medium',Helvetica] text-base font-medium leading-[normal] tracking-[2px] text-black"
              >
                <button
                  type="button"
                  className="h-auto hover:opacity-60 transition-opacity"
                  onClick={() => navigate(item.path)}
                >
                  {t(item.key)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="absolute left-1/2 top-[30px] -translate-x-1/2">
        <button type="button" className="h-auto" aria-label={t("nav_logo")} onClick={() => navigate("/")}>
          <img className="h-[50px] w-[50px]" alt={t("nav_logo")} src="/figmaAssets/group-53.png" />
        </button>
      </div>

      <div className="flex items-center gap-[21px] pr-[11px]">
        <button type="button" className="h-auto" aria-label={t("nav_search")} onClick={() => navigate("/products")}>
          <img className="h-[50px] w-[50px]" alt={t("nav_search")} src="/figmaAssets/group-8.png" />
        </button>

        <div className="relative flex items-center">
          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="h-[50px] rounded-[22px] bg-black px-5 text-xs font-medium tracking-[2px] text-white hover:bg-neutral-800 transition-colors [font-family:'Beatrice_Deck_Trial-Medium',Helvetica] flex items-center gap-2"
          >
            {t("nav_cart")}
            {totalItems > 0 && (
              <span className="bg-white text-black rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                {totalItems}
              </span>
            )}
          </button>
          <img
            className="absolute -right-[45px] top-0 h-[50px] w-[50px]"
            alt={t("nav_wishlist")}
            src="/figmaAssets/group-7.png"
          />
        </div>

        <div className="relative ml-[24px] group">
          <button
            type="button"
            className="h-auto"
            aria-label={user ? t("nav_account") : t("nav_sign_in")}
            onClick={handleProfileClick}
            title={user ? `${t("nav_signed_in_as")} ${user.displayName || user.email} ${t("nav_sign_out_hint")}` : t("nav_sign_in")}
          >
            <img className="h-[50px] w-[50px]" alt={t("nav_account")} src="/figmaAssets/group-6.png" />
          </button>
          {user && (
            <div className="absolute right-0 top-[54px] hidden group-hover:flex flex-col bg-white border border-[#d6d6d6] shadow-sm z-50 min-w-[160px]">
              <div className="px-4 py-3 border-b border-[#d6d6d6]">
                <p className="[font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-[10px] tracking-[1px] text-[#000000a8] truncate">
                  {user.displayName || user.email}
                </p>
              </div>
              <button
                onClick={async () => { await logout(); navigate("/"); }}
                className="px-4 py-3 text-left [font-family:'Beatrice_Deck_Trial-Regular',Helvetica] text-xs tracking-[2px] text-black hover:bg-[#d9d9d9] transition-colors"
              >
                {t("nav_logout")}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
