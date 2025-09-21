import { useState, useRef } from "react";
import { Card } from "@/components/ui/enhanced-card";
import { Button } from "@/components/ui/enhanced-button";
import { Mic, MicOff, Play, Square, BarChart3, Brain } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const VirtualTraining = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStartRecording = () => {
    setIsRecording(true);
    setHasRecorded(false);
    setAnalysisComplete(false);
    
    // Simulate recording for demo
    setTimeout(() => {
      setIsRecording(false);
      setHasRecorded(true);
      
      // Simulate analysis
      setTimeout(() => {
        setAnalysisComplete(true);
      }, 2000);
    }, 3000);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setHasRecorded(true);
    
    // Simulate analysis
    setTimeout(() => {
      setAnalysisComplete(true);
    }, 2000);
  };

  const voiceMetrics = [
    { label: "Kecepatan Bicara", value: 85, color: "bg-primary", description: "Optimal" },
    { label: "Kejelasan Suara", value: 92, color: "bg-accent", description: "Sangat Baik" },
    { label: "Intonasi", value: 78, color: "bg-warning", description: "Perlu Perbaikan" },
    { label: "Kepercayaan Diri", value: 88, color: "bg-primary", description: "Baik" },
  ];

  const aiFeedback = [
    "Tingkatkan variasi intonasi untuk membuat presentasi lebih menarik",
    "Kecepatan bicara Anda sudah optimal, pertahankan konsistensi",
    "Gunakan jeda yang lebih strategis untuk penekanan poin penting",
    "Artikulasi kata sudah sangat baik, lanjutkan praktek yang sama"
  ];

  return (
    <section id="training" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Virtual Training
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Studio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Praktik berbicara di depan umum dengan analisis AI real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Recording Interface */}
          <Card variant="gradient" className="p-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Session Latihan</h3>
              
              {/* Microphone Visualization */}
              <div className="relative">
                <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                  isRecording 
                    ? "bg-primary animate-pulse-glow shadow-glow" 
                    : "bg-primary/10 hover:bg-primary/20"
                }`}>
                  {isRecording ? (
                    <MicOff className="w-16 h-16 text-primary-foreground" />
                  ) : (
                    <Mic className="w-16 h-16 text-primary" />
                  )}
                </div>
                
                {isRecording && (
                  <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping" />
                )}
              </div>

              {/* Recording Controls */}
              <div className="space-y-4">
                {!isRecording && !hasRecorded ? (
                  <Button 
                    variant="hero" 
                    size="xl" 
                    onClick={handleStartRecording}
                    className="w-full"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Mulai Latihan
                  </Button>
                ) : isRecording ? (
                  <Button 
                    variant="destructive" 
                    size="xl" 
                    onClick={handleStopRecording}
                    className="w-full"
                  >
                    <Square className="w-5 h-5 mr-2" />
                    Berhenti Merekam
                  </Button>
                ) : (
                  <Button 
                    variant="success" 
                    size="xl" 
                    onClick={handleStartRecording}
                    className="w-full"
                  >
                    <Mic className="w-5 h-5 mr-2" />
                    Latihan Lagi
                  </Button>
                )}

                {isRecording && (
                  <div className="text-primary font-medium animate-pulse">
                    Sedang merekam... Berbicara dengan topik yang telah dipilih
                  </div>
                )}
              </div>

              {/* Sample Topics */}
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Topik Latihan Hari Ini:</h4>
                <div className="text-muted-foreground text-sm">
                  "Presentasi tentang teknologi AI dalam pendidikan"
                </div>
              </div>
            </div>
          </Card>

          {/* Analysis Results */}
          <Card variant="elevated" className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Analisis Suara</h3>
              </div>

              {!hasRecorded ? (
                <div className="text-center py-12 text-muted-foreground">
                  Mulai sesi latihan untuk melihat analisis real-time
                </div>
              ) : !analysisComplete ? (
                <div className="space-y-4">
                  <div className="text-center text-muted-foreground">Menganalisis rekaman...</div>
                  <Progress value={60} className="animate-pulse" />
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Voice Metrics */}
                  <div className="space-y-4">
                    {voiceMetrics.map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{metric.label}</span>
                          <span className="text-muted-foreground">{metric.description}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress 
                            value={metric.value} 
                            className="flex-1"
                          />
                          <span className="font-bold text-primary">{metric.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* AI Feedback */}
                  <Card variant="glass" className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-accent" />
                        <h4 className="font-semibold text-foreground">AI Feedback</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {aiFeedback.map((feedback, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            {feedback}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VirtualTraining;