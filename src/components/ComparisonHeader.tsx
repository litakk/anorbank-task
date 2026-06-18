import { useCardStore } from '../../store/useCardStore';

export default function ComparisonHeader() {
  const { selectedCardIds, clearAll } = useCardStore();

  return (
    <>
      <section className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-8 sm:mb-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-border-subtle pb-6">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-on-surface mb-2">
              Сравнение продуктов ANORBANK
            </h1>
            <p className="text-sm text-secondary">
              Выберите лучшие условия для ваших финансовых целей
            </p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-xs sm:text-sm font-semibold py-2 px-3 sm:px-4 bg-surface-container rounded-full text-on-surface whitespace-nowrap">
              Выбрано: {selectedCardIds.length} из 3 карт
            </span>
            {selectedCardIds.length > 0 && (
              <button
                className="text-red-600 text-sm font-semibold hover:underline decoration-red-600 flex items-center gap-1 cursor-pointer"
                onClick={clearAll}
              >
                <span>Очистить всё</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
