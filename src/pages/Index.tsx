import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState('espvision');

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      document.getElementById('particles-container')?.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 25000);
    };

    const interval = setInterval(createParticle, 300);
    
    for (let i = 0; i < 30; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black relative">
      <div id="particles-container" className="fixed inset-0 pointer-events-none overflow-hidden z-0"></div>
      
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-primary/20">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-neon tracking-wider">ExoVision</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="Home" size={16} />
                Home
              </a>
              <a href="#products" className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="Package" size={16} />
                Products
              </a>
              <a href="#faq" className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="HelpCircle" size={16} />
                Faq
              </a>
              <a href="#contact" className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="MessageCircle" size={16} />
                Contact
              </a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 border-0 rounded-lg px-6">
              <Icon name="ShoppingCart" className="mr-2" size={16} />
              Get it
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhCNUNGNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto text-center animate-fade-in relative z-10">
          <div className="inline-block mb-6">
            <h2 className="text-6xl md:text-8xl font-black mb-2" style={{background: 'linear-gradient(to right, #8B5CF6, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Undetected.<br/>Unrivaled. Unstoppable.
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow"></div>
          </div>
          <p className="text-xl md:text-2xl text-foreground/60 mb-4 font-light">
            We deliver the market's most effective and undetected cheats,
          </p>
          <p className="text-xl md:text-2xl text-foreground/60 mb-10 font-light">
            backed by 24/7 support and an unbeatable feature set.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-10 py-6 rounded-lg font-semibold border-0">
              <Icon name="Info" className="mr-2" size={20} />
              About Us
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-10 py-6 rounded-lg font-semibold border-0">
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Buy Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm text-primary mb-2 tracking-widest uppercase">Why choose</p>
            <h3 className="text-4xl font-bold mb-4">EXOVISION</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <Card className="relative bg-card/40 backdrop-blur-sm border-primary/20 p-8 rounded-2xl hover:border-primary/40 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Zap" className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Fastest to update</h4>
                <p className="text-sm text-muted-foreground mb-4">Мгновенные обновления после каждого патча игры</p>
                <a href="#" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                  Full description <Icon name="ArrowRight" size={14} />
                </a>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <Card className="relative bg-card/40 backdrop-blur-sm border-primary/20 p-8 rounded-2xl hover:border-primary/40 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="ShieldCheck" className="text-secondary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Undetected</h4>
                <p className="text-sm text-muted-foreground mb-4">100% защита от античита с 2019 года</p>
                <a href="#" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                  Full description <Icon name="ArrowRight" size={14} />
                </a>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <Card className="relative bg-card/40 backdrop-blur-sm border-primary/20 p-8 rounded-2xl hover:border-primary/40 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">24/7 Support</h4>
                <p className="text-sm text-muted-foreground mb-4">Круглосуточная поддержка в Telegram и Discord</p>
                <a href="#" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                  Full description <Icon name="ArrowRight" size={14} />
                </a>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <Card className="relative bg-card/40 backdrop-blur-sm border-primary/20 p-8 rounded-2xl hover:border-primary/40 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Settings" className="text-secondary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Full customization</h4>
                <p className="text-sm text-muted-foreground mb-4">Настраивай каждую функцию под себя</p>
                <a href="#" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                  Full description <Icon name="ArrowRight" size={14} />
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6 bg-black/30 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4" style={{background: 'linear-gradient(to right, #8B5CF6, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Наши продукты</h3>
            <p className="text-muted-foreground text-lg">Выберите подходящий пакет функций</p>
          </div>

          <Tabs defaultValue="espvision" className="w-full" onValueChange={setSelectedProduct}>
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card/50 border border-primary/20 p-2 rounded-xl">
              <TabsTrigger value="espvision" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white rounded-lg">
                <Icon name="Eye" className="mr-2" size={18} />
                EspVision
              </TabsTrigger>
              <TabsTrigger value="artvision" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white rounded-lg">
                <Icon name="Gem" className="mr-2" size={18} />
                ArtVision
              </TabsTrigger>
              <TabsTrigger value="privatevision" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white rounded-lg">
                <Icon name="Crown" className="mr-2" size={18} />
                PrivateVision
              </TabsTrigger>
            </TabsList>

            <TabsContent value="espvision" className="animate-fade-in">
              <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent">
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
              <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent">
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
              <Card className="border border-secondary/40 bg-gradient-to-br from-card/80 to-secondary/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent">
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

      <section id="pricing" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 text-neon">Купить подписку</h3>
          <p className="text-center text-muted-foreground mb-12">Управление через @KamiPanelbot</p>
          <div className="max-w-5xl mx-auto text-center">
            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-12 rounded-2xl">
              <Icon name="Bot" className="text-primary mx-auto mb-6" size={64} />
              <h4 className="text-2xl font-bold mb-4">Telegram Bot Panel</h4>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Все подписки и платежи оформляются через нашего Telegram бота. 
                Удобная панель управления, мгновенная активация, история покупок.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-12 py-6 border-0">
                <Icon name="ExternalLink" className="mr-2" size={20} />
                Открыть @KamiPanelbot
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-black/30 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-16">
            <p className="text-primary text-sm mb-2 tracking-widest uppercase">Частые Вопросы</p>
            <h3 className="text-4xl font-bold mb-4">
              Не рискуйте своими данными и временем — выбирайте наше <br/>
              <span className="text-primary">гарантированно пользуйтесь о вашем успехе!</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-primary/20 bg-card/40 backdrop-blur-sm px-6 rounded-xl">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-4">
                    How Can I get in Touch With Support After Bought The Product
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Операционная система: Windows 8 (все версии) - Windows 11 (все версии). 
                    Требуется компьютер или ноутбук с монитором.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-primary/20 bg-card/40 backdrop-blur-sm px-6 rounded-xl">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-4">
                    How Can I get in Touch With Support After Bought The Product
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Все покупки через @KamiPanelbot. После оплаты мгновенный доступ с инструкцией.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-primary/20 bg-card/40 backdrop-blur-sm px-6 rounded-xl">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-4">
                    How Can I get in Touch With Support After Bought The Product
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    EspVision - базовый ESP. ArtVision - артефакты. PrivateVision - премиум со всем.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="relative hidden md:flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/50763a7e-8335-46a8-b2ad-78327704a110.png" 
                  alt="Support" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 px-8 py-6 border-0 rounded-xl">
              Не нашли ответ? Перейдите на Faq
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-neon">О проекте ExoVision</h3>
          
          <div className="space-y-8">
            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-8 rounded-2xl">
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

            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-8 rounded-2xl">
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

      <section id="contact" className="py-20 px-6 bg-black/30 relative">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-neon">Наши ресурсы</h3>
          <p className="text-xl text-muted-foreground mb-12">Присоединяйтесь к сообществу ExoVision</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="https://t.me/Kripme4nik" target="_blank" rel="noopener noreferrer" className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 rounded-2xl hover:border-primary/40 transition-all group">
              <Icon name="Newspaper" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-bold mb-2">Telegram News</h4>
              <p className="text-sm text-muted-foreground">Новости и обновления</p>
            </a>
            <a href="https://t.me/+xNvCqrGN6uNhMTdi" target="_blank" rel="noopener noreferrer" className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 rounded-2xl hover:border-primary/40 transition-all group">
              <Icon name="MessageCircle" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-bold mb-2">Telegram Chat</h4>
              <p className="text-sm text-muted-foreground">Общение с командой</p>
            </a>
            <a href="https://discord.gg/6JuG3e484Y" target="_blank" rel="noopener noreferrer" className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 rounded-2xl hover:border-primary/40 transition-all group">
              <Icon name="Gamepad2" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-bold mb-2">Discord</h4>
              <p className="text-sm text-muted-foreground">Сообщество игроков</p>
            </a>
            <a href="https://www.youtube.com/@EXOMAINMEDIA" target="_blank" rel="noopener noreferrer" className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 rounded-2xl hover:border-primary/40 transition-all group">
              <Icon name="Youtube" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-bold mb-2">YouTube</h4>
              <p className="text-sm text-muted-foreground">Гайды и обзоры</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-primary/20 relative">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2019-2025 ExoVision Project. Все права защищены.</p>
          <p className="text-sm">Управление подписками: @KamiPanelbot</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
