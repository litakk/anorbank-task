export default function Footer() {
    return (<>
        <footer className="bg-surface-container-low border-t border-border-subtle py-10 sm:py-12">
            <div className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="font-bold text-secondary text-sm tracking-wider">ANORBANK</div>
                    <div className="font-bold text-secondary text-sm tracking-wider">Developed and Designed by Feruz Aliev</div>
                    <p className="text-xs text-secondary leading-relaxed">
                        © 2026 Тестовое задание от «Anor Bank».<br />
                    </p>
                </div>
                <div className="flex flex-wrap gap-6 sm:gap-8 sm:justify-end items-center">
                    <a className="text-xs text-secondary hover:underline decoration-primary transition-all" href="#!">О банке</a>
                    <a className="text-xs text-secondary hover:underline decoration-primary transition-all" href="#!">Тарифы</a>
                    <a className="text-xs text-secondary hover:underline decoration-primary transition-all" href="#!">Безопасность</a>
                    <a className="text-xs text-secondary hover:underline decoration-primary transition-all" href="#!">Контакты</a>
                </div>
            </div>
        </footer>
    </>)
}