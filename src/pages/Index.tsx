import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState('espvision');
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      const startPosition = window.scrollY;
      const distance = offsetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const ease = (t: number) => {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };
        
        window.scrollTo(0, startPosition + distance * ease(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const translations = {
    ru: {
      nav: {
        home: 'Главная',
        products: 'Продукты',
        faq: 'FAQ',
        contact: 'Контакты',
        getIt: 'Получить'
      },
      hero: {
        title1: 'STALCRAFT',
        title2: 'CHEAT',
        subtitle1: 'Мы предлагаем самые эффективные и необнаруживаемые читы,',
        subtitle2: 'подкрепленные поддержкой 24/7 и непревзойденным набором функций.',
        aboutBtn: 'О нас',
        buyBtn: 'Купить сейчас'
      },
      whyChoose: {
        title: 'Почему выбирают',
        brand: 'EXOVISION',
        fastUpdate: 'Быстрые обновления',
        fastUpdateDesc: 'Мгновенные обновления после каждого патча игры',
        undetected: 'Необнаружим',
        undetectedDesc: '100% защита от античита с 2019 года',
        support: '24/7 Поддержка',
        supportDesc: 'Круглосуточная поддержка в Telegram и Discord',
        customization: 'Полная кастомизация',
        customizationDesc: 'Настраивай каждую функцию под себя'
      },
      products: {
        title: 'Наши продукты',
        subtitle: 'Выберите подходящий пакет функций',
        espVision: {
          title: 'STALCRAFT EspVision',
          status: '✅ Необнаружим',
          desc: 'Базовый пакет с ESP функциями для отображения игроков и NPC',
          features: [
            'PlayerEsp - Игроки через стены',
            'NpcEsp - NPC через стены',
            'EspType - Edged, Filled, Line',
            'Distance - Дистанция до цели',
            'Tracers - Линии до игроков',
            'CrossHair - Кастомный прицел',
            'Clicker - Автокликер',
            'Hud - Полезная информация',
            'MaxRange - Макс. прогруз',
            'AntiAnomaly - Удаление аномалий'
          ]
        },
        artVision: {
          title: 'STALCRAFT ArtVision',
          status: '✅ Необнаружим',
          desc: 'Специализированный пакет для поиска артефактов',
          features: [
            'ArtefactEsp - Артефакты через стены',
            'CheckName - Название артефакта',
            'EspType - Edged, Filled, Line',
            'Distance - Дистанция до артефакта',
            'Tracers - Линии до артефактов',
            'CrossHair - Кастомный прицел',
            'CrossHairType - Типы прицела',
            'Hud - Полезная информация',
            'ShowWaterMark - Watermark',
            'Color Settings - Настройка цветов'
          ]
        },
        privateVision: {
          title: 'STALCRAFT PrivateVision',
          status: '✅ Необнаружим • Премиум',
          desc: 'Полный пакет - все функции EspVision + ArtVision + эксклюзив',
          allFrom: 'Все из EspVision + ArtVision',
          features: [
            'CheckArmor - Броня врагов',
            'CheckWeapons - Оружие врагов',
            'BagsEsp - Сумки после смерти',
            'TainikEsp - Схроны всех типов',
            'BarterEsp - Бартеры, минералы',
            'MobEsp - Все мутанты',
            'MaxPnv - Админ ПНВ',
            'AimBot - Авто-наводка',
            '+ Полная кастомизация'
          ]
        }
      },
      pricing: {
        title: 'Купить подписку',
        subtitle: 'Управление через @KamiPanelbot',
        panelTitle: 'Telegram Bot Panel',
        panelDesc: 'Все подписки и платежи оформляются через нашего Telegram бота. Удобная панель управления, мгновенная активация, история покупок.',
        openBtn: 'Открыть @KamiPanelbot'
      },
      faq: {
        title: 'Частые Вопросы',
        subtitle: 'Не рискуйте своими данными и временем — выбирайте наше',
        subtitle2: 'гарантированно пользуйтесь о вашем успехе!',
        notFoundBtn: 'Не нашли ответ? Перейдите на FAQ',
        questions: [
          {
            q: 'Какие системные требования?',
            a: 'Операционная система: Windows 8 (все версии) - Windows 11 (все версии). Требуется компьютер или ноутбук с монитором.'
          },
          {
            q: 'Как купить и активировать подписку?',
            a: 'Все покупки через @KamiPanelbot. После оплаты мгновенный доступ с инструкцией.'
          },
          {
            q: 'В чем разница между продуктами?',
            a: 'EspVision - базовый ESP. ArtVision - артефакты. PrivateVision - премиум со всем.'
          }
        ]
      },
      about: {
        title: 'О проекте ExoVision',
        historyTitle: 'История проекта',
        historyText: 'Всё началось в 2019 году с идеи KamiProject. Мы были одними из первых, кто создал бесплатные инструменты для STALCRAFT - базовые ESP и колор аимбот. Спрос превзошел ожидания, наши разработки даже перепродавались на других площадках.\n\nВ 2024 году произошел момент X - полное обновление концепции и дизайна проекта. С 2021 по 2025 мы расширились на другие игры: Cristalix, VimeWorld, DeadLock, Valorant, GTA5 и многие другие.',
        teamTitle: 'Наша команда',
        admin: 'Администратор-Программист',
        adminDesc: '@KripKripo1ek - Главный архитектор',
        support: 'Техподдержка - Гл. менеджер',
        supportDesc: '@BelyaGetSexBelka',
        smm: 'SMM - Ютуберы',
        smmDesc: '@ii_558zmi, @Mlecknul',
        mods: 'Модерация чатов',
        modsDesc: '@DrvSwapBuffers, @urchex',
        helpers: 'Помощь проекту',
        helpersDesc: '@rxznve, @hehehoue, @yaropolkkl, @Cnclv, @akurise'
      },
      contact: {
        title: 'Наши ресурсы',
        subtitle: 'Присоединяйтесь к сообществу ExoVision',
        telegramNews: 'Telegram News',
        telegramNewsDesc: 'Новости и обновления',
        telegramChat: 'Telegram Chat',
        telegramChatDesc: 'Общение с командой',
        discord: 'Discord',
        discordDesc: 'Сообщество игроков',
        youtube: 'YouTube',
        youtubeDesc: 'Гайды и обзоры'
      },
      footer: {
        rights: '© 2019-2025 ExoVision Project. Все права защищены.',
        panel: 'Управление подписками: @KamiPanelbot'
      }
    },
    en: {
      nav: {
        home: 'Home',
        products: 'Products',
        faq: 'FAQ',
        contact: 'Contact',
        getIt: 'Get it'
      },
      hero: {
        title1: 'STALCRAFT',
        title2: 'CHEAT',
        subtitle1: 'We deliver the market\'s most effective and undetected cheats,',
        subtitle2: 'backed by 24/7 support and an unbeatable feature set.',
        aboutBtn: 'About Us',
        buyBtn: 'Buy Now'
      },
      whyChoose: {
        title: 'Why choose',
        brand: 'EXOVISION',
        fastUpdate: 'Fastest to update',
        fastUpdateDesc: 'Instant updates after every game patch',
        undetected: 'Undetected',
        undetectedDesc: '100% anti-cheat protection since 2019',
        support: '24/7 Support',
        supportDesc: 'Round-the-clock support in Telegram and Discord',
        customization: 'Full customization',
        customizationDesc: 'Customize every feature to your liking'
      },
      products: {
        title: 'Our Products',
        subtitle: 'Choose the right feature package',
        espVision: {
          title: 'STALCRAFT EspVision',
          status: '✅ Undetected',
          desc: 'Basic package with ESP features for displaying players and NPCs',
          features: [
            'PlayerEsp - See players through walls',
            'NpcEsp - See NPCs through walls',
            'EspType - Edged, Filled, Line',
            'Distance - Distance to target',
            'Tracers - Lines to players',
            'CrossHair - Custom crosshair',
            'Clicker - Auto clicker',
            'Hud - Useful information',
            'MaxRange - Max render distance',
            'AntiAnomaly - Remove anomalies'
          ]
        },
        artVision: {
          title: 'STALCRAFT ArtVision',
          status: '✅ Undetected',
          desc: 'Specialized package for finding artifacts',
          features: [
            'ArtefactEsp - Artifacts through walls',
            'CheckName - Artifact name',
            'EspType - Edged, Filled, Line',
            'Distance - Distance to artifact',
            'Tracers - Lines to artifacts',
            'CrossHair - Custom crosshair',
            'CrossHairType - Crosshair types',
            'Hud - Useful information',
            'ShowWaterMark - Watermark',
            'Color Settings - Color customization'
          ]
        },
        privateVision: {
          title: 'STALCRAFT PrivateVision',
          status: '✅ Undetected • Premium',
          desc: 'Full package - all EspVision + ArtVision features + exclusive',
          allFrom: 'All from EspVision + ArtVision',
          features: [
            'CheckArmor - Enemy armor',
            'CheckWeapons - Enemy weapons',
            'BagsEsp - Death bags',
            'TainikEsp - All types of stashes',
            'BarterEsp - Barters, minerals',
            'MobEsp - All mutants',
            'MaxPnv - Admin NVG',
            'AimBot - Auto aim',
            '+ Full customization'
          ]
        }
      },
      pricing: {
        title: 'Buy Subscription',
        subtitle: 'Managed via @KamiPanelbot',
        panelTitle: 'Telegram Bot Panel',
        panelDesc: 'All subscriptions and payments are processed through our Telegram bot. Convenient control panel, instant activation, purchase history.',
        openBtn: 'Open @KamiPanelbot'
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Don\'t risk your data and time — choose our',
        subtitle2: 'guaranteed peace of mind for your success!',
        notFoundBtn: 'Didn\'t find the answer? Go to FAQ',
        questions: [
          {
            q: 'What are the system requirements?',
            a: 'Operating System: Windows 8 (all versions) - Windows 11 (all versions). Computer or laptop with monitor required.'
          },
          {
            q: 'How to buy and activate subscription?',
            a: 'All purchases via @KamiPanelbot. Instant access with instructions after payment.'
          },
          {
            q: 'What\'s the difference between products?',
            a: 'EspVision - basic ESP. ArtVision - artifacts. PrivateVision - premium with everything.'
          }
        ]
      },
      about: {
        title: 'About ExoVision Project',
        historyTitle: 'Project History',
        historyText: 'It all started in 2019 with the KamiProject idea. We were among the first to create free tools for STALCRAFT - basic ESP and color aimbot. Demand exceeded expectations, our developments were even resold on other platforms.\n\nIn 2024, moment X happened - a complete update of the project concept and design. From 2021 to 2025, we expanded to other games: Cristalix, VimeWorld, DeadLock, Valorant, GTA5 and many others.',
        teamTitle: 'Our Team',
        admin: 'Administrator-Programmer',
        adminDesc: '@KripKripo1ek - Chief Architect',
        support: 'Tech Support - Head Manager',
        supportDesc: '@BelyaGetSexBelka',
        smm: 'SMM - YouTubers',
        smmDesc: '@ii_558zmi, @Mlecknul',
        mods: 'Chat Moderation',
        modsDesc: '@DrvSwapBuffers, @urchex',
        helpers: 'Project Help',
        helpersDesc: '@rxznve, @hehehoue, @yaropolkkl, @Cnclv, @akurise'
      },
      contact: {
        title: 'Our Resources',
        subtitle: 'Join the ExoVision community',
        telegramNews: 'Telegram News',
        telegramNewsDesc: 'News and updates',
        telegramChat: 'Telegram Chat',
        telegramChatDesc: 'Chat with team',
        discord: 'Discord',
        discordDesc: 'Player community',
        youtube: 'YouTube',
        youtubeDesc: 'Guides and reviews'
      },
      footer: {
        rights: '© 2019-2025 ExoVision Project. All rights reserved.',
        panel: 'Subscription management: @KamiPanelbot'
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 8 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.willChange = 'transform';
      
      document.getElementById('particles-container')?.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 25000);
    };

    const interval = setInterval(createParticle, 200);
    
    for (let i = 0; i < 40; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black relative">
      <div id="particles-container" className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ willChange: 'transform' }}></div>
      
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Crosshair" className="text-white" size={20} />
              </div>
              <h1 className="text-lg sm:text-2xl font-bold text-neon tracking-wider">ExoVision Stalcraft</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer">
                <Icon name="Home" size={16} />
                {t.nav.home}
              </a>
              <a href="#products" onClick={(e) => scrollToSection(e, '#products')} className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer">
                <Icon name="Package" size={16} />
                {t.nav.products}
              </a>
              <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer">
                <Icon name="HelpCircle" size={16} />
                {t.nav.faq}
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer">
                <Icon name="MessageCircle" size={16} />
                {t.nav.contact}
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                className="border-primary/20 hover:bg-primary/10 px-2 sm:px-3"
              >
                <Icon name="Languages" className="sm:mr-2" size={16} />
                <span className="hidden sm:inline">{language === 'ru' ? 'EN' : 'RU'}</span>
              </Button>
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 border-0 rounded-lg px-3 sm:px-6 text-xs sm:text-sm"
                onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
              >
                <Icon name="ShoppingCart" className="sm:mr-2" size={16} />
                <span className="hidden sm:inline">{t.nav.getIt}</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 relative overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary/40">
            <img 
              src="https://cdn.poehali.dev/files/34bd024b-1cca-4af2-a8b2-0d72594000ee.png" 
              alt="Stalcraft" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-primary/40">
            <img 
              src="https://cdn.poehali.dev/files/3ed60931-0f20-49e0-a482-c892f552e81d.png" 
              alt="Stalcraft" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent"></div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-primary/40">
            <img 
              src="https://cdn.poehali.dev/files/76dd263a-a1d7-451f-8f85-9e4a2d61260a.png" 
              alt="Stalcraft" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto text-center animate-fade-in relative z-10">
          <div className="inline-block mb-6">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-2" style={{background: 'linear-gradient(to right, #8B5CF6, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              {t.hero.title1}<br/>{t.hero.title2}
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-foreground/60 mb-3 sm:mb-4 font-light px-4">
            {t.hero.subtitle1}
          </p>
          <p className="text-base sm:text-xl md:text-2xl text-foreground/60 mb-8 sm:mb-10 font-light px-4">
            {t.hero.subtitle2}
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-sm sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-lg font-semibold border-0"
              onClick={(e) => scrollToSection(e as any, '#about')}
            >
              <Icon name="Info" className="mr-2" size={18} />
              {t.hero.aboutBtn}
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-sm sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-lg font-semibold border-0"
              onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
            >
              <Icon name="ShoppingCart" className="mr-2" size={18} />
              {t.hero.buyBtn}
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm text-primary mb-2 tracking-widest uppercase">{t.whyChoose.title}</p>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">{t.whyChoose.brand}</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all glow-pulse"></div>
              <Card className="relative bg-card/40 backdrop-blur-sm border-primary/20 p-6 sm:p-8 rounded-2xl hover:border-primary/40 transition-all">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Zap" className="text-primary" size={28} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.whyChoose.fastUpdate}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{t.whyChoose.fastUpdateDesc}</p>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all glow-pulse" style={{animationDelay: '0.5s'}}></div>
              <Card className="relative bg-card/40 backdrop-blur-sm border-primary/20 p-6 sm:p-8 rounded-2xl hover:border-primary/40 transition-all">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="ShieldCheck" className="text-secondary" size={28} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.whyChoose.undetected}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{t.whyChoose.undetectedDesc}</p>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all glow-pulse" style={{animationDelay: '1s'}}></div>
              <Card className="relative bg-card/40 backdrop-blur-sm border-primary/20 p-6 sm:p-8 rounded-2xl hover:border-primary/40 transition-all">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.whyChoose.support}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{t.whyChoose.supportDesc}</p>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all glow-pulse" style={{animationDelay: '1.5s'}}></div>
              <Card className="relative bg-card/40 backdrop-blur-sm border-primary/20 p-6 sm:p-8 rounded-2xl hover:border-primary/40 transition-all">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Settings" className="text-secondary" size={28} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.whyChoose.customization}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{t.whyChoose.customizationDesc}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm text-primary mb-2 tracking-widest uppercase">СКРИНШОТЫ</p>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Чит в действии</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative group overflow-hidden rounded-2xl border border-primary/20 hover:border-primary/40 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="https://cdn.poehali.dev/files/dfc53c5b-ecf1-460a-b412-fa582f397426.png" 
                alt="ESP через стены" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h4 className="text-xl font-bold mb-2">ESP через стены</h4>
                <p className="text-sm text-muted-foreground">Видимость игроков и объектов</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-primary/20 hover:border-primary/40 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="https://cdn.poehali.dev/files/c9b76ade-9b6a-46f7-8258-4db212d101ec.png" 
                alt="Разделение игроков и NPC" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h4 className="text-xl font-bold mb-2">Разделение игроков и NPC</h4>
                <p className="text-sm text-muted-foreground">Разные цвета подсветки</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-primary/20 hover:border-primary/40 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="https://cdn.poehali.dev/files/01bf24f6-bf67-4298-aa3f-5c2a3c672fab.png" 
                alt="Визуалы" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h4 className="text-xl font-bold mb-2">Визуалы</h4>
                <p className="text-sm text-muted-foreground">Кастомные эффекты и подсветка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-12 sm:py-20 px-4 sm:px-6 bg-black/30 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-5xl font-bold mb-4" style={{background: 'linear-gradient(to right, #8B5CF6, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{t.products.title}</h3>
            <p className="text-muted-foreground text-sm sm:text-lg">{t.products.subtitle}</p>
          </div>

          <Tabs defaultValue="espvision" className="w-full" onValueChange={setSelectedProduct}>
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 border border-primary/20 p-1 sm:p-2 rounded-xl max-w-2xl mx-auto h-auto">
              <TabsTrigger value="espvision" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white rounded-lg text-xs sm:text-sm py-2.5 sm:py-3 flex items-center justify-center">
                <Icon name="Eye" className="mr-1 sm:mr-2" size={16} />
                <span className="hidden sm:inline">EspVision</span>
                <span className="sm:hidden">Esp</span>
              </TabsTrigger>
              <TabsTrigger value="artvision" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white rounded-lg text-xs sm:text-sm py-2.5 sm:py-3 flex items-center justify-center">
                <Icon name="Gem" className="mr-1 sm:mr-2" size={16} />
                <span className="hidden sm:inline">ArtVision</span>
                <span className="sm:hidden">Art</span>
              </TabsTrigger>
              <TabsTrigger value="privatevision" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white rounded-lg text-xs sm:text-sm py-2.5 sm:py-3 flex items-center justify-center">
                <Icon name="Crown" className="mr-1 sm:mr-2" size={16} />
                <span className="hidden sm:inline">PrivateVision</span>
                <span className="sm:hidden">Private</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="espvision" className="animate-fade-in mt-0">
              <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-4 sm:p-8 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                  <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent">
                    <Icon name="Eye" className="text-primary" size={40} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl sm:text-3xl font-bold mb-2">{t.products.espVision.title}</h4>
                    <p className="text-lg sm:text-xl text-primary mb-4">{t.products.espVision.status}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{t.products.espVision.desc}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {t.products.espVision.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="artvision" className="animate-fade-in mt-0">
              <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-4 sm:p-8 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                  <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent">
                    <Icon name="Gem" className="text-primary" size={40} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl sm:text-3xl font-bold mb-2">{t.products.artVision.title}</h4>
                    <p className="text-lg sm:text-xl text-primary mb-4">{t.products.artVision.status}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{t.products.artVision.desc}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {t.products.artVision.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="privatevision" className="animate-fade-in mt-0">
              <Card className="border border-secondary/40 bg-gradient-to-br from-card/80 to-secondary/10 backdrop-blur-sm p-4 sm:p-8 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                  <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent">
                    <Icon name="Crown" className="text-secondary" size={40} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl sm:text-3xl font-bold mb-2">{t.products.privateVision.title}</h4>
                    <p className="text-lg sm:text-xl text-secondary mb-4">{t.products.privateVision.status}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{t.products.privateVision.desc}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-secondary">{t.products.privateVision.allFrom}</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {t.products.privateVision.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="pricing" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-neon">{t.pricing.title}</h3>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">{t.pricing.subtitle}</p>
          <div className="max-w-5xl mx-auto text-center">
            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 sm:p-12 rounded-2xl">
              <Icon name="Bot" className="text-primary mx-auto mb-4 sm:mb-6" size={48} />
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t.pricing.panelTitle}</h4>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                {t.pricing.panelDesc}
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-sm sm:text-lg px-6 sm:px-12 py-5 sm:py-6 border-0 w-full sm:w-auto"
                onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
              >
                <Icon name="ExternalLink" className="mr-2" size={18} />
                <span className="truncate">{t.pricing.openBtn}</span>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-20 px-4 sm:px-6 bg-black/30 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16">
            <p className="text-primary text-xs sm:text-sm mb-2 tracking-widest uppercase">{t.faq.title}</p>
            <h3 className="text-2xl sm:text-4xl font-bold mb-4">
              {t.faq.subtitle} <br/>
              <span className="text-primary">{t.faq.subtitle2}</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {t.faq.questions.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border border-primary/20 bg-card/40 backdrop-blur-sm px-6 rounded-xl">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 border-0 rounded-xl py-6"
              >
                <a href="https://t.me/KamiPanelbot" target="_blank" rel="noopener noreferrer">
                  {t.faq.notFoundBtn}
                </a>
              </Button>
            </div>

            <div className="relative h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl glow-pulse"></div>
              <div className="relative w-full rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-b from-purple-900/20 to-black/50">
                <img 
                  src="https://cdn.poehali.dev/files/4d9ec427-7885-4b16-919e-b640def4e82c.png" 
                  alt="STALCRAFT Character" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-neon">{t.about.title}</h3>
          
          <div className="space-y-6 sm:space-y-8">
            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-4 sm:p-8 rounded-2xl">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <Icon name="History" className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-3">{t.about.historyTitle}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                    {t.about.historyText}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-4 sm:p-8 rounded-2xl">
              <div className="flex items-start gap-3 sm:gap-4 mb-6">
                <Icon name="Users" className="text-secondary flex-shrink-0" size={28} />
                <h4 className="text-xl sm:text-2xl font-bold">{t.about.teamTitle}</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Crown" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{t.about.admin}</p>
                      <a href="https://t.me/KripKripo1ek" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">@KripKripo1ek</a>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{language === 'ru' ? 'Главный архитектор' : 'Chief Architect'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Wrench" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{t.about.support}</p>
                      <a href="https://t.me/BelyaGetSexBelka" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">@BelyaGetSexBelka</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Video" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{t.about.smm}</p>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <a href="https://t.me/ii_558zmi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@ii_558zmi</a>
                        <a href="https://t.me/Mlecknul" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@Mlecknul</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{t.about.mods}</p>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <a href="https://t.me/DrvSwapBuffers" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@DrvSwapBuffers</a>
                        <a href="https://t.me/urchex" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@urchex</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Heart" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{t.about.helpers}</p>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <a href="https://t.me/rxznve" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@rxznve</a>
                        <a href="https://t.me/hehehoue" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@hehehoue</a>
                        <a href="https://t.me/yaropolkkl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@yaropolkkl</a>
                        <a href="https://t.me/Cnclv" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@Cnclv</a>
                        <a href="https://t.me/akurise" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@akurise</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-black/30 relative">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-neon">{t.contact.title}</h3>
          <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12">{t.contact.subtitle}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <a href="https://t.me/Kripme4nik" target="_blank" rel="noopener noreferrer" className="border border-primary/20 bg-card/40 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:border-primary/40 transition-all group">
              <Icon name="Newspaper" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={36} />
              <h4 className="font-bold mb-2 text-sm sm:text-base">{t.contact.telegramNews}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{t.contact.telegramNewsDesc}</p>
            </a>
            <a href="https://t.me/+xNvCqrGN6uNhMTdi" target="_blank" rel="noopener noreferrer" className="border border-primary/20 bg-card/40 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:border-primary/40 transition-all group">
              <Icon name="MessageCircle" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={36} />
              <h4 className="font-bold mb-2 text-sm sm:text-base">{t.contact.telegramChat}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{t.contact.telegramChatDesc}</p>
            </a>
            <a href="https://discord.gg/6JuG3e484Y" target="_blank" rel="noopener noreferrer" className="border border-primary/20 bg-card/40 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:border-primary/40 transition-all group">
              <Icon name="Gamepad2" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={36} />
              <h4 className="font-bold mb-2 text-sm sm:text-base">{t.contact.discord}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{t.contact.discordDesc}</p>
            </a>
            <a href="https://www.youtube.com/@EXOMAINMEDIA" target="_blank" rel="noopener noreferrer" className="border border-primary/20 bg-card/40 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:border-primary/40 transition-all group">
              <Icon name="Youtube" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={36} />
              <h4 className="font-bold mb-2 text-sm sm:text-base">{t.contact.youtube}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{t.contact.youtubeDesc}</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-primary/20 relative">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2 text-xs sm:text-base">{t.footer.rights}</p>
          <p className="text-xs sm:text-sm">{t.footer.panel}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;