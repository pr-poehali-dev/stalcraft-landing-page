import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState('espvision');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-neon-dark">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 neon-border border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-neon tracking-wider">ExoVision</h1>
          <div className="hidden md:flex gap-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукты</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="neon-glow bg-primary hover:bg-secondary">
            <Icon name="Bot" className="mr-2" size={18} />
            Панель
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
            С 2019 года создаем лучшие инструменты для STALCRAFT
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="neon-glow bg-primary hover:bg-secondary text-lg px-10 py-6 rounded-full font-semibold">
              <Icon name="ShoppingCart" className="mr-2" size={24} />
              Купить подписку
            </Button>
            <Button size="lg" variant="outline" className="neon-border text-lg px-10 py-6 rounded-full font-semibold hover:bg-primary/10">
              <Icon name="Youtube" className="mr-2" size={24} />
              Видео-обзор
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <Icon name="ShieldCheck" className="text-primary" size={20} />
              <span>✅ Undetected</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-secondary" size={20} />
              <span>Windows 8-11</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" className="text-primary" size={20} />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4" style={{background: 'linear-gradient(to right, #8B5CF6, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Наши продукты</h3>
            <p className="text-muted-foreground text-lg">Выберите подходящий пакет функций</p>
          </div>

          <Tabs defaultValue="espvision" className="w-full" onValueChange={setSelectedProduct}>
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card/50 neon-border p-2">
              <TabsTrigger value="espvision" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="Eye" className="mr-2" size={18} />
                EspVision
              </TabsTrigger>
              <TabsTrigger value="artvision" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="Gem" className="mr-2" size={18} />
                ArtVision
              </TabsTrigger>
              <TabsTrigger value="privatevision" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                <Icon name="Crown" className="mr-2" size={18} />
                PrivateVision
              </TabsTrigger>
            </TabsList>

            <TabsContent value="espvision" className="animate-fade-in">
              <Card className="neon-border bg-card/50 backdrop-blur-sm p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 rounded-full neon-border bg-primary/10">
                    <Icon name="Eye" className="text-primary" size={48} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold mb-2">STALCRAFT EspVision</h4>
                    <p className="text-xl text-primary mb-4">✅ Undetected</p>
                    <p className="text-muted-foreground">Базовый пакет с ESP функциями для отображения игроков и NPC</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>PlayerEsp - Игроки через стены</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>NpcEsp - NPC через стены</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>EspType - Edged, Filled, Line</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>Distance - Дистанция до цели</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>Tracers - Линии до игроков</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>CrossHair - Кастомный прицел</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>Clicker - Автокликер</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>Hud - Полезная информация</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>MaxRange - Макс. прогруз</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>AntiAnomaly - Удаление аномалий</span>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="artvision" className="animate-fade-in">
              <Card className="neon-border bg-card/50 backdrop-blur-sm p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 rounded-full neon-border bg-primary/10">
                    <Icon name="Gem" className="text-primary" size={48} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold mb-2">STALCRAFT ArtVision</h4>
                    <p className="text-xl text-primary mb-4">✅ Undetected</p>
                    <p className="text-muted-foreground">Специализированный пакет для поиска артефактов</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>ArtefactEsp - Артефакты через стены</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>CheckName - Название артефакта</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>EspType - Edged, Filled, Line</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>Distance - Дистанция до артефакта</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>Tracers - Линии до артефактов</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>CrossHair - Кастомный прицел</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>CrossHairType - Типы прицела</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>Hud - Полезная информация</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>ShowWaterMark - Watermark</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>Color Settings - Настройка цветов</span>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="privatevision" className="animate-fade-in">
              <Card className="neon-border border-secondary bg-gradient-to-br from-card/80 to-secondary/10 backdrop-blur-sm p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 rounded-full neon-border border-secondary bg-secondary/20">
                    <Icon name="Crown" className="text-secondary" size={48} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold mb-2">STALCRAFT PrivateVision</h4>
                    <p className="text-xl text-secondary mb-4">✅ Undetected • Premium</p>
                    <p className="text-muted-foreground">Полный пакет - все функции EspVision + ArtVision + эксклюзив</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-secondary mb-2">Все из EspVision + ArtVision</p>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>CheckArmor - Броня врагов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>CheckWeapons - Оружие врагов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>BagsEsp - Сумки после смерти</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-secondary mb-2 opacity-0">.</p>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>TainikEsp - Схроны всех типов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>BarterEsp - Бартеры, минералы</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>MobEsp - Все мутанты</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-secondary mb-2 opacity-0">.</p>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>MaxPnv - Админ ПНВ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>AimBot - Авто-наводка</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>+ Полная кастомизация</span>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 text-neon">Купить подписку</h3>
          <p className="text-center text-muted-foreground mb-12">Управление через @KamiPanelbot</p>
          <div className="max-w-5xl mx-auto text-center">
            <Card className="neon-border bg-card/50 backdrop-blur-sm p-12">
              <Icon name="Bot" className="text-primary mx-auto mb-6" size={64} />
              <h4 className="text-2xl font-bold mb-4">Telegram Bot Panel</h4>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Все подписки и платежи оформляются через нашего Telegram бота. 
                Удобная панель управления, мгновенная активация, история покупок.
              </p>
              <Button size="lg" className="neon-glow bg-primary hover:bg-secondary text-lg px-12 py-6">
                <Icon name="ExternalLink" className="mr-2" size={20} />
                Открыть @KamiPanelbot
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-neon">О проекте ExoVision</h3>
          
          <div className="space-y-8">
            <Card className="neon-border bg-card/50 backdrop-blur-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="History" className="text-primary" size={32} />
                <div>
                  <h4 className="text-2xl font-bold mb-3">История проекта</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Всё началось в <span className="text-primary font-semibold">2019 году</span> с идеи KamiProject. 
                    Мы были одними из первых, кто создал бесплатные инструменты для STALCRAFT - базовые ESP и колор аимбот. 
                    Спрос превзошел ожидания, наши разработки даже перепродавались на других площадках.
                    <br/><br/>
                    В <span className="text-secondary font-semibold">2024 году</span> произошел момент X - полное обновление концепции и дизайна проекта.
                    С 2021 по 2025 мы расширились на другие игры: Cristalix, VimeWorld, DeadLock, Valorant, GTA5 и многие другие.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="neon-border bg-card/50 backdrop-blur-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Users" className="text-secondary" size={32} />
                <h4 className="text-2xl font-bold">Наша команда</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Crown" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Администратор-Программист</p>
                      <p className="text-sm text-muted-foreground">@KripKripo1ek - Главный архитектор</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Wrench" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Техподдержка - Гл. менеджер</p>
                      <p className="text-sm text-muted-foreground">@BelyaGetSexBelka</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Video" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">SMM - Ютуберы</p>
                      <p className="text-sm text-muted-foreground">@ii_558zmi, @Mlecknul</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Модерация чатов</p>
                      <p className="text-sm text-muted-foreground">@DrvSwapBuffers, @urchex</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Heart" className="text-secondary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Помощь проекту</p>
                      <p className="text-sm text-muted-foreground">@rxznve, @hehehoue, @yaropolkkl, @Cnclv, @akurise</p>
                    </div>
                  </div>
                </div>
              </div>
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
                Какие системные требования?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Операционная система: Windows 8 (все версии) - Windows 11 (все версии). 
                Требуется компьютер или ноутбук с монитором, желательно наличие мыши для комфортной игры.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="neon-border bg-card/50 backdrop-blur-sm px-6 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как купить и активировать подписку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Все покупки происходят через Telegram бота @KamiPanelbot. После оплаты вы получаете мгновенный доступ к выбранному продукту с инструкцией по установке.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="neon-border bg-card/50 backdrop-blur-sm px-6 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                В чем разница между продуктами?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                EspVision - базовый ESP для игроков/NPC. ArtVision - для поиска артефактов. 
                PrivateVision - премиум пакет со ВСЕМИ функциями обоих продуктов + эксклюзивные возможности (AimBot, MaxPnv, расширенный ESP).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="neon-border bg-card/50 backdrop-blur-sm px-6 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Действительно ли Undetected?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! Все наши продукты имеют статус ✅ Undetected. Мы регулярно обновляем защиту и следим за безопасностью наших пользователей с 2019 года.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-neon">Наши ресурсы</h3>
          <p className="text-xl text-muted-foreground mb-12">Присоединяйтесь к сообществу ExoVision</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="https://t.me/Kripme4nik" target="_blank" rel="noopener noreferrer" className="neon-border bg-card/50 backdrop-blur-sm p-6 rounded-lg hover:animate-pulse-glow transition-all group">
              <Icon name="Newspaper" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-bold mb-2">Telegram News</h4>
              <p className="text-sm text-muted-foreground">Новости и обновления</p>
            </a>
            <a href="https://t.me/+xNvCqrGN6uNhMTdi" target="_blank" rel="noopener noreferrer" className="neon-border bg-card/50 backdrop-blur-sm p-6 rounded-lg hover:animate-pulse-glow transition-all group">
              <Icon name="MessageCircle" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-bold mb-2">Telegram Chat</h4>
              <p className="text-sm text-muted-foreground">Общение с командой</p>
            </a>
            <a href="https://discord.gg/6JuG3e484Y" target="_blank" rel="noopener noreferrer" className="neon-border bg-card/50 backdrop-blur-sm p-6 rounded-lg hover:animate-pulse-glow transition-all group">
              <Icon name="Gamepad2" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-bold mb-2">Discord</h4>
              <p className="text-sm text-muted-foreground">Сообщество игроков</p>
            </a>
            <a href="https://www.youtube.com/@EXOMAINMEDIA" target="_blank" rel="noopener noreferrer" className="neon-border bg-card/50 backdrop-blur-sm p-6 rounded-lg hover:animate-pulse-glow transition-all group">
              <Icon name="Youtube" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-bold mb-2">YouTube</h4>
              <p className="text-sm text-muted-foreground">Гайды и обзоры</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t neon-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2019-2025 ExoVision Project. Все права защищены.</p>
          <p className="text-sm">Управление подписками: @KamiPanelbot</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
