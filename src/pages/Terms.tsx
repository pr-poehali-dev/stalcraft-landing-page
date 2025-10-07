import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/logo.svg" 
                alt="ExoVision Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10" 
                style={{ filter: 'drop-shadow(0 0 8px rgba(255, 20, 147, 0.6))' }}
              />
              <span className="text-lg sm:text-2xl font-bold text-neon tracking-wider">ExoVision Stalcraft</span>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = '/'}
              className="border-primary/20 hover:bg-primary/10"
            >
              <Icon name="Home" className="mr-2" size={16} />
              На главную
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{background: 'linear-gradient(to right, #8B5CF6, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Условия использования
            </h1>
            <p className="text-muted-foreground">Обновлено: Октябрь 2025</p>
          </div>

          <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 sm:p-10 rounded-2xl space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Icon name="FileText" className="text-primary" size={28} />
                1. Общие положения
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Используя продукты ExoVision (EspVision, ArtVision, PrivateVision), вы соглашаетесь с настоящими условиями использования. 
                Если вы не согласны с какими-либо из этих условий, пожалуйста, не используйте наши продукты.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ExoVision — это независимый проект, не связанный с разработчиками игры STALCRAFT. 
                Мы предоставляем программное обеспечение "как есть" без каких-либо гарантий.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Icon name="AlertTriangle" className="text-primary" size={28} />
                2. Риски и ответственность
              </h2>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Использование читов нарушает правила игры STALCRAFT и может привести к блокировке вашего игрового аккаунта</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Вы используете наши продукты на свой страх и риск. ExoVision не несёт ответственности за блокировки аккаунтов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Мы прилагаем усилия для безопасности, но не можем гарантировать 100% защиту от обнаружения</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Возврат средств невозможен в случае блокировки вашего игрового аккаунта</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Icon name="ShieldCheck" className="text-primary" size={28} />
                3. Правила использования
              </h2>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Один ключ активации = один игровой аккаунт. Передача ключей третьим лицам запрещена</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Запрещено декомпилировать, модифицировать или распространять наше программное обеспечение</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Запрещено использовать продукты для коммерческой выгоды (продажа игровых ресурсов и т.п.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Требуется соблюдение системных требований: Windows 8-11, стабильное интернет-соединение</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Icon name="CreditCard" className="text-primary" size={28} />
                4. Подписка и оплата
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 break-words">
                Все подписки приобретаются через Telegram бот <a href="https://t.me/KamiPanelbot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">@KamiPanelbot</a>. 
                Подписка активируется мгновенно после оплаты.
              </p>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Подписка действует в течение оплаченного периода (день, неделя, месяц)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Автопродление отсутствует — подписку нужно продлевать вручную</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Возврат средств возможен только при технических проблемах со стороны ExoVision</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Icon name="RefreshCw" className="text-primary" size={28} />
                5. Обновления и поддержка
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 break-words">
                Мы гарантируем быстрое обновление продуктов после патчей игры. Поддержка доступна 24/7 через Telegram и Discord.
              </p>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Обновления выходят в течение нескольких часов после игровых патчей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Техподдержка отвечает в течение 1-24 часов в зависимости от сложности вопроса</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="break-words">Мы оставляем за собой право изменять функционал продуктов для повышения безопасности</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Icon name="Lock" className="text-primary" size={28} />
                6. Конфиденциальность
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed break-words">
                Мы не собираем и не храним персональные данные игроков. Для работы продукта требуется только игровой аккаунт и 
                Telegram ID для привязки подписки. Ваши игровые данные не передаются третьим лицам.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Icon name="Scale" className="text-primary" size={28} />
                7. Изменение условий
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed break-words">
                ExoVision оставляет за собой право изменять данные условия использования в любое время. 
                Об изменениях мы сообщаем в нашем Telegram-канале. Продолжая использовать продукты после изменений, 
                вы автоматически соглашаетесь с новыми условиями.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Icon name="MessageCircle" className="text-primary" size={28} />
                8. Контакты
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                По вопросам условий использования обращайтесь:
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/10"
                  onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
                >
                  <Icon name="Bot" className="mr-2" size={18} />
                  @KamiPanelbot
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/10"
                  onClick={() => window.open('https://t.me/+xNvCqrGN6uNhMTdi', '_blank')}
                >
                  <Icon name="Users" className="mr-2" size={18} />
                  Telegram чат
                </Button>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;