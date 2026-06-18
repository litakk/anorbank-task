import type { CardData } from '../data/cards';

interface CardItemProps {
  card: CardData;
  isSelected: boolean;
  onToggle: (id: number) => void;
}

export default function CardItem({ card, isSelected, onToggle }: CardItemProps) {
  return (
    <div
      className={`bg-white p-4 sm:p-6 border relative flex flex-col group transition-all duration-300 ${
        isSelected ? 'border-red-600 ring-1 ring-red-600 shadow-md' : 'border-border-subtle hover:border-outline'
      }`}
    >
      <div className="h-32 sm:h-40 mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
        <img
          className="w-full h-full object-cover object-center transition-transform group-hover:scale-105"
          src={card.image}
          alt={card.title}
        />
      </div>

      <span className="text-[10px] font-bold tracking-widest uppercase text-secondary mb-2">
        {card.type}
      </span>

      <h3 className="text-md font-bold mb-4 leading-tight min-h-[40px]">
        {card.title}
      </h3>

      <ul className="space-y-2 mb-6 sm:mb-8 flex-grow">
        {card.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <svg
              className="w-4 h-4 text-green-600 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onToggle(card.id)}
        className={`w-full h-11 sm:h-12 border font-semibold text-sm transition-colors cursor-pointer ${
          isSelected
            ? 'border-red-600 text-red-600 bg-red-50 hover:bg-red-100'
            : 'border-outline text-on-surface hover:text-red-600 hover:border-red-600'
        }`}
      >
        {isSelected ? 'Выбрано / Удалить' : 'Добавить'}
      </button>
    </div>
  );
}