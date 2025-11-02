import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  t: {
    hero: {
      subtitle1: string;
      subtitle2: string;
      aboutBtn: string;
      buyBtn: string;
    };
  };
  scrollToSection: (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => void;
}

export default function HeroSection({ t, scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-8">
        <div className="relative overflow-hidden rounded-xl sm:rounded-3xl border border-primary/30 hover:border-primary/50 transition-all duration-500 animate-[fadeInUp_1s_ease-out]">
          <img 
            src="https://cdn.poehali.dev/files/34bd024b-1cca-4af2-a8b2-0d72594000ee.png" 
            alt="Stalcraft" 
            loading="lazy"
            className="w-full h-full object-cover opacity-0 sm:opacity-60 animate-[scaleIn_1.2s_ease-out_0.2s_forwards]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 sm:from-primary/30 to-transparent"></div>
        </div>
        <div className="relative overflow-hidden rounded-xl sm:rounded-3xl border border-secondary/30 hover:border-secondary/50 transition-all duration-500 animate-[fadeInUp_1s_ease-out_0.2s]">
          <img 
            src="https://cdn.poehali.dev/files/3ed60931-0f20-49e0-a482-c892f552e81d.png" 
            alt="Stalcraft"
            loading="lazy" 
            className="w-full h-full object-cover opacity-0 sm:opacity-60 animate-[scaleIn_1.2s_ease-out_0.4s_forwards]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 sm:from-secondary/30 to-transparent"></div>
        </div>
        <div className="relative overflow-hidden rounded-xl sm:rounded-3xl border border-primary/30 hover:border-primary/50 transition-all duration-500 animate-[fadeInUp_1s_ease-out_0.4s]">
          <img 
            src="https://cdn.poehali.dev/files/76dd263a-a1d7-451f-8f85-9e4a2d61260a.png" 
            alt="Stalcraft"
            loading="lazy" 
            className="w-full h-full object-cover opacity-0 sm:opacity-60 animate-[scaleIn_1.2s_ease-out_0.6s_forwards]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 sm:from-primary/30 to-transparent"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90 sm:from-black/70 sm:via-black/60 sm:to-black/85"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl"></div>
            <h1 className="relative text-4xl sm:text-7xl md:text-9xl font-black tracking-tight leading-[0.9]">
              <span className="block bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
                STALCRAFT
              </span>
              <span className="block bg-gradient-to-r from-secondary via-purple-400 to-primary bg-clip-text text-transparent">
                CHEAT
              </span>
            </h1>
          </div>
        </div>
        
        <div className="space-y-3 mb-10">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {t.hero.subtitle1}
          </p>
          <p className="text-base sm:text-xl md:text-2xl text-foreground/70">
            {t.hero.subtitle2}
          </p>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap px-4 mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base sm:text-xl px-10 sm:px-12 py-6 sm:py-7 rounded-xl font-bold border-0 transition-all duration-300 hover:scale-105"
            onClick={(e) => scrollToSection(e, '#about')}
          >
            <Icon name="Info" className="mr-2" size={20} />
            {t.hero.aboutBtn}
          </Button>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-base sm:text-xl px-10 sm:px-12 py-6 sm:py-7 rounded-xl font-bold border-0 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
          >
            <Icon name="ShoppingCart" className="mr-2" size={20} />
            {t.hero.buyBtn}
          </Button>
        </div>

        <div className="flex justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">5000+</div>
            <div className="text-xs sm:text-sm text-foreground/60 uppercase">Пользователей</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-1">24/7</div>
            <div className="text-xs sm:text-sm text-foreground/60 uppercase">Поддержка</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">100%</div>
            <div className="text-xs sm:text-sm text-foreground/60 uppercase">Безопасность</div>
          </div>
        </div>
      </div>
    </section>
  );
}