import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { translations } from "@/lib/translations";

const Payment = () => {
  const [language] = useState<'ru' | 'en'>(() => {
    return (localStorage.getItem('language') as 'ru' | 'en') || 'ru';
  });
  const t = translations[language].payment;

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
              {t.backBtn}
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{background: 'linear-gradient(to right, #8B5CF6, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              {t.title}
            </h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="space-y-8">
            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 sm:p-10 rounded-2xl text-center">
              <Icon name="Bot" className="text-primary mx-auto mb-6" size={64} />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t.botSection.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                {t.botSection.desc}
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-sm sm:text-lg px-6 sm:px-12 py-5 sm:py-6 border-0 w-full sm:w-auto"
                onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
              >
                <Icon name="ExternalLink" className="mr-2" size={20} />
                <span className="truncate">{t.botSection.btnText}</span>
              </Button>
            </Card>

            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 sm:p-10 rounded-2xl space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="Tag" className="text-primary" size={28} />
                  {t.pricing.title}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-purple-500/30 rounded-xl p-5 bg-gradient-to-br from-purple-950/40 to-card/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Eye" className="text-purple-400" size={24} />
                      <h3 className="font-bold text-lg">{t.pricing.espvision.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{t.pricing.espvision.desc}</p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <Icon name="Clock" className="text-purple-400" size={16} />
                        <span>{t.pricing.espvision.week}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Calendar" className="text-purple-400" size={16} />
                        <span className="font-semibold">{t.pricing.espvision.month}</span>
                      </p>
                    </div>
                  </div>

                  <div className="border border-blue-500/30 rounded-xl p-5 bg-gradient-to-br from-blue-950/40 to-card/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Sparkles" className="text-blue-400" size={24} />
                      <h3 className="font-bold text-lg">{t.pricing.artvision.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{t.pricing.artvision.desc}</p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <Icon name="Clock" className="text-blue-400" size={16} />
                        <span>{t.pricing.artvision.week}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Calendar" className="text-blue-400" size={16} />
                        <span className="font-semibold">{t.pricing.artvision.month}</span>
                      </p>
                    </div>
                  </div>

                  <div className="border border-pink-500/30 rounded-xl p-5 bg-gradient-to-br from-pink-950/40 to-card/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Crown" className="text-pink-400" size={24} />
                      <h3 className="font-bold text-lg">{t.pricing.private.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{t.pricing.private.desc}</p>
                    <p className="text-sm flex items-center gap-2">
                      <Icon name="MessageCircle" className="text-pink-400" size={16} />
                      <span className="font-semibold">{t.pricing.private.price}</span>
                    </p>
                  </div>

                  <div className="border border-amber-500/30 rounded-xl p-5 bg-gradient-to-br from-amber-950/40 to-card/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Star" className="text-amber-400" size={24} />
                      <h3 className="font-bold text-lg">{t.pricing.custom.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{t.pricing.custom.desc}</p>
                    <p className="text-sm flex items-center gap-2">
                      <Icon name="Wallet" className="text-amber-400" size={16} />
                      <span className="font-semibold">{t.pricing.custom.price}</span>
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="HelpCircle" className="text-primary" size={28} />
                  {t.howToBuy.title}
                </h2>
                <div className="space-y-4">
                  {t.howToBuy.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm sm:text-base break-words">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="CreditCard" className="text-primary" size={28} />
                  {t.paymentMethods.title}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-primary/20 rounded-xl p-4 bg-card/20">
                    <Icon name="CreditCard" className="text-primary mb-3" size={32} />
                    <h3 className="font-semibold mb-2">{t.paymentMethods.cards.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.paymentMethods.cards.desc}</p>
                  </div>

                  <div className="border border-primary/20 rounded-xl p-4 bg-card/20">
                    <Icon name="Wallet" className="text-primary mb-3" size={32} />
                    <h3 className="font-semibold mb-2">{t.paymentMethods.wallets.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.paymentMethods.wallets.desc}</p>
                  </div>

                  <div className="border border-primary/20 rounded-xl p-4 bg-card/20">
                    <Icon name="Bitcoin" className="text-primary mb-3" size={32} />
                    <h3 className="font-semibold mb-2">{t.paymentMethods.crypto.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.paymentMethods.crypto.desc}</p>
                  </div>

                  <div className="border border-primary/20 rounded-xl p-4 bg-card/20">
                    <Icon name="Smartphone" className="text-primary mb-3" size={32} />
                    <h3 className="font-semibold mb-2">{t.paymentMethods.mobile.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.paymentMethods.mobile.desc}</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="ShieldCheck" className="text-primary" size={28} />
                  {t.security.title}
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  {t.security.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="Headphones" className="text-primary" size={28} />
                  {t.support.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t.support.desc}
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <Icon name="MessageCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>{t.support.telegram}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Icon name="Gamepad2" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>{t.support.discord}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Icon name="Clock" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>{t.support.response}</span>
                  </p>
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