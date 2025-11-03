import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { translations } from "@/lib/translations";

const Terms = () => {
  const [language] = useState<'ru' | 'en'>(() => {
    return (localStorage.getItem('language') as 'ru' | 'en') || 'ru';
  });
  const t = translations[language].terms;

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
            <p className="text-muted-foreground">{t.updated}</p>
          </div>

          <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm p-6 sm:p-10 rounded-2xl space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 sm:gap-3 break-words">
                <Icon name="FileText" className="text-primary flex-shrink-0" size={24} />
                <span>{t.section1.title}</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 break-words">
                {t.section1.text1}
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed break-words">
                {t.section1.text2}
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 sm:gap-3 break-words">
                <Icon name="AlertTriangle" className="text-primary flex-shrink-0" size={24} />
                <span>{t.section2.title}</span>
              </h2>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                {t.section2.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="break-words">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 sm:gap-3 break-words">
                <Icon name="ShieldCheck" className="text-primary flex-shrink-0" size={24} />
                <span>{t.section3.title}</span>
              </h2>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                {t.section3.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="break-words">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 sm:gap-3 break-words">
                <Icon name="CreditCard" className="text-primary flex-shrink-0" size={24} />
                <span>{t.section4.title}</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 break-words">
                {t.section4.text}
              </p>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                {t.section4.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="break-words">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 sm:gap-3 break-words">
                <Icon name="RefreshCw" className="text-primary flex-shrink-0" size={24} />
                <span>{t.section5.title}</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 break-words">
                {t.section5.text}
              </p>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                {t.section5.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="break-words">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 sm:gap-3 break-words">
                <Icon name="Lock" className="text-primary flex-shrink-0" size={24} />
                <span>{t.section6.title}</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed break-words">
                {t.section6.text}
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 sm:gap-3 break-words">
                <Icon name="FileEdit" className="text-primary flex-shrink-0" size={24} />
                <span>{t.section7.title}</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed break-words">
                {t.section7.text}
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 sm:gap-3 break-words">
                <Icon name="MessageSquare" className="text-primary flex-shrink-0" size={24} />
                <span>{t.section8.title}</span>
              </h2>
              <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-2">
                <p className="break-words">{t.section8.text1}</p>
                <p className="break-words">{t.section8.text2}</p>
                <p className="break-words">{t.section8.text3}</p>
                <p className="break-words">{t.section8.text4}</p>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
