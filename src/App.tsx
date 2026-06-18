import { useCardStore } from '../store/useCardStore';
import { CARDS_DATA } from './data/cards';
import CardGrid from './components/CardGrid';
import ComparisonTable from './components/ComparisonTable';
import Footer from './components/Footer';
import Header from './components/Header';
import ComparisonHeader from './components/ComparisonHeader';

// Явно определяем тип ключей характеристик, соответствующий ComparisonTable
type FeatureKey = 'fee' | 'cashback' | 'sms' | 'withdrawal';

export default function App() {
  const { selectedCardIds, addCard, removeCard } = useCardStore();

  const selectedCards = CARDS_DATA.filter(card => selectedCardIds.includes(card.id));
  const emptySlotsCount = Math.max(0, 3 - selectedCards.length);
  const tableSlots = [...selectedCards, ...Array(emptySlotsCount).fill(null)];

  const isRowDifferent = (featureKey: FeatureKey) => {
    if (selectedCards.length <= 1) return false;
    const firstValue = selectedCards[0].features[featureKey];
    return selectedCards.some(card => card.features[featureKey] !== firstValue);
  };

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      <Header />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 flex-grow">
        <ComparisonHeader />
        <CardGrid
          cards={CARDS_DATA}
          selectedCardIds={selectedCardIds}
          onAddCard={addCard}
          onRemoveCard={removeCard}
        />

        <ComparisonTable
          selectedCards={selectedCards}
          tableSlots={tableSlots}
          removeCard={removeCard}
          isRowDifferent={isRowDifferent}
        />
      </main>

      <Footer />
    </div>
  );
}