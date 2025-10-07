import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Payment = () => {
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
              Оплата и подписки
            </h1>
            <p className="text-muted-foreground">Управление через Telegram бот</p>
          </div>

          <div className="space-y-8">
            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 sm:p-10 rounded-2xl text-center">
              <Icon name="Bot" className="text-primary mx-auto mb-6" size={64} />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Telegram Bot Panel</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Все подписки и платежи оформляются через нашего Telegram бота. 
                Удобная панель управления, мгновенная активация, история покупок.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-sm sm:text-lg px-6 sm:px-12 py-5 sm:py-6 border-0 w-full sm:w-auto"
                onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
              >
                <Icon name="ExternalLink" className="mr-2" size={20} />
                <span className="truncate">Открыть @KamiPanelbot</span>
              </Button>
            </Card>

            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 sm:p-10 rounded-2xl space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="HelpCircle" className="text-primary" size={28} />
                  Как купить подписку?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Откройте Telegram бот</h3>
                      <p className="text-muted-foreground text-sm sm:text-base break-words">Нажмите на кнопку выше или перейдите по ссылке <a href="https://t.me/KamiPanelbot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">@KamiPanelbot</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Выберите продукт</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">EspVision (базовый), ArtVision (артефакты) или PrivateVision (премиум)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Выберите период</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">1 день, 7 дней, 30 дней — выберите удобный срок</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Оплатите</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">Доступны карты РФ, криптовалюта, электронные кошельки</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Получите доступ</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">Мгновенная активация! Ключ и инструкция придут в бот</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="CreditCard" className="text-primary" size={28} />
                  Способы оплаты
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-primary/20 rounded-xl p-4 bg-card/20">
                    <Icon name="CreditCard" className="text-primary mb-3" size={32} />
                    <h3 className="font-semibold mb-2">Банковские карты</h3>
                    <p className="text-sm text-muted-foreground">Visa, Mastercard, МИР — карты РФ и СНГ</p>
                  </div>

                  <div className="border border-primary/20 rounded-xl p-4 bg-card/20">
                    <Icon name="Wallet" className="text-primary mb-3" size={32} />
                    <h3 className="font-semibold mb-2">Электронные кошельки</h3>
                    <p className="text-sm text-muted-foreground">ЮMoney, QIWI, WebMoney</p>
                  </div>

                  <div className="border border-primary/20 rounded-xl p-4 bg-card/20">
                    <Icon name="Bitcoin" className="text-primary mb-3" size={32} />
                    <h3 className="font-semibold mb-2">Криптовалюта</h3>
                    <p className="text-sm text-muted-foreground">BTC, ETH, USDT, TON</p>
                  </div>

                  <div className="border border-primary/20 rounded-xl p-4 bg-card/20">
                    <Icon name="Smartphone" className="text-primary mb-3" size={32} />
                    <h3 className="font-semibold mb-2">Мобильные платежи</h3>
                    <p className="text-sm text-muted-foreground">Баланс телефона (МТС, Билайн, МегаФон)</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="ShieldCheck" className="text-primary" size={28} />
                  Гарантии безопасности
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Все платежи проходят через защищенные платежные системы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Мы не храним данные вашей банковской карты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Мгновенная активация после оплаты — автоматическая система</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Чек об оплате придёт в Telegram автоматически</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="RefreshCcw" className="text-primary" size={28} />
                  Возврат средств
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Мы стремимся обеспечить лучший сервис, но понимаем, что иногда возникают ситуации, требующие возврата средств.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Возврат возможен в течение 24 часов, если продукт не был активирован</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>При технических проблемах со стороны ExoVision — полный возврат или продление подписки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-red-500 mt-1 flex-shrink-0" size={18} />
                    <span>Возврат невозможен после активации ключа или при блокировке игрового аккаунта</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-red-500 mt-1 flex-shrink-0" size={18} />
                    <span>Возврат невозможен, если продукт работает корректно, но вам не подошёл</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="MessageCircle" className="text-primary" size={28} />
                  Нужна помощь?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Возникли вопросы по оплате? Наша поддержка работает 24/7:
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10"
                    onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
                  >
                    <Icon name="Bot" className="mr-2" size={18} />
                    Написать боту
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10"
                    onClick={() => window.open('https://t.me/+xNvCqrGN6uNhMTdi', '_blank')}
                  >
                    <Icon name="Users" className="mr-2" size={18} />
                    Telegram чат
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10"
                    onClick={() => window.open('https://discord.gg/6JuG3e484Y', '_blank')}
                  >
                    <Icon name="Gamepad2" className="mr-2" size={18} />
                    Discord
                  </Button>
                </div>
              </section>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;