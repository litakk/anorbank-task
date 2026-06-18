import type { CardData } from '../data/cards';

// Типизируем ключи фич для функции сравнения строки
type FeatureKey = 'fee' | 'cashback' | 'sms' | 'withdrawal';

interface ComparisonTableProps {
    selectedCards: CardData[];
    tableSlots: (CardData | null)[];
    removeCard: (id: number) => void;
    isRowDifferent: (rowKey: FeatureKey) => boolean;
}

// Конфиг полей для динамического рендеринга строк таблицы
const FEATURE_ROWS: { key: FeatureKey; label: string }[] = [
    { key: 'fee', label: 'Обслуживание' },
    { key: 'cashback', label: 'Кэшбэк' },
    { key: 'sms', label: 'SMS-информирование' },
    { key: 'withdrawal', label: 'Снятие наличных' },
];

export default function ComparisonTable({
    selectedCards,
    tableSlots,
    removeCard,
    isRowDifferent,
}: ComparisonTableProps) {
    return (
        <section className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

            {/* ----------------- МОБИЛЬНАЯ ВЕРСИЯ (<640px) ----------------- */}
            <div className="sm:hidden">
                <h2 className="text-base font-bold text-on-surface mb-4">Характеристики</h2>

                {selectedCards.length === 0 ? (
                    <div className="border border-dashed border-gray-200 bg-gray-50/50 rounded-lg py-10 px-4 text-center">
                        <p className="text-sm text-secondary">Выберите карты выше, чтобы сравнить условия</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {selectedCards.map((card) => (
                            <div key={card.id} className="bg-white border border-red-600 rounded-lg shadow-sm p-4 relative">
                                <button
                                    onClick={() => removeCard(card.id)}
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-[12px] cursor-pointer z-10 shadow-md"
                                    aria-label="Убрать карту из сравнения"
                                >
                                    ×
                                </button>

                                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border-subtle">
                                    <div className="h-12 w-16 flex-shrink-0 flex items-center justify-center">
                                        <img className="max-h-full w-auto object-contain" src={card.image} alt={card.title} />
                                    </div>
                                    <p className="text-sm font-bold text-on-surface">{card.shortTitle}</p>
                                </div>

                                <dl className="divide-y divide-border-subtle">
                                    {FEATURE_ROWS.map(({ key, label }) => {
                                        const isDiff = isRowDifferent(key);
                                        return (
                                            <div key={key} className="flex items-center justify-between gap-3 py-2.5">
                                                <dt className={`text-xs font-medium flex-shrink-0 ${isDiff ? 'text-red-600 font-semibold' : 'text-secondary'}`}>
                                                    {label}
                                                </dt>
                                                <dd className={`text-xs text-right font-semibold ${isDiff ? 'text-red-600 font-bold' : ''}`}>
                                                    {card.features[key]}
                                                </dd>
                                            </div>
                                        );
                                    })}
                                </dl>

                                <a
                                    href="https://www.anorbank.uz/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 w-full bg-red-600 text-white h-11 font-semibold text-sm hover:bg-red-700 flex items-center justify-center transition-all rounded"
                                >
                                    Заказать карту
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* ----------------- ДЕСКТОПНАЯ ВЕРСИЯ (>=640px) ----------------- */}
            <div className="hidden sm:block">

                {/* Шапка таблицы */}
                <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="flex items-end pb-4 border-b border-border-subtle">
                        <span className="text-base sm:text-lg font-bold text-on-surface">Характеристики</span>
                    </div>

                    {tableSlots.map((card, index) => {
                        if (!card) {
                            return (
                                <div key={`empty-header-${index}`} className="border border-dashed border-gray-200 bg-gray-50/50 rounded shadow-none min-h-[120px]" />
                            );
                        }
                        return (
                            <div key={card.id} className="bg-white p-3 sm:p-4 border border-red-600 relative group shadow-sm rounded">
                                <button
                                    onClick={() => removeCard(card.id)}
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-[12px] opacity-100 cursor-pointer z-10 shadow-md"
                                >
                                    ×
                                </button>
                                <div className="h-16 sm:h-20 mb-2 flex items-center justify-center">
                                    <img className="max-h-full w-auto object-contain" src={card.image} alt={card.title} />
                                </div>
                                <p className="text-xs font-semibold text-center text-on-surface">{card.shortTitle}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Строки данных */}
                <div className="space-y-2">
                    {FEATURE_ROWS.map(({ key, label }) => {
                        const isDiff = isRowDifferent(key);
                        return (
                            <div
                                key={key}
                                className={`grid grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 items-center border transition-all ${isDiff
                                        ? 'bg-red-50/50 border-l-4 border-red-600 border-y-transparent border-r-transparent'
                                        : 'bg-white border-transparent'
                                    }`}
                            >
                                <div className={`text-xs sm:text-sm ${isDiff ? 'text-red-600 font-semibold' : 'text-secondary font-medium'}`}>
                                    {label}
                                </div>
                                {tableSlots.map((card, index) =>
                                    card ? (
                                        <div
                                            key={card.id}
                                            className={`text-xs sm:text-sm font-semibold ${isDiff ? 'text-red-600 font-bold' : ''}`}
                                        >
                                            {card.features[key]}
                                        </div>
                                    ) : (
                                        <div key={`empty-${key}-${index}`} className="text-outline-variant italic text-xs sm:text-sm text-gray-300">
                                            —
                                        </div>
                                    )
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Кнопки действий под таблицей */}
                <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
                    <div></div>
                    {tableSlots.map((card, index) =>
                        card ? (
                            <a
                                key={card.id}
                                href="https://www.anorbank.uz/"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-red-600 text-white h-11 sm:h-12 font-semibold text-xs sm:text-sm hover:bg-red-700 flex items-center justify-center transition-all rounded"
                            >
                                Заказать карту
                            </a>
                        ) : (
                            <div key={`empty-btn-${index}`} />
                        )
                    )}
                </div>

            </div>
        </section>
    );
}