import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Mic, Brain, TrendingUp } from "lucide-react";
import heroSpeaking from "@/assets/hero-speaking.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-surface">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(212,90%,55%,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
             
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Kuasai Seni
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Public Speaking</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Atasi kecemasan berbicara di depan umum dengan platform pelatihan virtual yang didukung AI. 
                Analisis suara real-time dan feedback personal untuk meningkatkan kepercayaan diri Anda.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Mulai Latihan Gratis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Lihat Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Pengguna Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Tingkat Kepuasan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Assistant</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroSpeaking} 
                alt="Professional speaking training" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card rounded-lg p-4 shadow-medium border border-border animate-pulse-glow">
              <div className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Live Analysis</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card rounded-lg p-4 shadow-medium border border-border animate-pulse-glow">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Progress +85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;