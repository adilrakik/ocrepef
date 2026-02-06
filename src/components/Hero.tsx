/**
 * ===========================================
 * HERO SECTION - القسم الكبير اللول
 * ===========================================
 * 
 * هاد القسم كيبان فاللول ديال الصفحة
 * فيه:
 * - صورة الخلفية (heroImage)
 * - العنوان الكبير "ملك الكريب" 
 * - "depuis 2022"
 * - السهم اللي كينزل للمينو
 * 
 * باش تبدل:
 * - الصورة: بدل heroImage ف src/assets/
 * - العنوان: بدل "ملك الكريب" ف <h1>
 * - hover effect: بدل hover:scale-110
 * ===========================================
 */

import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-team.jpg';

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Section d'accueil"
    >
      {/* ===== BACKGROUND IMAGE - صورة الخلفية ===== */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Équipe O'Crepe"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay - باش النص يبان مزيان */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/20" />
      </div>

      {/* ===== CONTENT - المحتوى الرئيسي ===== */}
      <div className="relative z-10 text-center text-primary-foreground container-padding">
        {/* العنوان الكبير بالعربية - مع hover effect */}
        <h1
          className="font-arabic text-7xl md:text-9xl lg:text-[12rem] mb-6 opacity-0 animate-fade-in-up cursor-default transition-all duration-500 hover:scale-110 hover:tracking-wider"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          ملك الكريب
        </h1>
        
        {/* التاريخ */}
        <p
          className="font-serif text-lg md:text-xl tracking-ultra-wide uppercase opacity-0 animate-fade-in-up"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          depuis 2022
        </p>
      </div>

      {/* ===== SCROLL INDICATOR - السهم للنزول ===== */}
      <a
        href="#menu"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce-subtle"
        aria-label="Défiler vers le menu"
      >
        <ChevronDown className="w-8 h-8" strokeWidth={1} />
      </a>
    </section>
  );
};

export default Hero;
