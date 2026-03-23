import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import InteractiveBackground from "@/components/InteractiveBackground";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState('espvision');
  const [language, setLanguage] = useState<'ru' | 'en'>(() => {
    return (localStorage.getItem('language') as 'ru' | 'en') || 'ru';
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [espVisionFeatureIndex, setEspVisionFeatureIndex] = useState(0);
  const [artVisionFeatureIndex, setArtVisionFeatureIndex] = useState(0);
  const [privateVisionFeatureIndex, setPrivateVisionFeatureIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
        title2: 'VISION',
        subtitle1: 'Мы предлагаем продвинутое программное обеспечение для игры,',
        subtitle2: 'подкрепленное поддержкой 24/7 и непревзойденным набором функций.',
        aboutBtn: 'О нас',
        buyBtn: 'Купить сейчас'
      },
      whyChoose: {
        title: 'Почему выбирают',
        brand: 'EXOVISION',
        fastUpdate: 'Быстрые обновления',
        fastUpdateDesc: 'Мгновенные обновления после каждого патча игры',
        undetected: 'Стабильная работа',
        undetectedDesc: 'Надёжный и стабильный софт с 2019 года',
        support: '24/7 Поддержка',
        supportDesc: 'Круглосуточная поддержка в Telegram и Discord',
        customization: 'Полная кастомизация',
        customizationDesc: 'Настраивай каждую функцию под себя'
      },
      products: {
        title: 'Наши продукты',
        subtitle: 'Выберите подходящий пакет функций',
        espVision: {
          title: 'EspVision',
          status: '✅ Активен',
          desc: 'Базовый пакет с ESP-функциями для отображения игроков, NPC и объектов на карте',
          features: [
            'AimBot — Автоматическая наводка на врагов',
            'PlayerEsp — Отображение игроков',
            'BagsEsp — Отображение трупов и сумок',
            'BarterEsp — Отображение бартера',
            'MobEsp — Отображение мобов',
            'ArtefactEsp — Отображение артефактов',
            'AnomalyEsp — Отображение аномалий',
            'NpcEsp — Отображение NPC',
            'DrawName — Имена объектов',
            'EspType (Edged,Filled,Line) — Тип рисовки',
            'Filled — Заливка бокса',
            'EspColor — Цвет бокса',
            'Distance — Дистанция до игрока',
            'Tracers — Линия до игрока',
            'DistanceColor — Цвет Distance',
            'TracersColor — Цвет Tracers',
            'MaxRange — Макс. прогруз игроков',
            'CrossHair — Прицел в центре экрана',
            'CrossHairType — Тип прицела',
            'CrossHairColor — Цвет прицела',
            'Hud — Полезная информация',
            'ShowWaterMark — Watermark на экране',
            'Полноэкранный режим | Все версии Windows'
          ]
        },
        artVision: {
          title: 'ArtVision',
          status: '✅ Активен',
          desc: 'Специализированный пакет для поиска артефактов. Дальность: 80+ метров | 360°',
          features: [
            'ArtefactEsp — Дистанция и имя артефактов',
            'SoundEsp — Отображение действий игроков',
            'OtherEsp — Аномалии и ивентовые плюшки',
            'EspType (Edged,Filled,Line) — Тип рисовки',
            'Filled — Заливка бокса',
            'CheckName — Название объекта',
            'EspColor — Цвет бокса',
            'DrawDistance — Дистанция до коробки',
            'Tracers — Линия до артефакта',
            'DistanceColor — Цвет Distance',
            'TracersColor — Цвет Tracers',
            'Distance — Ограничение дальности ESP',
            'CrossHair — Прицел в центре экрана',
            'CrossHairType — Тип прицела',
            'CrossHairColor — Цвет прицела',
            'Hud — Полезная информация',
            'ShowWaterMark — Watermark на экране',
            'Полноэкранный режим | Все версии Windows'
          ]
        },
        addonSpoofer: {
          title: 'Addon & Spoofer',
          status: '✅ Бесплатно при подписке',
          desc: 'Дополнительные утилиты, доступные при любой активной подписке',
          features: [
            'Addon — Антианомалии',
            'Spoofer — Спуф системы',
            'Доступны при любой активной подписке'
          ]
        },
        privateVision: {
          title: 'PrivateVision',
          status: '✅ Активен • Премиум',
          desc: 'Все функции EspVision + ArtVision + эксклюзивные премиум-функции',
          allFrom: 'Все из EspVision + ArtVision',
          features: [
            'CheckArmor | CheckWeapons — Броня и оружие игроков/NPC',
            'BagsEsp | BagsDistance | BagsName — Сумки после смерти',
            'TainikEsp | TainikDistance | TainikName — Схроны (малые/средние/большие)',
            'BarterEsp | BarterDistance | BarterName — Бартер, мякоть, кусты, минералы',
            'ArtefactEsp | ArtefactDistance | ArtefactName — Артефакты и их имена',
            'MobEsp | MobDistance | MobName — Все мутанты и их имена',
            'MaxPnv — ПНВ до максимального уровня',
            'AimBot — Наводка с полной кастомизацией'
          ]
        }
      },
      pricing: {
        title: 'Купить подписку',
        subtitle: 'Управление через @KamiPanelbot',
        panelTitle: 'Telegram Bot Panel',
        panelDesc: 'Все подписки и платежи оформляются через нашего Telegram бота. Удобная панель управления, мгновенная активация, история покупок.',
        openBtn: 'Открыть @KamiPanelbot',
        plans: {
          espvision: {
            name: 'EspVision',
            week: '1 неделя — 1 500 ₽',
            month: '1 месяц — 3 900 ₽'
          },
          artvision: {
            name: 'ArtVision',
            week: '1 неделя — 800 ₽',
            month: '1 месяц — 2 100 ₽'
          },
          private: {
            name: 'Private',
            price: 'Цена уточняется у тех. поддержки'
          },
          custom: {
            name: 'Кастом роль',
            desc: 'Сброс HWID, управление доступом, создание ключей',
            price: '20 000 ₽ за 3 месяца'
          }
        }
      },
      howToBuy: {
        title: 'Как купить',
        subtitle: 'Получите доступ всего за 5 простых шагов',
        steps: [
          {
            number: '01',
            title: 'Откройте Telegram бота',
            desc: 'Перейдите в @KamiPanelbot и нажмите «Начать»',
            icon: 'MessageCircle'
          },
          {
            number: '02',
            title: 'Зарегистрируйтесь',
            desc: 'Введите команду /reg логин пароль',
            icon: 'UserPlus'
          },
          {
            number: '03',
            title: 'Выберите продукт',
            desc: 'Нажмите «Покупка», выберите пакет и период подписки',
            icon: 'ShoppingCart'
          },
          {
            number: '04',
            title: 'Оплатите',
            desc: 'Выберите удобный способ оплаты и завершите платеж',
            icon: 'CreditCard'
          },
          {
            number: '05',
            title: 'Начните играть',
            desc: 'Скачайте лоадер и наслаждайтесь игрой',
            icon: 'Rocket'
          }
        ]
      },
      faq: {
        title: 'Частые Вопросы',
        subtitle: 'Не рискуйте своей безопасностью - выбирайте нас!',
        subtitle2: 'Проверенное качество с 2019 года.',
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
            a: 'EspVision - базовый пакет визуализации. ArtVision - специализирован на артефактах. PrivateVision - премиум со всеми функциями.'
          }
        ]
      },
      about: {
        title: 'О проекте ExoVision',
        historyTitle: 'История проекта',
        historyText: 'Всё началось в 2019 году с идеи KamiProject. Мы были одними из первых, кто создал инструменты визуализации для STALCRAFT. Спрос превзошел ожидания, наши разработки стали популярными.\n\nВ 2024 году произошел момент X - полное обновление концепции и дизайна проекта. С 2021 по 2025 мы расширились на другие игры: Cristalix, VimeWorld, DeadLock, Valorant, GTA5 и многие другие.',
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
        terms: 'Условия использования',
        payment: 'Оплата',
        support: 'Поддержка',
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
        title2: 'VISION',
        subtitle1: 'We deliver advanced software for the game,',
        subtitle2: 'backed by 24/7 support and an unbeatable feature set.',
        aboutBtn: 'About Us',
        buyBtn: 'Buy Now'
      },
      whyChoose: {
        title: 'Why choose',
        brand: 'EXOVISION',
        fastUpdate: 'Fastest to update',
        fastUpdateDesc: 'Instant updates after every game patch',
        undetected: 'Reliable Software',
        undetectedDesc: 'Stable and reliable software since 2019',
        support: '24/7 Support',
        supportDesc: 'Round-the-clock support in Telegram and Discord',
        customization: 'Full customization',
        customizationDesc: 'Customize every feature to your liking'
      },
      products: {
        title: 'Our Products',
        subtitle: 'Choose the right feature package',
        espVision: {
          title: 'EspVision',
          status: '✅ Active',
          desc: 'Basic ESP package for displaying players, NPCs and objects on the map',
          features: [
            'AimBot — Automatic aim on enemies',
            'PlayerEsp — Display players',
            'BagsEsp — Display corpses and bags',
            'BarterEsp — Display barter locations',
            'MobEsp — Display mobs',
            'ArtefactEsp — Display artifacts',
            'AnomalyEsp — Display anomalies',
            'NpcEsp — Display NPCs',
            'DrawName — Object names',
            'EspType (Edged,Filled,Line) — Drawing type',
            'Filled — Box fill',
            'EspColor — Box color',
            'Distance — Distance to player',
            'Tracers — Line to player',
            'DistanceColor — Distance color',
            'TracersColor — Tracers color',
            'MaxRange — Max player render range',
            'CrossHair — Crosshair on screen',
            'CrossHairType — Crosshair type',
            'CrossHairColor — Crosshair color',
            'Hud — Useful overlay info',
            'ShowWaterMark — Watermark on screen',
            'Fullscreen mode | All Windows versions'
          ]
        },
        artVision: {
          title: 'ArtVision',
          status: '✅ Active',
          desc: 'Specialized artifact hunting package. Range: 80+ meters | 360°',
          features: [
            'ArtefactEsp — Artifact distance and name',
            'SoundEsp — Player actions display',
            'OtherEsp — Anomalies and event items',
            'EspType (Edged,Filled,Line) — Drawing type',
            'Filled — Box fill',
            'CheckName — Object name',
            'EspColor — Box color',
            'DrawDistance — Distance to box',
            'Tracers — Line to artifact',
            'DistanceColor — Distance color',
            'TracersColor — Tracers color',
            'Distance — ESP range limit',
            'CrossHair — Crosshair on screen',
            'CrossHairType — Crosshair type',
            'CrossHairColor — Crosshair color',
            'Hud — Useful overlay info',
            'ShowWaterMark — Watermark on screen',
            'Fullscreen mode | All Windows versions'
          ]
        },
        addonSpoofer: {
          title: 'Addon & Spoofer',
          status: '✅ Free with subscription',
          desc: 'Extra utilities available with any active subscription',
          features: [
            'Addon — Anti-anomaly',
            'Spoofer — System spoof',
            'Available with any active subscription'
          ]
        },
        privateVision: {
          title: 'PrivateVision',
          status: '✅ Active • Premium',
          desc: 'All EspVision + ArtVision features + exclusive premium features',
          allFrom: 'All from EspVision + ArtVision',
          features: [
            'CheckArmor | CheckWeapons — Armor & weapon info for players/NPCs',
            'BagsEsp | BagsDistance | BagsName — Death bags display',
            'TainikEsp | TainikDistance | TainikName — All stash sizes',
            'BarterEsp | BarterDistance | BarterName — Barters, minerals',
            'ArtefactEsp | ArtefactDistance | ArtefactName — Artifacts & names',
            'MobEsp | MobDistance | MobName — All mutants & names',
            'MaxPnv — Maximum NVG level',
            'AimBot — Aim assist with full customization'
          ]
        }
      },
      pricing: {
        title: 'Buy Subscription',
        subtitle: 'Managed via @KamiPanelbot',
        panelTitle: 'Telegram Bot Panel',
        panelDesc: 'All subscriptions and payments are processed through our Telegram bot. Convenient control panel, instant activation, purchase history.',
        openBtn: 'Open @KamiPanelbot',
        plans: {
          espvision: {
            name: 'EspVision',
            week: '1 week — 1,500 ₽',
            month: '1 month — 3,900 ₽'
          },
          artvision: {
            name: 'ArtVision',
            week: '1 week — 800 ₽',
            month: '1 month — 2,100 ₽'
          },
          private: {
            name: 'Private',
            price: 'Price available from tech support'
          },
          custom: {
            name: 'Custom Role',
            desc: 'HWID reset, access management, create keys',
            price: '20,000 ₽ for 3 months'
          }
        }
      },
      howToBuy: {
        title: 'How to buy',
        subtitle: 'Get access in just 5 simple steps',
        steps: [
          {
            number: '01',
            title: 'Open Telegram Bot',
            desc: 'Go to @KamiPanelbot and click «Start»',
            icon: 'MessageCircle'
          },
          {
            number: '02',
            title: 'Register',
            desc: 'Enter command /reg login password',
            icon: 'UserPlus'
          },
          {
            number: '03',
            title: 'Choose Product',
            desc: 'Click «Purchase», select software and subscription period',
            icon: 'ShoppingCart'
          },
          {
            number: '04',
            title: 'Pay',
            desc: 'Choose convenient payment method and complete the transaction',
            icon: 'CreditCard'
          },
          {
            number: '05',
            title: 'Start Playing',
            desc: 'Download loader and enjoy the game',
            icon: 'Rocket'
          }
        ]
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
            a: 'EspVision - basic visualization package. ArtVision - specialized for artifacts. PrivateVision - premium with all features.'
          }
        ]
      },
      about: {
        title: 'About ExoVision Project',
        historyTitle: 'Project History',
        historyText: 'It all started in 2019 with the KamiProject idea. We were among the first to create visualization tools for STALCRAFT. Demand exceeded expectations, our developments became widely popular.\n\nIn 2024, moment X happened - a complete update of the project concept and design. From 2021 to 2025, we expanded to other games: Cristalix, VimeWorld, DeadLock, Valorant, GTA5 and many others.',
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
        terms: 'Terms of Service',
        payment: 'Payment',
        support: 'Support',
        rights: '© 2019-2025 ExoVision Project. All rights reserved.',
        panel: 'Subscription management: @KamiPanelbot'
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    const isLowEndDevice = () => {
      const memory = (navigator as any).deviceMemory;
      const cores = navigator.hardwareConcurrency;
      return (memory && memory < 6) || (cores && cores < 6);
    };

    if (isLowEndDevice()) {
      document.body.classList.add('low-end-device');
      return;
    }

    const particleCount = 20;
    const particleInterval = 800;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 6 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 8 + 20}s`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      
      document.getElementById('particles-container')?.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 30000);
    };

    const interval = setInterval(createParticle, particleInterval);
    
    for (let i = 0; i < particleCount; i++) {
      setTimeout(createParticle, i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black relative">
      <InteractiveBackground />
      <div id="particles-container" className="fixed inset-0 pointer-events-none overflow-hidden z-0"></div>
      
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
              <span className="text-lg sm:text-2xl font-bold text-neon tracking-wider">ExoVision</span>
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

      <HeroSection t={t} scrollToSection={scrollToSection} />

      <section id="about" className="sm:py-20 px-4 sm:px-6 relative py-5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm text-primary mb-2 tracking-widest uppercase">{t.whyChoose.title}</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.whyChoose.brand}</h2>
          </div>
          
          <div className="lg:hidden">
            <div 
              className="relative overflow-hidden"
              onTouchStart={(e) => {
                const touch = e.touches[0];
                e.currentTarget.dataset.touchStartX = touch.clientX.toString();
              }}
              onTouchEnd={(e) => {
                const touchStartX = parseFloat(e.currentTarget.dataset.touchStartX || '0');
                const touchEndX = e.changedTouches[0].clientX;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > 50) {
                  if (diff > 0 && currentFeature < 3) {
                    setCurrentFeature(prev => prev + 1);
                  } else if (diff < 0 && currentFeature > 0) {
                    setCurrentFeature(prev => prev - 1);
                  }
                }
              }}
            >
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentFeature * 100}%)` }}
              >
                {[
                  { icon: 'Zap', color: 'primary', title: t.whyChoose.fastUpdate, desc: t.whyChoose.fastUpdateDesc, delay: '0s' },
                  { icon: 'ShieldCheck', color: 'secondary', title: t.whyChoose.undetected, desc: t.whyChoose.undetectedDesc, delay: '0.5s' },
                  { icon: 'Users', color: 'primary', title: t.whyChoose.support, desc: t.whyChoose.supportDesc, delay: '1s' },
                  { icon: 'Settings', color: 'secondary', title: t.whyChoose.customization, desc: t.whyChoose.customizationDesc, delay: '1.5s' }
                ].map((item, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2">
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}/20 to-transparent rounded-2xl blur-xl glow-pulse`}></div>
                      <Card className="relative bg-card/40 backdrop-blur-sm border-primary/20 p-6 rounded-2xl">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color}/20 to-transparent flex items-center justify-center mb-4`}>
                          <Icon name={item.icon} className={`text-${item.color}`} size={28} />
                        </div>
                        <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentFeature(Math.max(0, currentFeature - 1))}
                disabled={currentFeature === 0}
                className="border-primary/20 hover:bg-primary/10"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
              
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentFeature(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentFeature 
                        ? 'bg-primary w-8' 
                        : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentFeature(Math.min(3, currentFeature + 1))}
                disabled={currentFeature === 3}
                className="border-primary/20 hover:bg-primary/10"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </div>

          <div className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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

      <section className="sm:py-20 px-4 sm:px-6 relative overflow-hidden py-5 hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm text-primary mb-2 tracking-widest uppercase">СКРИНШОТЫ</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Чит в действии</h2>
          </div>
          
          <div className="md:hidden">
            <div 
              className="relative overflow-hidden rounded-2xl"
              onTouchStart={(e) => {
                const touch = e.touches[0];
                e.currentTarget.dataset.touchStartX = touch.clientX.toString();
              }}
              onTouchEnd={(e) => {
                const touchStartX = parseFloat(e.currentTarget.dataset.touchStartX || '0');
                const touchEndX = e.changedTouches[0].clientX;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > 50) {
                  if (diff > 0 && currentScreenshot < 2) {
                    setCurrentScreenshot(prev => prev + 1);
                  } else if (diff < 0 && currentScreenshot > 0) {
                    setCurrentScreenshot(prev => prev - 1);
                  }
                }
              }}
            >
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentScreenshot * 100}%)` }}
              >
                {[
                  { img: 'https://cdn.poehali.dev/files/dfc53c5b-ecf1-460a-b412-fa582f397426.png', title: 'ESP через стены', desc: 'Видимость игроков и объектов' },
                  { img: 'https://cdn.poehali.dev/files/c9b76ade-9b6a-46f7-8258-4db212d101ec.png', title: 'Разделение игроков и NPC', desc: 'Разные цвета подсветки' },
                  { img: 'https://cdn.poehali.dev/files/01bf24f6-bf67-4298-aa3f-5c2a3c672fab.png', title: 'Визуалы', desc: 'Кастомные эффекты и подсветка' }
                ].map((item, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2">
                    <div className="relative group overflow-hidden rounded-2xl border border-primary/20">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                      <img 
                        src={item.img} 
                        alt={item.title}
                        loading="lazy" 
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentScreenshot(Math.max(0, currentScreenshot - 1))}
                disabled={currentScreenshot === 0}
                className="border-primary/20 hover:bg-primary/10"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
              
              <div className="flex gap-2">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentScreenshot(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentScreenshot 
                        ? 'bg-primary w-8' 
                        : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentScreenshot(Math.min(2, currentScreenshot + 1))}
                disabled={currentScreenshot === 2}
                className="border-primary/20 hover:bg-primary/10"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative group overflow-hidden rounded-2xl border border-primary/20 hover:border-primary/40 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="https://cdn.poehali.dev/files/dfc53c5b-ecf1-460a-b412-fa582f397426.png" 
                alt="ESP через стены"
                loading="lazy" 
                className="w-full h-full object-cover"
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
                loading="lazy" 
                className="w-full h-full object-cover"
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
                loading="lazy" 
                className="w-full h-full object-cover"
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-4" style={{background: 'linear-gradient(to right, #8B5CF6, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{t.products.title}</h2>
            <p className="text-muted-foreground text-sm sm:text-lg">{t.products.subtitle}</p>
          </div>

          <Tabs defaultValue="espvision" className="w-full" onValueChange={setSelectedProduct}>
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-card/50 border border-primary/20 p-1 sm:p-2 rounded-xl max-w-3xl mx-auto h-auto">
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
              <TabsTrigger value="addonspoofer" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white rounded-lg text-xs sm:text-sm py-2.5 sm:py-3 flex items-center justify-center">
                <Icon name="Wrench" className="mr-1 sm:mr-2" size={16} />
                <span className="hidden sm:inline">Addon & Spoofer</span>
                <span className="sm:hidden">Addon</span>
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
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{t.products.espVision.title}</h3>
                    <p className="text-lg sm:text-xl text-primary mb-4">{t.products.espVision.status}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{t.products.espVision.desc}</p>
                  </div>
                </div>
                <div className="mb-6">
                  {/* Mobile: Slider with 6 items per slide */}
                  <div className="md:hidden relative">
                    <div 
                      className="overflow-hidden"
                      onTouchStart={(e) => {
                        const touch = e.touches[0];
                        e.currentTarget.dataset.touchStartX = touch.clientX.toString();
                      }}
                      onTouchEnd={(e) => {
                        const touchStartX = parseFloat(e.currentTarget.dataset.touchStartX || '0');
                        const touchEndX = e.changedTouches[0].clientX;
                        const diff = touchStartX - touchEndX;
                        const maxIndex = Math.ceil(t.products.espVision.features.length / 6) - 1;
                        
                        if (Math.abs(diff) > 50) {
                          if (diff > 0 && espVisionFeatureIndex < maxIndex) {
                            setEspVisionFeatureIndex(prev => prev + 1);
                          } else if (diff < 0 && espVisionFeatureIndex > 0) {
                            setEspVisionFeatureIndex(prev => prev - 1);
                          }
                        }
                      }}
                    >
                      <div 
                        className="flex transition-transform duration-300 ease-out"
                        style={{ transform: `translateX(-${espVisionFeatureIndex * 100}%)` }}
                      >
                        {Array.from({ length: Math.ceil(t.products.espVision.features.length / 6) }).map((_, slideIdx) => (
                          <div key={slideIdx} className="w-full flex-shrink-0 px-1">
                            <div className="grid grid-cols-2 gap-2">
                              {t.products.espVision.features.slice(slideIdx * 6, (slideIdx + 1) * 6).map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 px-2 py-2 rounded-lg bg-primary/5 border border-primary/10 min-h-[48px]">
                                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={12} />
                                  <span className="text-[10px] leading-tight break-words">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {Math.ceil(t.products.espVision.features.length / 6) > 1 && (
                      <>
                        <button
                          onClick={() => setEspVisionFeatureIndex(prev => Math.max(0, prev - 1))}
                          disabled={espVisionFeatureIndex === 0}
                          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-primary/90 hover:bg-primary disabled:opacity-30 disabled:cursor-not-allowed text-primary-foreground p-2 rounded-full transition-all shadow-lg"
                        >
                          <Icon name="ChevronLeft" size={20} />
                        </button>
                        <button
                          onClick={() => setEspVisionFeatureIndex(prev => Math.min(Math.ceil(t.products.espVision.features.length / 6) - 1, prev + 1))}
                          disabled={espVisionFeatureIndex >= Math.ceil(t.products.espVision.features.length / 6) - 1}
                          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-primary/90 hover:bg-primary disabled:opacity-30 disabled:cursor-not-allowed text-primary-foreground p-2 rounded-full transition-all shadow-lg"
                        >
                          <Icon name="ChevronRight" size={20} />
                        </button>
                        
                        <div className="flex justify-center gap-2 mt-4">
                          {Array.from({ length: Math.ceil(t.products.espVision.features.length / 6) }).map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setEspVisionFeatureIndex(idx)}
                              className={`h-1.5 rounded-full transition-all ${
                                idx === espVisionFeatureIndex ? 'w-6 bg-primary' : 'w-1.5 bg-primary/30'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Desktop: Grid */}
                  <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {t.products.espVision.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={14} />
                        <span className="text-xs font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-primary/20">
                    <iframe 
                      src="https://vkvideo.ru/video_ext.php?oid=-233657980&id=456239017&hash=932956d3b3c9b547" 
                      className="w-full h-full" 
                      style={{ backgroundColor: '#000' }}
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture" 
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  </div>
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
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{t.products.artVision.title}</h3>
                    <p className="text-lg sm:text-xl text-primary mb-4">{t.products.artVision.status}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{t.products.artVision.desc}</p>
                  </div>
                </div>
                <div className="mb-6">
                  {/* Mobile: Slider with 6 items per slide */}
                  <div className="md:hidden relative">
                    <div 
                      className="overflow-hidden"
                      onTouchStart={(e) => {
                        const touch = e.touches[0];
                        e.currentTarget.dataset.touchStartX = touch.clientX.toString();
                      }}
                      onTouchEnd={(e) => {
                        const touchStartX = parseFloat(e.currentTarget.dataset.touchStartX || '0');
                        const touchEndX = e.changedTouches[0].clientX;
                        const diff = touchStartX - touchEndX;
                        const maxIndex = Math.ceil(t.products.artVision.features.length / 6) - 1;
                        
                        if (Math.abs(diff) > 50) {
                          if (diff > 0 && artVisionFeatureIndex < maxIndex) {
                            setArtVisionFeatureIndex(prev => prev + 1);
                          } else if (diff < 0 && artVisionFeatureIndex > 0) {
                            setArtVisionFeatureIndex(prev => prev - 1);
                          }
                        }
                      }}
                    >
                      <div 
                        className="flex transition-transform duration-300 ease-out"
                        style={{ transform: `translateX(-${artVisionFeatureIndex * 100}%)` }}
                      >
                        {Array.from({ length: Math.ceil(t.products.artVision.features.length / 6) }).map((_, slideIdx) => (
                          <div key={slideIdx} className="w-full flex-shrink-0 px-1">
                            <div className="grid grid-cols-2 gap-2">
                              {t.products.artVision.features.slice(slideIdx * 6, (slideIdx + 1) * 6).map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 px-2 py-2 rounded-lg bg-primary/5 border border-primary/10 min-h-[48px]">
                                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={12} />
                                  <span className="text-[10px] leading-tight break-words">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {Math.ceil(t.products.artVision.features.length / 6) > 1 && (
                      <>
                        <button
                          onClick={() => setArtVisionFeatureIndex(prev => Math.max(0, prev - 1))}
                          disabled={artVisionFeatureIndex === 0}
                          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-primary/90 hover:bg-primary disabled:opacity-30 disabled:cursor-not-allowed text-primary-foreground p-2 rounded-full transition-all shadow-lg"
                        >
                          <Icon name="ChevronLeft" size={20} />
                        </button>
                        <button
                          onClick={() => setArtVisionFeatureIndex(prev => Math.min(Math.ceil(t.products.artVision.features.length / 6) - 1, prev + 1))}
                          disabled={artVisionFeatureIndex >= Math.ceil(t.products.artVision.features.length / 6) - 1}
                          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-primary/90 hover:bg-primary disabled:opacity-30 disabled:cursor-not-allowed text-primary-foreground p-2 rounded-full transition-all shadow-lg"
                        >
                          <Icon name="ChevronRight" size={20} />
                        </button>
                        
                        <div className="flex justify-center gap-2 mt-4">
                          {Array.from({ length: Math.ceil(t.products.artVision.features.length / 6) }).map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setArtVisionFeatureIndex(idx)}
                              className={`h-1.5 rounded-full transition-all ${
                                idx === artVisionFeatureIndex ? 'w-6 bg-primary' : 'w-1.5 bg-primary/30'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Desktop: Grid */}
                  <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {t.products.artVision.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={14} />
                        <span className="text-xs font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-primary/20">
                    <iframe 
                      src="https://vkvideo.ru/video_ext.php?oid=-233657980&id=456239018&hash=c22f100fff9c5351" 
                      width="640" 
                      height="360" 
                      frameBorder="0" 
                      allowFullScreen 
                      style={{ backgroundColor: '#000' }} 
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="addonspoofer" className="animate-fade-in mt-0">
              <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-4 sm:p-8 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                  <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent">
                    <Icon name="Wrench" className="text-primary" size={40} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{t.products.addonSpoofer.title}</h3>
                    <p className="text-lg sm:text-xl text-primary mb-4">{t.products.addonSpoofer.status}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{t.products.addonSpoofer.desc}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {t.products.addonSpoofer.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                      <Icon name="Check" className="text-primary flex-shrink-0" size={16} />
                      <span className="text-sm font-medium">{feature}</span>
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
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{t.products.privateVision.title}</h3>
                    <p className="text-lg sm:text-xl text-secondary mb-4">{t.products.privateVision.status}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{t.products.privateVision.desc}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-secondary">{t.products.privateVision.allFrom}</p>
                  
                  {/* Mobile: Slider with 6 items per slide */}
                  <div className="md:hidden relative">
                    <div 
                      className="overflow-hidden"
                      onTouchStart={(e) => {
                        const touch = e.touches[0];
                        e.currentTarget.dataset.touchStartX = touch.clientX.toString();
                      }}
                      onTouchEnd={(e) => {
                        const touchStartX = parseFloat(e.currentTarget.dataset.touchStartX || '0');
                        const touchEndX = e.changedTouches[0].clientX;
                        const diff = touchStartX - touchEndX;
                        const maxIndex = Math.ceil(t.products.privateVision.features.length / 6) - 1;
                        
                        if (Math.abs(diff) > 50) {
                          if (diff > 0 && privateVisionFeatureIndex < maxIndex) {
                            setPrivateVisionFeatureIndex(prev => prev + 1);
                          } else if (diff < 0 && privateVisionFeatureIndex > 0) {
                            setPrivateVisionFeatureIndex(prev => prev - 1);
                          }
                        }
                      }}
                    >
                      <div 
                        className="flex transition-transform duration-300 ease-out"
                        style={{ transform: `translateX(-${privateVisionFeatureIndex * 100}%)` }}
                      >
                        {Array.from({ length: Math.ceil(t.products.privateVision.features.length / 6) }).map((_, slideIdx) => (
                          <div key={slideIdx} className="w-full flex-shrink-0 px-1">
                            <div className="grid grid-cols-2 gap-2">
                              {t.products.privateVision.features.slice(slideIdx * 6, (slideIdx + 1) * 6).map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 px-2 py-2 rounded-lg bg-secondary/5 border border-secondary/10 min-h-[48px]">
                                  <Icon name="Check" className="text-secondary flex-shrink-0 mt-0.5" size={12} />
                                  <span className="text-[10px] leading-tight break-words">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {Math.ceil(t.products.privateVision.features.length / 6) > 1 && (
                      <>
                        <button
                          onClick={() => setPrivateVisionFeatureIndex(prev => Math.max(0, prev - 1))}
                          disabled={privateVisionFeatureIndex === 0}
                          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-secondary/90 hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed text-secondary-foreground p-2 rounded-full transition-all shadow-lg"
                        >
                          <Icon name="ChevronLeft" size={20} />
                        </button>
                        <button
                          onClick={() => setPrivateVisionFeatureIndex(prev => Math.min(Math.ceil(t.products.privateVision.features.length / 6) - 1, prev + 1))}
                          disabled={privateVisionFeatureIndex >= Math.ceil(t.products.privateVision.features.length / 6) - 1}
                          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-secondary/90 hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed text-secondary-foreground p-2 rounded-full transition-all shadow-lg"
                        >
                          <Icon name="ChevronRight" size={20} />
                        </button>
                        
                        <div className="flex justify-center gap-2 mt-4">
                          {Array.from({ length: Math.ceil(t.products.privateVision.features.length / 6) }).map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setPrivateVisionFeatureIndex(idx)}
                              className={`h-1.5 rounded-full transition-all ${
                                idx === privateVisionFeatureIndex ? 'w-6 bg-secondary' : 'w-1.5 bg-secondary/30'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Desktop: Grid */}
                  <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {t.products.privateVision.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 transition-colors">
                        <Icon name="Check" className="text-secondary flex-shrink-0" size={14} />
                        <span className="text-xs font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-secondary/20">
                    <iframe 
                      src="https://vkvideo.ru/video_ext.php?oid=-233657980&id=456239017&hash=932956d3b3c9b547" 
                      className="w-full h-full" 
                      style={{ backgroundColor: '#000' }}
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture" 
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="pricing" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-neon">{t.pricing.title}</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">{t.pricing.subtitle}</p>
          <div className="max-w-5xl mx-auto">
            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 sm:p-12 rounded-2xl">
              <div className="text-center mb-8 sm:mb-10">
                <Icon name="Bot" className="text-primary mx-auto mb-4 sm:mb-6" size={48} />
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t.pricing.panelTitle}</h4>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                  {t.pricing.panelDesc}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="border border-purple-500/30 rounded-xl p-4 sm:p-5 bg-gradient-to-br from-purple-950/40 to-card/20 text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Eye" className="text-purple-400" size={20} />
                    <h5 className="font-bold text-base sm:text-lg">{t.pricing.plans.espvision.name}</h5>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Icon name="Clock" className="text-purple-400 flex-shrink-0" size={14} />
                      <span>{t.pricing.plans.espvision.week}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Calendar" className="text-purple-400 flex-shrink-0" size={14} />
                      <span className="font-semibold text-foreground">{t.pricing.plans.espvision.month}</span>
                    </p>
                  </div>
                </div>

                <div className="border border-blue-500/30 rounded-xl p-4 sm:p-5 bg-gradient-to-br from-blue-950/40 to-card/20 text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Sparkles" className="text-blue-400" size={20} />
                    <h5 className="font-bold text-base sm:text-lg">{t.pricing.plans.artvision.name}</h5>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Icon name="Clock" className="text-blue-400 flex-shrink-0" size={14} />
                      <span>{t.pricing.plans.artvision.week}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Calendar" className="text-blue-400 flex-shrink-0" size={14} />
                      <span className="font-semibold text-foreground">{t.pricing.plans.artvision.month}</span>
                    </p>
                  </div>
                </div>

                <div className="border border-pink-500/30 rounded-xl p-4 sm:p-5 bg-gradient-to-br from-pink-950/40 to-card/20 text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Crown" className="text-pink-400" size={20} />
                    <h5 className="font-bold text-base sm:text-lg">{t.pricing.plans.private.name}</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                    <Icon name="MessageCircle" className="text-pink-400 flex-shrink-0 mt-0.5" size={14} />
                    <span>{t.pricing.plans.private.price}</span>
                  </p>
                </div>

                <div className="border border-amber-500/30 rounded-xl p-4 sm:p-5 bg-gradient-to-br from-amber-950/40 to-card/20 text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Star" className="text-amber-400" size={20} />
                    <h5 className="font-bold text-base sm:text-lg">{t.pricing.plans.custom.name}</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">{t.pricing.plans.custom.desc}</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground flex items-center gap-2">
                    <Icon name="Wallet" className="text-amber-400 flex-shrink-0" size={14} />
                    <span>{t.pricing.plans.custom.price}</span>
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-sm sm:text-lg px-6 sm:px-12 py-5 sm:py-6 border-0 w-full sm:w-auto"
                  onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
                >
                  <Icon name="ExternalLink" className="mr-2" size={18} />
                  <span className="truncate">{t.pricing.openBtn}</span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black/50 to-black/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-primary text-xs sm:text-sm mb-2 tracking-widest uppercase">{t.howToBuy.title}</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              {t.howToBuy.subtitle}
            </h2>
          </div>
          
          <div className="sm:hidden">
            <div 
              className="relative overflow-hidden"
              onTouchStart={(e) => {
                const touch = e.touches[0];
                e.currentTarget.dataset.touchStartX = touch.clientX.toString();
              }}
              onTouchEnd={(e) => {
                const touchStartX = parseFloat(e.currentTarget.dataset.touchStartX || '0');
                const touchEndX = e.changedTouches[0].clientX;
                const diff = touchStartX - touchEndX;
                const maxIndex = t.howToBuy.steps.length - 1;
                
                if (Math.abs(diff) > 50) {
                  if (diff > 0 && currentStep < maxIndex) {
                    setCurrentStep(prev => prev + 1);
                  } else if (diff < 0 && currentStep > 0) {
                    setCurrentStep(prev => prev - 1);
                  }
                }
              }}
            >
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentStep * 100}%)` }}
              >
                {t.howToBuy.steps.map((step, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2">
                    <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 rounded-2xl">
                      <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center gap-4 w-full">
                          <div className="text-5xl font-bold text-primary/20">
                            {step.number}
                          </div>
                          <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent">
                            <Icon name={step.icon} className="text-primary" size={28} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="border-primary/20 hover:bg-primary/10"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
              
              <div className="flex gap-2">
                {t.howToBuy.steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStep(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentStep 
                        ? 'bg-primary w-8' 
                        : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentStep(Math.min(t.howToBuy.steps.length - 1, currentStep + 1))}
                disabled={currentStep === t.howToBuy.steps.length - 1}
                className="border-primary/20 hover:bg-primary/10"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </div>

          <div className="hidden sm:grid gap-6 sm:gap-8">
            {t.howToBuy.steps.map((step, idx) => (
              <Card 
                key={idx}
                className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
                    <div className="text-5xl sm:text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                      {step.number}
                    </div>
                    <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent group-hover:from-primary/30 transition-colors">
                      <Icon name={step.icon} className="text-primary" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-12 py-6 border-0"
              onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Начать покупку
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-20 px-4 sm:px-6 bg-black/30 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16">
            <p className="text-primary text-xs sm:text-sm mb-2 tracking-widest uppercase">{t.faq.title}</p>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
              {t.faq.subtitle} <br/>
              <span className="text-primary">{t.faq.subtitle2}</span>
            </h2>
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
              <div className="relative w-full rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-b from-purple-900/20 to-black/50 p-8 sm:p-12">
                <div className="text-center space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4">
                      <div className="text-3xl sm:text-4xl font-black text-primary mb-1">5000+</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Пользователей</div>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-4">
                      <div className="text-3xl sm:text-4xl font-black text-secondary mb-1">6+</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Лет на рынке</div>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4">
                      <div className="text-3xl sm:text-4xl font-black text-primary mb-1">24/7</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Поддержка</div>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-4">
                      <div className="text-3xl sm:text-4xl font-black text-secondary mb-1">4</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Продукта</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm text-primary mb-2 tracking-widest uppercase">{language === 'ru' ? 'ПОЧЕМУ МЫ' : 'WHY US'}</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{language === 'ru' ? 'ExoVision с 2019 года' : 'ExoVision since 2019'}</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Мы создаём программное обеспечение для игр с 2019 года. За это время мы выпустили 4 продукта, собрали сообщество из 5000+ пользователей и обеспечиваем круглосуточную поддержку.'
                : 'We have been creating software for games since 2019. Over this time we released 4 products, built a community of 5000+ users and provide round-the-clock support.'
              }
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {[
              { icon: 'Calendar', color: 'primary', value: '2019', label: language === 'ru' ? 'Год основания' : 'Founded' },
              { icon: 'Users', color: 'secondary', value: '5000+', label: language === 'ru' ? 'Пользователей' : 'Users' },
              { icon: 'Package', color: 'primary', value: '4', label: language === 'ru' ? 'Продукта' : 'Products' },
              { icon: 'Headphones', color: 'secondary', value: '24/7', label: language === 'ru' ? 'Поддержка' : 'Support' },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
                <Card className="relative bg-card/40 backdrop-blur-sm border-primary/20 p-6 rounded-2xl text-center hover:border-primary/40 transition-all">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-${item.color}/20 to-transparent flex items-center justify-center mb-4 mx-auto`}>
                    <Icon name={item.icon} className={`text-${item.color}`} size={24} />
                  </div>
                  <div className={`text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1`}>{item.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                </Card>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: 'Zap', title: language === 'ru' ? 'Быстрые обновления' : 'Fast updates', desc: language === 'ru' ? 'Обновляем ПО после каждого патча игры в кратчайшие сроки' : 'Software updated after every game patch as fast as possible' },
              { icon: 'ShieldCheck', title: language === 'ru' ? 'Стабильная работа' : 'Stable operation', desc: language === 'ru' ? 'Надёжный и проверенный временем продукт с 2019 года' : 'Reliable and time-tested product since 2019' },
              { icon: 'Settings', title: language === 'ru' ? 'Полная кастомизация' : 'Full customization', desc: language === 'ru' ? 'Гибкие настройки для каждой функции под ваши нужды' : 'Flexible settings for every feature to suit your needs' },
            ].map((item, idx) => (
              <Card key={idx} className="bg-card/40 backdrop-blur-sm border-primary/20 p-5 rounded-2xl hover:border-primary/40 transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-black/30 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-neon">{t.contact.title}</h2>
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
          <div className="flex justify-center gap-4 mb-4 text-xs sm:text-sm">
            <a href="/terms" className="hover:text-primary transition-colors">{t.footer.terms}</a>
            <span>•</span>
            <a href="/payment" className="hover:text-primary transition-colors">{t.footer.payment}</a>
            <span>•</span>
            <a href="https://t.me/KamiPanelbot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t.footer.support}</a>
          </div>
          <p className="mb-2 text-xs sm:text-base">{t.footer.rights}</p>
          <p className="text-xs sm:text-sm">{t.footer.panel}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;