import { createContext, useContext, useState, useEffect } from "react";

export type Lang = "UA" | "EN";

const translations = {
  UA: {
    // Navigation
    nav_home: "Головна",
    nav_collections: "Колекції",
    nav_new: "Нове",
    nav_cart: "Кошик",
    nav_wishlist: "Обране",
    nav_search: "Пошук",
    nav_menu: "Меню",
    nav_logo: "Логотип",
    nav_account: "Акаунт",
    nav_sign_in: "Увійти",
    nav_logout: "Вийти",
    nav_signed_in_as: "Увійдено як",
    nav_sign_out_hint: "— натисніть для виходу",

    // Hero
    hero_men: "ЧОЛОВІКИ",
    hero_women: "ЖІНКИ",
    hero_kids: "ДІТИ",
    hero_search_placeholder: "Пошук",
    hero_new_collection: "НОВА\nКОЛЕКЦІЯ",
    hero_new_collection_line1: "НОВА",
    hero_new_collection_line2: "КОЛЕКЦІЯ",
    hero_summer: "Літо",
    hero_go_to_shop: "До магазину",
    hero_prev: "Попередній",
    hero_next: "Наступний",
    hero_featured: "Рекомендовані товари",
    hero_categories: "Категорії",

    // Collections section
    collections_see_all: "Переглянути все",
    collections_heading_1: "XIV",
    collections_heading_2: "Колекції",
    collections_heading_3: "23-24",
    collections_filter_all: "(Всі)",
    collections_filter_men: "Чоловіки",
    collections_filter_women: "Жінки",
    collections_filter_kids: "Діти",
    collections_filters: "Фільтри(+)",
    collections_sort_asc: "Від меншого",
    collections_sort_desc: "Від більшого",
    collections_more: "Більше",

    // Approach section
    approach_heading: "Наш підхід до дизайну одягу",
    approach_img_alt: "Редакційна колекція",

    // Newsletter section
    newsletter_label: "Розсилка",
    newsletter_heading: "Залишайтесь на зв'язку",
    newsletter_placeholder: "Ваш email",
    newsletter_btn: "ПІДПИСАТИСЬ",

    // Footer
    footer_info: "Інформація",
    footer_pricing: "Ціни",
    footer_about: "Про нас",
    footer_contacts: "Контакти",
    footer_lang: "Мова",
    footer_technologies: "Технології",
    footer_copyright: "© 2024 — авторське право",
    footer_privacy: "конфіденційність",
    footer_terms: "умови",
    footer_to_top: "Вгору",

    // Breadcrumb
    breadcrumb_home: "Головна",
    breadcrumb_products: "Товари",

    // Products page
    products_size: "Розмір",
    products_availability: "Наявність",
    products_in_stock: "В наявності (450)",
    products_out_of_stock: "Немає в наявності (18)",
    products_no_options: "Немає варіантів",
    products_clear_all: "Скинути всі фільтри",
    products_search_placeholder: "Пошук товарів",
    products_all_tags: "Всі",
    products_colors: "Кольори",
    products_price_range: "Ціновий діапазон",
    products_collections: "Колекції",
    products_ratings: "Рейтинг",
    products_category_all: "(Всі)",
    products_category_men: "Чоловіки",
    products_category_women: "Жінки",
    products_category_kids: "Діти",
    products_sort_asc: "Від меншого",
    products_sort_desc: "Від більшого",
    products_no_results: "Товари не знайдено.",
    products_clear_filters: "Скинути фільтри",
    products_view: "Переглянути",
    products_count_1: "1 товар",
    products_count_few: "товари",
    products_count_many: "товарів",

    // Cart
    cart_tab: "Кошик",
    cart_favorites_tab: "Обране",
    cart_empty: "Ваш кошик порожній.",
    cart_go_to_shop: "До магазину",
    cart_size: "Розмір:",
    cart_color: "Колір:",
    cart_remove: "Видалити",
    cart_order_summary: "Підсумок замовлення",
    cart_subtotal: "Підсумок",
    cart_shipping: "Доставка",
    cart_total: "Разом (з ПДВ)",
    cart_terms: "Я погоджуюсь з умовами використання",
    cart_continue: "Продовжити",

    // Checkout
    checkout_title: "Оформлення замовлення",
    checkout_info: "Інформація",
    checkout_contact_info: "Контактні дані",
    checkout_shipping_address: "Адреса доставки",
    checkout_phone: "Телефон",
    checkout_first_name: "Ім'я",
    checkout_last_name: "Прізвище",
    checkout_address: "Адреса",
    checkout_city: "Місто",
    checkout_postal: "Поштовий індекс",
    checkout_country: "Країна",
    checkout_state: "Область/Регіон",
    checkout_shipping_section: "Доставка",
    checkout_standard_shipping: "Стандартна доставка",
    checkout_payment_section: "Оплата",
    checkout_placing: "Оформлення...",
    checkout_place_order: "Оформити замовлення",
    checkout_your_order: "Ваше замовлення",
    checkout_subtotal: "Підсумок",
    checkout_shipping_label: "Доставка",
    checkout_shipping_calc: "Розраховується на наступному кроці",
    checkout_total: "Разом",
    checkout_confirmed: "ЗАМОВЛЕННЯ ПІДТВЕРДЖЕНО",
    checkout_thank_you: "Дякуємо за ваше замовлення!",
    checkout_back_home: "На головну",

    // Login
    login_title: "ВХІД",
    login_welcome: "Ласкаво просимо",
    login_email: "Email",
    login_password: "Пароль",
    login_signing_in: "ВХІД...",
    login_sign_in_btn: "УВІЙТИ",
    login_no_account: "Немає акаунту?",
    login_register_link: "Реєстрація",

    // Register
    register_title: "РЕЄСТРАЦІЯ",
    register_subtitle: "Створіть свій акаунт",
    register_username: "Ім'я користувача",
    register_email: "Email",
    register_password: "Пароль",
    register_confirm_password: "Підтвердьте пароль",
    register_creating: "СТВОРЕННЯ АКАУНТУ...",
    register_create_btn: "СТВОРИТИ АКАУНТ",
    register_have_account: "Вже є акаунт?",
    register_sign_in_link: "Увійти",

    // Product detail
    product_not_found: "Товар не знайдено.",
    product_go_back: "Повернутись",
    product_tax_note: "Ціна включає всі податки",
    product_size: "Розмір",
    product_find_size: "ПІДІБРАТИ РОЗМІР | ТАБЛИЦЯ РОЗМІРІВ",
    product_color: "Колір",
    product_select_size_color: "Будь ласка, оберіть розмір та колір",
    product_select_size: "Будь ласка, оберіть розмір",
    product_select_color: "Будь ласка, оберіть колір",
    product_added: "ДОДАНО ✓",
    product_add: "ДОДАТИ",

    // Firebase error messages
    err_invalid_email: "Невірна адреса електронної пошти.",
    err_user_not_found: "Акаунт з такою поштою не знайдено.",
    err_wrong_password: "Невірний пароль.",
    err_invalid_credential: "Невірна пошта або пароль.",
    err_too_many_requests: "Забагато спроб. Спробуйте пізніше.",
    err_user_disabled: "Цей акаунт заблоковано.",
    err_default: "Щось пішло не так. Спробуйте ще раз.",
    err_email_in_use: "Акаунт з такою поштою вже існує.",
    err_weak_password: "Пароль має містити щонайменше 6 символів.",
    err_not_allowed: "Реєстрація через email/пароль не дозволена.",
    err_register_default: "Реєстрація не вдалась. Спробуйте ще раз.",
    err_passwords_dont_match: "Паролі не збігаються.",
    err_password_length: "Пароль має містити щонайменше 6 символів.",
  },

  EN: {
    // Navigation
    nav_home: "Home",
    nav_collections: "Collections",
    nav_new: "New",
    nav_cart: "Cart",
    nav_wishlist: "Wishlist",
    nav_search: "Search",
    nav_menu: "Menu",
    nav_logo: "Logo",
    nav_account: "Account",
    nav_sign_in: "Sign in",
    nav_logout: "Sign out",
    nav_signed_in_as: "Signed in as",
    nav_sign_out_hint: "— click to sign out",

    // Hero
    hero_men: "MEN",
    hero_women: "WOMEN",
    hero_kids: "KIDS",
    hero_search_placeholder: "Search",
    hero_new_collection: "NEW\nCOLLECTION",
    hero_new_collection_line1: "NEW",
    hero_new_collection_line2: "COLLECTION",
    hero_summer: "Summer",
    hero_go_to_shop: "Go To Shop",
    hero_prev: "Previous",
    hero_next: "Next",
    hero_featured: "Featured products",
    hero_categories: "Categories",

    // Collections section
    collections_see_all: "See All",
    collections_heading_1: "XIV",
    collections_heading_2: "Collections",
    collections_heading_3: "23-24",
    collections_filter_all: "(All)",
    collections_filter_men: "Men",
    collections_filter_women: "Women",
    collections_filter_kids: "Kid",
    collections_filters: "Filters(+)",
    collections_sort_asc: "Less to more",
    collections_sort_desc: "More to Less",
    collections_more: "More",

    // Approach section
    approach_heading: "Our Approach to fashion design",
    approach_img_alt: "Collection editorial",

    // Newsletter section
    newsletter_label: "Newsletter",
    newsletter_heading: "Stay In Touch",
    newsletter_placeholder: "Your email address",
    newsletter_btn: "SUBSCRIBE",

    // Footer
    footer_info: "Info",
    footer_pricing: "Pricing",
    footer_about: "About",
    footer_contacts: "Contacts",
    footer_lang: "Languages",
    footer_technologies: "Technologies",
    footer_copyright: "© 2024 — copyright",
    footer_privacy: "privacy",
    footer_terms: "Terms",
    footer_to_top: "To top",

    // Breadcrumb
    breadcrumb_home: "Home",
    breadcrumb_products: "Products",

    // Products page
    products_size: "Size",
    products_availability: "Availability",
    products_in_stock: "In Stock (450)",
    products_out_of_stock: "Out Of Stock (18)",
    products_no_options: "No options available",
    products_clear_all: "Clear all filters",
    products_search_placeholder: "Search products",
    products_all_tags: "All",
    products_colors: "Colors",
    products_price_range: "Price Range",
    products_collections: "Collections",
    products_ratings: "Ratings",
    products_category_all: "(All)",
    products_category_men: "Men",
    products_category_women: "Women",
    products_category_kids: "Kid",
    products_sort_asc: "Less to more",
    products_sort_desc: "More to Less",
    products_no_results: "No products found.",
    products_clear_filters: "Clear filters",
    products_view: "View Product",
    products_count_1: "1 product",
    products_count_few: "products",
    products_count_many: "products",

    // Cart
    cart_tab: "Shopping bag",
    cart_favorites_tab: "Favourites",
    cart_empty: "Your cart is empty.",
    cart_go_to_shop: "Go To Shop",
    cart_size: "Size:",
    cart_color: "Color:",
    cart_remove: "Remove",
    cart_order_summary: "Order Summary",
    cart_subtotal: "Subtotal",
    cart_shipping: "Shipping",
    cart_total: "Total (Tax incl.)",
    cart_terms: "I agree to the Terms and Conditions",
    cart_continue: "Continue",

    // Checkout
    checkout_title: "Checkout",
    checkout_info: "Information",
    checkout_contact_info: "Contact info",
    checkout_shipping_address: "Shipping address",
    checkout_phone: "Phone",
    checkout_first_name: "First Name",
    checkout_last_name: "Last Name",
    checkout_address: "Address",
    checkout_city: "City",
    checkout_postal: "Postal Code",
    checkout_country: "Country",
    checkout_state: "State / Region",
    checkout_shipping_section: "Shipping",
    checkout_standard_shipping: "Standard Shipping",
    checkout_payment_section: "Payment",
    checkout_placing: "Placing Order...",
    checkout_place_order: "Place Order",
    checkout_your_order: "Your Order",
    checkout_subtotal: "Subtotal",
    checkout_shipping_label: "Shipping",
    checkout_shipping_calc: "Calculated at next step",
    checkout_total: "Total",
    checkout_confirmed: "ORDER CONFIRMED",
    checkout_thank_you: "Thank you for your purchase!",
    checkout_back_home: "Back to Home",

    // Login
    login_title: "SIGN IN",
    login_welcome: "Welcome back",
    login_email: "Email",
    login_password: "Password",
    login_signing_in: "SIGNING IN...",
    login_sign_in_btn: "SIGN IN",
    login_no_account: "Don't have an account?",
    login_register_link: "Register",

    // Register
    register_title: "REGISTER",
    register_subtitle: "Create your account",
    register_username: "Username",
    register_email: "Email",
    register_password: "Password",
    register_confirm_password: "Confirm Password",
    register_creating: "CREATING ACCOUNT...",
    register_create_btn: "CREATE ACCOUNT",
    register_have_account: "Already have an account?",
    register_sign_in_link: "Sign in",

    // Product detail
    product_not_found: "Product not found.",
    product_go_back: "Go back",
    product_tax_note: "MRP incl. of all taxes",
    product_size: "Size",
    product_find_size: "FIND YOUR SIZE | MEASUREMENT GUIDE",
    product_color: "Color",
    product_select_size_color: "Please select a size and color",
    product_select_size: "Please select a size",
    product_select_color: "Please select a color",
    product_added: "ADDED ✓",
    product_add: "ADD",

    // Firebase error messages
    err_invalid_email: "Invalid email address.",
    err_user_not_found: "No account found with this email.",
    err_wrong_password: "Incorrect password.",
    err_invalid_credential: "Invalid email or password.",
    err_too_many_requests: "Too many attempts. Please try again later.",
    err_user_disabled: "This account has been disabled.",
    err_default: "Something went wrong. Please try again.",
    err_email_in_use: "An account with this email already exists.",
    err_weak_password: "Password must be at least 6 characters.",
    err_not_allowed: "Email/password sign-in is not enabled.",
    err_register_default: "Registration failed. Please try again.",
    err_passwords_dont_match: "Passwords do not match.",
    err_password_length: "Password must be at least 6 characters.",
  },
} as const;

export type TranslationKey = keyof typeof translations.UA;

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
  productCountLabel: (n: number) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang");
    return (stored === "EN" || stored === "UA") ? stored : "UA";
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: TranslationKey): string => {
    return translations[lang][key] as string;
  };

  const productCountLabel = (n: number): string => {
    if (lang === "EN") {
      return n === 1 ? translations.EN.products_count_1 : `${n} ${translations.EN.products_count_many}`;
    }
    // Ukrainian plural rules
    if (n === 1) return translations.UA.products_count_1;
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
      return `${n} ${translations.UA.products_count_few}`;
    }
    return `${n} ${translations.UA.products_count_many}`;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, productCountLabel }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
