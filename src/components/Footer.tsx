import { Mic2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Mic2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SpeakAI</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Platform AI terdepan untuk mengatasi public speaking anxiety dan meningkatkan kemampuan berbicara di depan umum.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Fitur</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Analisis Suara Real-time</a></li>
              <li><a href="#" className="hover:text-background transition-colors">AI Feedback</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Virtual Training</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Progress Tracking</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Perusahaan</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Tim</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontak</h3>
            <div className="space-y-3 text-background/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@speakai.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>&copy; 2024 SpeakAI. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;