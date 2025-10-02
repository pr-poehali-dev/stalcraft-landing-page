import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [features, setFeatures] = useState({
    esp: true,
    aimbot: false,
    wallhack: true,
    radar: false,
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

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-black text-neon mb-6 tracking-tight">
            STALCRAFT CHEAT
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Доминируй в зоне с ExoVision - самым продвинутым читом для STALCRAFT
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="neon-glow bg-primary hover:bg-secondary text-lg px-8">
              <Icon name="Download" className="mr-2" />
              Скачать
            </Button>
            <Button size="lg" variant="outline" className="neon-border text-lg px-8">
              <Icon name="PlayCircle" className="mr-2" />
              Демо
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-neon">Функции</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="neon-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in hover:animate-pulse-glow transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Icon name="Eye" className="text-primary" size={32} />
                  <h4 className="text-2xl font-bold">ESP</h4>
                </div>
                <Switch
                  checked={features.esp}
                  onCheckedChange={() => toggleFeature('esp')}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
              <p className="text-muted-foreground">
                Видь всех игроков сквозь стены с настраиваемыми параметрами отображения
              </p>
            </Card>

            <Card className="neon-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in hover:animate-pulse-glow transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Icon name="Crosshair" className="text-secondary" size={32} />
                  <h4 className="text-2xl font-bold">Aimbot</h4>
                </div>
                <Switch
                  checked={features.aimbot}
                  onCheckedChange={() => toggleFeature('aimbot')}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
              <p className="text-muted-foreground">
                Автоматическое наведение с настройкой плавности и FOV
              </p>
            </Card>

            <Card className="neon-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in hover:animate-pulse-glow transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" className="text-primary" size={32} />
                  <h4 className="text-2xl font-bold">Wallhack</h4>
                </div>
                <Switch
                  checked={features.wallhack}
                  onCheckedChange={() => toggleFeature('wallhack')}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
              <p className="text-muted-foreground">
                Прозрачные стены для полного контроля над ситуацией
              </p>
            </Card>

            <Card className="neon-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in hover:animate-pulse-glow transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Icon name="Radar" className="text-secondary" size={32} />
                  <h4 className="text-2xl font-bold">Radar</h4>
                </div>
                <Switch
                  checked={features.radar}
                  onCheckedChange={() => toggleFeature('radar')}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
              <p className="text-muted-foreground">
                Мини-карта с отображением врагов и предметов в реальном времени
              </p>
            </Card>
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
