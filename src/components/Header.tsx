import { useState } from 'react';

export default function Header() {
  // Добавляем локальный стейт, которого не хватало
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-white border-b border-border-subtle shadow-sm bg-gray-100">
        <div className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-16 flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-8 min-w-0">
            <a href="https://www.anorbank.uz/">
              <img
                alt="Anorbank Logo"
                className="h-7 sm:h-8 w-auto flex-shrink-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY-rcfqGFG-09in8b9jMhmp8Hrf1bWIzLFXzQ9k17B_CmL2AdEBbtClQ7vKzHjDBSv5GWAb6vMihGY-XnSXu9yzsL-YL8ZkZvJ2jPHnwu-iI3tjU4U9rZsBAm0MbnbXmKW5Eq0wQclNruqw9fURVEXlnnAua9SEiwiOn0idZM7FCiaAwsU3DsVVL4CL4Vb_PzIQRwYSlQVRSRg3zHVANZClvL7AI284Yxr-IzHFCRr19iNpxLe6MRGOx9GvF91a28ilRl-6qmc_0iT"
              />
            </a>
            <nav className="hidden md:flex gap-6 font-label-md text-sm font-semibold">
              <a className="text-slate-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-colors duration-200" href="#cards">Карты</a>
              <a className="text-slate-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-colors duration-200" href="#credits">Кредиты</a>
              <a className="text-slate-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-colors duration-200" href="#deposits">Депозиты</a>
              <a className="text-slate-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-colors duration-200" href="#services">Услуги</a>
            </nav>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="relative hidden sm:inline-block group py-2">
              <button className="flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition-colors cursor-pointer">
                <span>RU</span>
                <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">
                  <img src="/arrow-down.png" alt="arrow-down" />
                </span>
              </button>
              <div className="absolute right-0 top-full pt-2 w-24 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white border border-border-subtle shadow-lg flex flex-col py-1">
                  <button className="px-4 py-2 text-left text-sm font-semibold text-primary bg-surface-container-low hover:bg-surface-container transition-colors w-full cursor-pointer">
                    Русский
                  </button>
                  <button className="px-4 py-2 text-left text-sm font-medium text-secondary hover:text-primary hover:bg-surface-container transition-colors w-full cursor-pointer">
                    O'zbekcha
                  </button>
                </div>
              </div>
            </div>

            <a
              href="https://www.anorbank.uz/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block text-slate-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-colors duration-200"
            >
              Заказать карту
            </a>

            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-on-surface"
              aria-label={mobileNavOpen ? 'Закрыть меню' : 'Открыть меню'}
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              {mobileNavOpen ? (
                <img className="w-6 h-6" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=" alt="close" />
              ) : (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileNavOpen && (
          <nav className="md:hidden border-t border-border-subtle bg-surface-white px-4 sm:px-6 py-4 flex flex-col gap-4">
            <a className="text-primary font-label-md text-sm font-semibold" href="#">Карты</a>
            <a className="text-secondary font-label-md text-sm font-semibold hover:text-primary transition-colors" href="#">Кредиты</a>
            <a className="text-secondary font-label-md text-sm font-semibold hover:text-primary transition-colors" href="#">Депозиты</a>
            <a className="text-secondary font-label-md text-sm font-semibold hover:text-primary transition-colors" href="#">Услуги</a>
            <button className="text-left text-sm font-semibold text-secondary hover:text-primary transition-colors">RU/UZ</button>
            <a
              href="https://www.anorbank.uz/"
              target="_blank"
              rel="noreferrer"
              className="bg-primary-container text-white font-semibold text-sm h-11 flex items-center justify-center hover:opacity-90 transition-all cursor-pointer"
            >
              Заказать карту
            </a>
          </nav>
        )}
      </header>
    </>
  );
}