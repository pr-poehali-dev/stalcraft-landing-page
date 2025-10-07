import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Custom404 = () => {
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

    const particleCount = 15;
    const particleInterval = 1000;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 6 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 8 + 20}s`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      
      document.getElementById('particles-container-404')?.appendChild(particle);
      
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
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black flex items-center justify-center px-4 relative overflow-hidden">
      <div id="particles-container-404" className="fixed inset-0 pointer-events-none overflow-hidden z-0"></div>
      
      <div className="absolute inset-0 grid grid-cols-3 gap-8 p-8 opacity-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 to-transparent"></div>
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-secondary/10 to-transparent"></div>
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 to-transparent"></div>
      </div>
      
      <div className="text-center relative z-10 max-w-3xl mx-auto animate-fade-in">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl glow-pulse"></div>
          <Icon name="AlertTriangle" className="text-primary mx-auto mb-8 relative" size={80} />
        </div>

        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-black mb-6 relative" style={{background: 'linear-gradient(to right, #8B5CF6, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            404
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow mx-auto max-w-md mb-8"></div>
        </div>
        
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
          <div className="relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-neon">Страница не найдена</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-4 leading-relaxed">
              Похоже, эта страница ушла в <span className="text-primary font-semibold">Зону</span> и не вернулась...
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/80">
              Аномальная активность обнаружена. Возвращайтесь в безопасную зону.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-10 py-6 rounded-lg font-semibold border-0 group"
            onClick={() => window.location.href = '/'}
          >
            <Icon name="Home" className="mr-2 group-hover:scale-110 transition-transform" size={22} />
            Вернуться в безопасную зону
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/20 hover:bg-primary/10 text-lg px-10 py-6 rounded-lg group"
            onClick={() => window.open('https://t.me/KamiPanelbot', '_blank')}
          >
            <Icon name="MessageCircle" className="mr-2 group-hover:scale-110 transition-transform" size={22} />
            Связаться с командой
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <a 
            href="/"
            className="border border-primary/20 bg-card/20 backdrop-blur-sm p-4 rounded-xl hover:border-primary/40 transition-all group"
          >
            <Icon name="Home" className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" size={32} />
            <p className="text-sm font-semibold">Главная</p>
          </a>
          <a 
            href="/#products"
            className="border border-primary/20 bg-card/20 backdrop-blur-sm p-4 rounded-xl hover:border-primary/40 transition-all group"
          >
            <Icon name="Package" className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" size={32} />
            <p className="text-sm font-semibold">Продукты</p>
          </a>
          <a 
            href="/#contact"
            className="border border-primary/20 bg-card/20 backdrop-blur-sm p-4 rounded-xl hover:border-primary/40 transition-all group"
          >
            <Icon name="MessageCircle" className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" size={32} />
            <p className="text-sm font-semibold">Контакты</p>
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Icon name="Shield" className="text-primary" size={16} />
          <span>ExoVision Security Protocol: <span className="text-primary">Active</span></span>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
