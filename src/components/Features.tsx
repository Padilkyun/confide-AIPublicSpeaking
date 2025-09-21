import { Card } from "@/components/ui/enhanced-card";
import { Mic, Brain, BarChart3, Target, Users, Sparkles } from "lucide-react";
import voiceWaves from "@/assets/voice-waves.jpg";
import aiBrain from "@/assets/ai-brain.jpg";

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Analisis Suara Real-time",
      description: "Pemantauan parameter suara seperti kecepatan, intonasi, dan kejelasan berbicara secara langsung.",
      image: voiceWaves,
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "AI Feedback Cerdas",
      description: "Feedback berbasis model AI yang memberikan saran praktis dan personal untuk meningkatkan kemampuan berbicara.",
      image: aiBrain,
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Tracking Progress",
      description: "Lacak perkembangan kemampuan berbicara Anda dengan metrik yang komprehensif dan mudah dipahami.",
      color: "text-warning"
    },
    {
      icon: Target,
      title: "Latihan Terfokus",
      description: "Skenario latihan yang disesuaikan dengan kebutuhan spesifik untuk mengatasi public speaking anxiety.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Virtual Audience",
      description: "Simulasi audience virtual untuk memberikan pengalaman berbicara yang realistis tanpa tekanan.",
      color: "text-accent"
    },
    {
      icon: Sparkles,
      title: "Personalisasi",
      description: "Platform yang beradaptasi dengan gaya belajar dan kebutuhan individual setiap pengguna.",
      color: "text-warning"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Fitur-fitur
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Unggulan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Platform kami menyediakan teknologi AI terdepan untuk membantu Anda menguasai seni public speaking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              variant="elevated"
              className="group hover:border-primary/20 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 space-y-4">
                {feature.image && (
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                  </div>
                )}
                
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;