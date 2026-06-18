import type { CardData } from '../data/cards';
import CardItem from './CardItem';

interface CardGridProps {
  cards: CardData[];
  selectedCardIds: number[];
  onAddCard: (id: number) => void;
  onRemoveCard: (id: number) => void;
}

export default function CardGrid({ cards, selectedCardIds, onAddCard, onRemoveCard }: CardGridProps) {
  const handleToggle = (id: number, isSelected: boolean) => {
    if (isSelected) {
      onRemoveCard(id);
    } else {
      onAddCard(id);
    }
  };

  return (
    <section className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-16 sm:mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card) => {
          const isSelected = selectedCardIds.includes(card.id);
          
          return (
            <CardItem
              key={card.id}
              card={card}
              isSelected={isSelected}
              onToggle={() => handleToggle(card.id, isSelected)}
            />
          );
        })}
      </div>
    </section>
  );
}