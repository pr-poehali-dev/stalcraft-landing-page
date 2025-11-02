import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 relative overflow-hidden min-h-[95vh] flex items-center">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div 
        className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-0 animate-fade-in transition-transform duration-200" 
        style={{
          animationDelay: '0.3s', 
          animationFillMode: 'forwards',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transform hover:scale-105 transition-all duration-500">
          <img 
            src="https://cdn.poehali.dev/files/34bd024b-1cca-4af2-a8b2-0d72594000ee.png" 
            alt="Stalcraft" 
            loading="lazy"
            className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-secondary/40 shadow-2xl shadow-secondary/20 hover:shadow-secondary/40 transform hover:scale-105 transition-all duration-500">
          <img 
            src="https://cdn.poehali.dev/files/3ed60931-0f20-49e0-a482-c892f552e81d.png" 
            alt="Stalcraft"
            loading="lazy" 
            className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transform hover:scale-105 transition-all duration-500">
          <img 
            src="https://cdn.poehali.dev/files/76dd263a-a1d7-451f-8f85-9e4a2d61260a.png" 
            alt="Stalcraft"
            loading="lazy" 
            className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-10 opacity-0 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
          <div className="relative inline-block">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 blur-[100px] animate-pulse-glow"></div>
            <div className="absolute -inset-4">
              <div className="w-full h-full bg-gradient-to-r from-primary via-secondary to-primary opacity-20 blur-2xl animate-spin-slow"></div>
            </div>
            
            <h1 className="relative text-5xl sm:text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.9]">
              <span className="block bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent animate-gradient drop-shadow-2xl" style={{backgroundSize: '200% auto'}}>
                STALCRAFT
              </span>
              <span className="block bg-gradient-to-r from-secondary via-white to-secondary bg-clip-text text-transparent animate-gradient drop-shadow-2xl" style={{backgroundSize: '200% auto', animationDelay: '0.5s'}}>
                CHEAT
              </span>
            </h1>
            
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="h-1 w-16 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-pulse" 
                  style={{animationDelay: `${i * 0.2}s`}}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-5 mb-12 mt-16 opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
            <p className="relative text-xl sm:text-3xl md:text-4xl font-bold text-white px-6 py-2">
              {t.hero.subtitle1}
            </p>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-foreground/80 px-4 font-medium">
            {t.hero.subtitle2}
          </p>
        </div>
        
        <div className="flex gap-5 justify-center flex-wrap px-4 opacity-0 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary text-base sm:text-xl px-10 sm:px-14 py-7 sm:py-8 rounded-2xl font-bold border-2 border-primary/50 shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_rgba(139,92,246,0.8)] transition-all duration-500 hover:scale-110 hover:border-white/50"
            style={{backgroundSize: '200% auto'}}
            onClick={(e) => scrollToSection(e, '#about')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <Icon name="Info" className="mr-2 relative z-10" size={22} />
            <span className="relative z-10">{t.hero.aboutBtn}</span>
          </Button>
          
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-secondary via-primary to-secondary text-base sm:text-xl px-10 sm:px-14 py-7 sm:py-8 rounded-2xl font-bold border-2 border-secondary/50 shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] transition-all duration-500 hover:scale-110 hover:border-white/50"
            style={{backgroundSize: '200% auto'}}
            onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <Icon name="Rocket" className="mr-2 relative z-10" size={22} />
            <span className="relative z-10">{t.hero.buyBtn}</span>
          </Button>
        </div>

        <div className="mt-16 opacity-0 animate-fade-in flex justify-center gap-8 sm:gap-12" style={{animationDelay: '1.1s', animationFillMode: 'forwards'}}>
          <div className="text-center group cursor-default">
            <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">5000+</div>
            <div className="text-xs sm:text-sm text-foreground/60 uppercase tracking-wider">Пользователей</div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-xs sm:text-sm text-foreground/60 uppercase tracking-wider">Поддержка</div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-xs sm:text-sm text-foreground/60 uppercase tracking-wider">Безопасность</div>
          </div>
        </div>
      </div>
    </section>
  );
}
