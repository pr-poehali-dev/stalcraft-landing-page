import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [features, setFeatures] = useState({
    esp: true,
    artefactEsp: false,
    mobEsp: true,
    itemEsp: false,
    barterEsp: true,
  });

  const toggleFeature = (key: string) => {
    setFeatures(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-neon-dark">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 neon-border border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-neon tracking-wider">ExoVision</h1>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Функции</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="neon-glow bg-primary hover:bg-secondary">
            Войти
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhCNUNGNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto text-center animate-fade-in relative z-10">
          <div className="inline-block mb-6">
            <h2 className="text-7xl md:text-9xl font-black mb-2" style={{background: 'linear-gradient(to right, #8B5CF6, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              STALCRAFT
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow"></div>
          </div>
          <p className="text-2xl md:text-3xl text-foreground/80 mb-4 font-light tracking-wide">
            CHEAT BY <span className="text-neon font-bold">ExoVision</span>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Прокачай свою игру до максимума. Видь всё, доминируй везде.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="neon-glow bg-primary hover:bg-secondary text-lg px-10 py-6 rounded-full font-semibold">
              <Icon name="Download" className="mr-2" size={24} />
              Скачать v2.4
            </Button>
            <Button size="lg" variant="outline" className="neon-border text-lg px-10 py-6 rounded-full font-semibold hover:bg-primary/10">
              <Icon name="PlayCircle" className="mr-2" size={24} />
              Смотреть демо
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={20} />
              <span>Undetected</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-secondary" size={20} />
              <span>Instant Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" className="text-primary" size={20} />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4" style={{background: 'linear-gradient(to right, #8B5CF6, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Функции</h3>
            <p className="text-muted-foreground text-lg">Полный контроль над игровым миром</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="neon-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 animate-fade-in hover:scale-105 transition-all group">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full neon-border bg-primary/10 group-hover:animate-pulse-glow">
                    <Icon name="Eye" className="text-primary" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">ESP</h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Видь игроков сквозь стены. Полная информация о противниках.
                  </p>
                  <Switch
                    checked={features.esp}
                    onCheckedChange={() => toggleFeature('esp')}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </Card>

              <Card className="neon-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 animate-fade-in hover:scale-105 transition-all group">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full neon-border bg-secondary/10 group-hover:animate-pulse-glow">
                    <Icon name="Gem" className="text-secondary" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Artefact ESP</h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Находи редкие артефакты через стены и препятствия.
                  </p>
                  <Switch
                    checked={features.artefactEsp}
                    onCheckedChange={() => toggleFeature('artefactEsp')}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </Card>

              <Card className="neon-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 animate-fade-in hover:scale-105 transition-all group">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full neon-border bg-primary/10 group-hover:animate-pulse-glow">
                    <Icon name="Bug" className="text-primary" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Mob ESP</h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Отслеживай всех мобов на карте в реальном времени.
                  </p>
                  <Switch
                    checked={features.mobEsp}
                    onCheckedChange={() => toggleFeature('mobEsp')}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="neon-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 animate-fade-in hover:scale-105 transition-all group">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full neon-border bg-secondary/10 group-hover:animate-pulse-glow">
                    <Icon name="Package" className="text-secondary" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Item ESP</h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Видь ценные предметы и лут на любом расстоянии.
                  </p>
                  <Switch
                    checked={features.itemEsp}
                    onCheckedChange={() => toggleFeature('itemEsp')}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </Card>

              <Card className="neon-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 animate-fade-in hover:scale-105 transition-all group">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full neon-border bg-primary/10 group-hover:animate-pulse-glow">
                    <Icon name="Store" className="text-primary" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Barter ESP</h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Находи торговцев и бартерные точки моментально.
                  </p>
                  <Switch
                    checked={features.barterEsp}
                    onCheckedChange={() => toggleFeature('barterEsp')}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-neon">Тарифы</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="neon-border bg-card/50 backdrop-blur-sm p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">День</h4>
              <p className="text-5xl font-black text-primary mb-6">99₽</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Все функции</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>24 часа доступа</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Обновления</span>
                </li>
              </ul>
              <Button className="w-full neon-glow bg-primary hover:bg-secondary">
                Купить
              </Button>
            </Card>

            <Card className="neon-border bg-card/50 backdrop-blur-sm p-8 text-center border-secondary scale-105">
              <div className="bg-secondary text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                Популярно
              </div>
              <h4 className="text-2xl font-bold mb-4">Неделя</h4>
              <p className="text-5xl font-black text-secondary mb-6">499₽</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-secondary" size={20} />
                  <span>Все функции</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-secondary" size={20} />
                  <span>7 дней доступа</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-secondary" size={20} />
                  <span>Обновления</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-secondary" size={20} />
                  <span>Приоритетная поддержка</span>
                </li>
              </ul>
              <Button className="w-full neon-glow bg-secondary hover:bg-primary">
                Купить
              </Button>
            </Card>

            <Card className="neon-border bg-card/50 backdrop-blur-sm p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Месяц</h4>
              <p className="text-5xl font-black text-primary mb-6">1499₽</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Все функции</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>30 дней доступа</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Обновления</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>VIP поддержка</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Эксклюзивные функции</span>
                </li>
              </ul>
              <Button className="w-full neon-glow bg-primary hover:bg-secondary">
                Купить
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-neon">FAQ</h3>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="neon-border bg-card/50 backdrop-blur-sm px-6 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Безопасно ли использовать чит?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, наш чит использует продвинутую систему защиты от античита. Регулярные обновления обеспечивают максимальную безопасность.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="neon-border bg-card/50 backdrop-blur-sm px-6 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как установить чит?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Скачайте лоадер, введите свой логин и пароль, запустите игру и наслаждайтесь. Подробная инструкция придет на email после покупки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="neon-border bg-card/50 backdrop-blur-sm px-6 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Можно ли вернуть деньги?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Возврат возможен в течение 24 часов, если чит не был активирован. После активации возврат не предусмотрен.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="neon-border bg-card/50 backdrop-blur-sm px-6 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Работает ли на всех серверах?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, ExoVision работает на всех официальных серверах STALCRAFT без ограничений.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-neon">Контакты</h3>
          <p className="text-xl text-muted-foreground mb-8">Связаться с нами можно через социальные сети</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="neon-border bg-card/50 backdrop-blur-sm p-4 rounded-full hover:animate-pulse-glow transition-all">
              <Icon name="MessageCircle" className="text-primary" size={32} />
            </a>
            <a href="#" className="neon-border bg-card/50 backdrop-blur-sm p-4 rounded-full hover:animate-pulse-glow transition-all">
              <Icon name="Send" className="text-primary" size={32} />
            </a>
            <a href="#" className="neon-border bg-card/50 backdrop-blur-sm p-4 rounded-full hover:animate-pulse-glow transition-all">
              <Icon name="Youtube" className="text-primary" size={32} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t neon-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2019-2024 ExoVision. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;