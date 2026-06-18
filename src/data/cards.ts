export interface CardFeatures {
  fee: string;
  cashback: string;
  sms: string;
  withdrawal: string;
}

export interface CardData {
  id: number;
  type: string;
  title: string;
  shortTitle: string;
  image: string;
  bullets: string[];
  features: CardFeatures;
}

export const CARDS_DATA: CardData[] = [
  {
    id: 1,
    type: 'MASTERCARD',
    title: 'Anorbank Black Mastercard',
    shortTitle: 'Black Mastercard',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTKCigpRVNgCkuorlUxJlJqH5Agt0lUuZ3G6Jb58-pLVfsmoQFdJmRCOqimHVHZ7RFGORJW6-PQoKlvMF20A61yk8C24Xb1CHaesywEEjEILCAnS9uHUB5NbXN2r2Zb4RnmT4Cna6qgJ7o6XCEq8HOT40Xv3iK9QexuOPfT-N2azt60lh92UTH1GhtmnLfKisG_0l6jay7H9QN-gtD89GNfXDaFcY4PAIKcD4InJHD_XSY3AhlaNKisKzju19QdZROI5ZgDKC7bDqK',
    bullets: ['Кэшбэк до 5%', '0% за обслуживание'],
    features: {
      fee: '0 сум',
      cashback: 'До 5% на всё',
      sms: 'Бесплатно',
      withdrawal: 'До 10 млн в месяц',
    },
  },
  {
    id: 2,
    type: 'VISA INFINITE',
    title: 'Anorbank Red Premium',
    shortTitle: 'Red Premium',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYdzmZgakP3VnputllgzNQzKog0a6D5vGKkiiFY7Dz27eMWttLfF4yzCCK8W6S7q8crsS1O28Ytg59LryP_nmAKAfIf-Oo6BlEi6UwUMrFmosR2zw2SEQ20LyNOJlE2Io_lo65liw7hpEhX7aiUyVh7m0JFEkxXxqM8_ukKRgO8OgjQ7fiaxPcSB5I5Es2UsLXkG9syzOHBhy9GNo7YNh2ZPf7DztDYR2bDzlLM0m5GifhllbuSx9L29yOu_EWeuxl06ZJaXd_9iMu',
    bullets: ['Лимит до 50 млн', 'Консьерж-сервис'],
    features: {
      fee: '0 сум',
      cashback: 'До 2% + Бонусы',
      sms: 'Бесплатно',
      withdrawal: 'Без ограничений',
    },
  },
  {
    id: 3,
    type: 'HUMO / UZCARD',
    title: 'Anorbank Daily Plus',
    shortTitle: 'Daily Plus',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2wngZBwqgsWBa0YylMTAiC9JvVYtfwqcld5e__wEjsHbtymShCN2OKq-9TWJlmhNJOKKVt__TySXPh6ENhhecow2SJ-FkUJQBObckebNng0Qu_cWBEPsje43YA2rbplTIzTizDbYOkzbXmahEZN3PE2iRwQ75vxLRhlvELxT9vRv7Y_NQpiI9G4uq_IfbQP9BHizlC5lpZHFnVY3Y3iGKwpI1eFK3qk_2r6MrD-l3du1525Gr3UyAFzeyaDkDwruMNSfnrL-BNUCM',
    bullets: ['Бесплатные переводы', 'Начисление % на остаток'],
    features: {
      fee: '0 сум',
      cashback: 'До 1% + Ставка %',
      sms: 'Бесплатно',
      withdrawal: 'До 5 млн в месяц',
    },
  },
  {
    id: 4,
    type: 'VIRTUAL',
    title: 'Anorbank Digital One',
    shortTitle: 'Digital One',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCERVE2A0e0agvQMnvZYpxcl9ENYqnRcq8gPM_Zfn3hXUG8eJ5BOyOXflFNx6ddE7wBxEuoMp0JsmQFFvQN_iOQkdEr3pw-iv7t_mOrQbNWDw9bcBCCdJk0ymdYSDAvUw-Zf6IxYLbgVzAldefL5TAqCgnI0zDOdL860CzBbOUK8BnQGb0f3-gkVSKJLi3ir0m2bH4Lf50vcVV9hxWzJJM0GRapRQYKexnphatBkAkc5jQk7F4caAiFkmVuJs3tjwPZ-hOFQJ17REs0',
    bullets: ['Мгновенный выпуск', 'Безопасные онлайн-покупки'],
    features: {
      fee: '0 сум',
      cashback: 'До 1% на онлайн',
      sms: 'Бесплатно',
      withdrawal: 'Недоступно',
    },
  },
  {
    id: 5,
    type: 'РАССРОЧКА / КРЕДИТНАЯ',
    title: 'Anorbank TRIA',
    shortTitle: 'TRIA карта',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYdzmZgakP3VnputllgzNQzKog0a6D5vGKkiiFY7Dz27eMWttLfF4yzCCK8W6S7q8crsS1O28Ytg59LryP_nmAKAfIf-Oo6BlEi6UwUMrFmosR2zw2SEQ20LyNOJlE2Io_lo65liw7hpEhX7aiUyVh7m0JFEkxXxqM8_ukKRgO8OgjQ7fiaxPcSB5I5Es2UsLXkG9syzOHBhy9GNo7YNh2ZPf7DztDYR2bDzlLM0m5GifhllbuSx9L29yOu_EWeuxl06ZJaXd_9iMu',
    bullets: ['Льготный период до 50 дней', 'Рассрочка у партнеров'],
    features: {
      fee: '0 сум',
      cashback: 'До 3% у партнеров',
      sms: '3 000 сум/мес',
      withdrawal: 'До 2 млн без %',
    },
  },
  {
    id: 6,
    type: 'HUMO СТАНДАРТ',
    title: 'Anorbank Humo Classic',
    shortTitle: 'Humo Classic',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2wngZBwqgsWBa0YylMTAiC9JvVYtfwqcld5e__wEjsHbtymShCN2OKq-9TWJlmhNJOKKVt__TySXPh6ENhhecow2SJ-FkUJQBObckebNng0Qu_cWBEPsje43YA2rbplTIzTizDbYOkzbXmahEZN3PE2iRwQ75vxLRhlvELxT9vRv7Y_NQpiI9G4uq_IfbQP9BHizlC5lpZHFnVY3Y3iGKwpI1eFK3qk_2r6MrD-l3du1525Gr3UyAFzeyaDkDwruMNSfnrL-BNUCM',
    bullets: ['Стандартные платежи', 'Оплата в один клик'],
    features: {
      fee: '0 сум',
      cashback: 'Без кэшбэка',
      sms: 'Бесплатно',
      withdrawal: 'До 3 млн в месяц',
    },
  },
];
