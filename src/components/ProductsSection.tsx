import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Product {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: string;
  color: string;
  badge?: string;
  groups: { label: string; icon: string; items: string[] }[];
}

interface ProductsSectionProps {
  t: {
    products: {
      title: string;
      subtitle: string;
      espVision: { title: string; status: string; desc: string; features: string[] };
      artVision: { title: string; status: string; desc: string; features: string[] };
      addonSpoofer: { title: string; status: string; desc: string; features: string[] };
      privateVision: { title: string; status: string; desc: string; allFrom: string; features: string[] };
    };
  };
  language: 'ru' | 'en';
}

export default function ProductsSection({ t, language }: ProductsSectionProps) {
  const [active, setActive] = useState('espvision');

  const products: Product[] = [
    {
      id: 'espvision',
      title: t.products.espVision.title,
      subtitle: t.products.espVision.status,
      desc: t.products.espVision.desc,
      icon: 'Eye',
      color: 'primary',
      groups: [
        {
          label: language === 'ru' ? 'Наводка' : 'Aim',
          icon: 'Crosshair',
          items: ['AimBot — ' + (language === 'ru' ? 'Автоматическая наводка на врагов' : 'Automatic aim on enemies')],
        },
        {
          label: 'ESP',
          icon: 'Scan',
          items: [
            'PlayerEsp — ' + (language === 'ru' ? 'Игроки' : 'Players'),
            'BagsEsp — ' + (language === 'ru' ? 'Трупы и сумки' : 'Corpses & bags'),
            'BarterEsp — ' + (language === 'ru' ? 'Бартер' : 'Barter'),
            'MobEsp — ' + (language === 'ru' ? 'Мобы' : 'Mobs'),
            'ArtefactEsp — ' + (language === 'ru' ? 'Артефакты' : 'Artifacts'),
            'AnomalyEsp — ' + (language === 'ru' ? 'Аномалии' : 'Anomalies'),
            'NpcEsp — ' + (language === 'ru' ? 'NPC' : 'NPC'),
          ],
        },
        {
          label: language === 'ru' ? 'Настройки' : 'Settings',
          icon: 'SlidersHorizontal',
          items: [
            'DrawName — ' + (language === 'ru' ? 'Имена объектов' : 'Object names'),
            'EspType — Edged / Filled / Line',
            'EspColor — ' + (language === 'ru' ? 'Цвет бокса' : 'Box color'),
            'Distance — ' + (language === 'ru' ? 'Дистанция' : 'Distance'),
            'Tracers — ' + (language === 'ru' ? 'Линия до цели' : 'Line to target'),
            'MaxRange — ' + (language === 'ru' ? 'Макс. прогруз' : 'Max render range'),
          ],
        },
        {
          label: language === 'ru' ? 'Интерфейс' : 'Interface',
          icon: 'LayoutDashboard',
          items: [
            'CrossHair — ' + (language === 'ru' ? 'Прицел (3 типа)' : 'Crosshair (3 types)'),
            'Hud — ' + (language === 'ru' ? 'Полезная информация' : 'Useful overlay'),
            'ShowWaterMark — Watermark',
            language === 'ru' ? 'Полноэкранный режим | Все Windows' : 'Fullscreen | All Windows',
          ],
        },
      ],
    },
    {
      id: 'artvision',
      title: t.products.artVision.title,
      subtitle: t.products.artVision.status,
      desc: t.products.artVision.desc,
      icon: 'Gem',
      color: 'primary',
      badge: '80+ м',
      groups: [
        {
          label: language === 'ru' ? 'Обнаружение' : 'Detection',
          icon: 'Radar',
          items: [
            'ArtefactEsp — ' + (language === 'ru' ? 'Дистанция и имя артефакта' : 'Artifact distance & name'),
            'SoundEsp — ' + (language === 'ru' ? 'Действия игроков' : 'Player actions'),
            'OtherEsp — ' + (language === 'ru' ? 'Аномалии и ивентовые объекты' : 'Anomalies & event items'),
          ],
        },
        {
          label: language === 'ru' ? 'Настройки ESP' : 'ESP Settings',
          icon: 'SlidersHorizontal',
          items: [
            'EspType — Edged / Filled / Line',
            'CheckName — ' + (language === 'ru' ? 'Название объекта' : 'Object name'),
            'EspColor — ' + (language === 'ru' ? 'Цвет бокса' : 'Box color'),
            'DrawDistance — ' + (language === 'ru' ? 'Дистанция до объекта' : 'Distance to object'),
            'Tracers — ' + (language === 'ru' ? 'Линия до артефакта' : 'Line to artifact'),
            'Distance — ' + (language === 'ru' ? 'Ограничение дальности' : 'Range limit'),
          ],
        },
        {
          label: language === 'ru' ? 'Интерфейс' : 'Interface',
          icon: 'LayoutDashboard',
          items: [
            'CrossHair — ' + (language === 'ru' ? 'Прицел (3 типа)' : 'Crosshair (3 types)'),
            'Hud — ' + (language === 'ru' ? 'Полезная информация' : 'Useful overlay'),
            'ShowWaterMark — Watermark',
            language === 'ru' ? 'Полноэкранный режим | Все Windows' : 'Fullscreen | All Windows',
          ],
        },
      ],
    },
    {
      id: 'addonspoofer',
      title: t.products.addonSpoofer.title,
      subtitle: t.products.addonSpoofer.status,
      desc: t.products.addonSpoofer.desc,
      icon: 'Wrench',
      color: 'primary',
      groups: [
        {
          label: 'Addon',
          icon: 'ShieldOff',
          items: [language === 'ru' ? 'Антианомалии — убирает аномалии на локации' : 'Anti-anomaly — removes anomalies from location'],
        },
        {
          label: 'Spoofer',
          icon: 'Fingerprint',
          items: [language === 'ru' ? 'Спуф системы — изменение идентификаторов устройства' : 'System spoof — changes device identifiers'],
        },
        {
          label: language === 'ru' ? 'Условия' : 'Terms',
          icon: 'Info',
          items: [language === 'ru' ? 'Доступны при любой активной подписке' : 'Available with any active subscription'],
        },
      ],
    },
    {
      id: 'privatevision',
      title: t.products.privateVision.title,
      subtitle: t.products.privateVision.status,
      desc: t.products.privateVision.desc,
      icon: 'Crown',
      color: 'secondary',
      badge: 'PREMIUM',
      groups: [
        {
          label: language === 'ru' ? 'Включено' : 'Included',
          icon: 'PackagePlus',
          items: [t.products.privateVision.allFrom],
        },
        {
          label: language === 'ru' ? 'Эксклюзив' : 'Exclusive',
          icon: 'Sparkles',
          items: [
            'CheckArmor | CheckWeapons — ' + (language === 'ru' ? 'Броня и оружие' : 'Armor & weapons'),
            'BagsEsp | BagsDistance | BagsName — ' + (language === 'ru' ? 'Сумки после смерти' : 'Death bags'),
            'TainikEsp | TainikDistance | TainikName — ' + (language === 'ru' ? 'Все виды схронов' : 'All stash types'),
            'BarterEsp | BarterDistance | BarterName — ' + (language === 'ru' ? 'Бартер, минералы' : 'Barters, minerals'),
            'ArtefactEsp | ArtefactDistance | ArtefactName — ' + (language === 'ru' ? 'Артефакты' : 'Artifacts'),
            'MobEsp | MobDistance | MobName — ' + (language === 'ru' ? 'Все мутанты' : 'All mutants'),
            'MaxPnv — ' + (language === 'ru' ? 'ПНВ до максимума' : 'Max NVG level'),
            'AimBot — ' + (language === 'ru' ? 'Наводка с полной кастомизацией' : 'Aim with full customization'),
          ],
        },
      ],
    },
  ];

  const current = products.find(p => p.id === active)!;
  const isPremium = active === 'privatevision';

  return (
    <section id="products" className="py-12 sm:py-20 px-4 sm:px-6 bg-black/30 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold mb-3" style={{ background: 'linear-gradient(to right, #8B5CF6, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {t.products.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">{t.products.subtitle}</p>
        </div>

        {/* Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {products.map(p => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                active === p.id
                  ? p.color === 'secondary'
                    ? 'bg-gradient-to-r from-secondary to-pink-500 text-white border-transparent shadow-lg shadow-secondary/30'
                    : 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-lg shadow-primary/30'
                  : 'bg-card/40 border-primary/20 text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              <Icon name={p.icon} size={16} />
              {p.title}
              {p.badge && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${active === p.id ? 'bg-white/20' : 'bg-primary/20 text-primary'}`}>
                  {p.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={`rounded-2xl border p-5 sm:p-8 transition-all duration-300 ${isPremium ? 'border-secondary/40 bg-gradient-to-br from-card/80 to-secondary/10' : 'border-primary/20 bg-card/40'} backdrop-blur-sm`}>
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8 pb-6 border-b border-white/5">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${isPremium ? 'from-secondary/20' : 'from-primary/20'} to-transparent flex-shrink-0`}>
              <Icon name={current.icon} className={isPremium ? 'text-secondary' : 'text-primary'} size={36} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl sm:text-3xl font-bold">{current.title}</h3>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${isPremium ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
                  {current.subtitle}
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">{current.desc}</p>
            </div>
            <Button
              size="sm"
              className={`flex-shrink-0 ${isPremium ? 'bg-gradient-to-r from-secondary to-pink-500' : 'bg-gradient-to-r from-primary to-secondary'} border-0 hover:opacity-90`}
              onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
            >
              <Icon name="ShoppingCart" size={14} className="mr-1.5" />
              {language === 'ru' ? 'Купить' : 'Buy'}
            </Button>
          </div>

          {/* Feature groups */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {current.groups.map((group, gi) => (
              <div key={gi} className={`rounded-xl p-4 border ${isPremium ? 'bg-secondary/5 border-secondary/10' : 'bg-primary/5 border-primary/10'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${isPremium ? 'bg-secondary/20' : 'bg-primary/20'}`}>
                    <Icon name={group.icon} className={isPremium ? 'text-secondary' : 'text-primary'} size={14} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{group.label}</span>
                </div>
                <ul className="space-y-1.5">
                  {group.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                      <Icon name="ChevronRight" className={`flex-shrink-0 mt-0.5 ${isPremium ? 'text-secondary' : 'text-primary'}`} size={12} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
