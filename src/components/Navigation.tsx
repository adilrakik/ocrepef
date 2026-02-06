/**
 * ===========================================
 * NAVIGATION - القائمة ديال التنقل
 * ===========================================
 * 
 * هاد ال component هو القائمة اللي فوق الصفحة
 * فيه:
 * - Logo "O'CREPE"
 * - الروابط (Accueil, Menu, Notre Histoire)
 * - Mobile menu للتليفون
 * 
 * باش تزيد رابط جديد:
 * - زيدو ف navLinks array تحت
 * 
 * باش تبدل اللون:
 * - بدل text-primary-foreground
 * ===========================================
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * ===== NAV LINKS - الروابط ديال القائمة =====
 * زيد هنا أي رابط جديد بغيتي
 */
const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Menu', href: '#menu' },
  { label: 'Notre Histoire', href: '#histoire' },
];

const Navigation = () => {
  // State: واش المستخدم نزل ف الصفحة؟
  const [isScrolled, setIsScrolled] = useState(false);
  // State: واش القائمة ديال الموبايل مفتوحة؟
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect: كنتبعو الscroll باش نبدلو شكل القائمة
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect: كنمنعو الscroll ملي القائمة مفتوحة
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Function: كنسدو القائمة ملي المستخدم كيضغط على رابط
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ===== DESKTOP NAVIGATION - القائمة للكمبيوتر ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="container-padding">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* ===== LOGO ===== */}
            <a
              href="#accueil"
              className="font-serif text-xl md:text-2xl tracking-ultra-wide font-medium text-primary-foreground"
              aria-label="O'Crepe - Retour à l'accueil"
            >
              O'CREPE
            </a>

            {/* ===== DESKTOP LINKS - الروابط للكمبيوتر ===== */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-primary-foreground/90 hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* ===== MOBILE MENU BUTTON - زر القائمة للموبايل ===== */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU OVERLAY - الخلفية السوداء ===== */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ===== MOBILE MENU PANEL - القائمة اللي كتخرج من اليمين ===== */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-background z-50 md:hidden transform transition-transform duration-400 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        <div className="flex flex-col h-full p-8">
          {/* زر الإغلاق */}
          <div className="flex justify-end mb-16">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fermer le menu"
              className="p-2 -mr-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* الروابط */}
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="font-serif text-3xl tracking-wide opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Logo بالعربية ف الأسفل */}
          <div className="mt-auto">
            <p className="font-arabic text-2xl text-muted-foreground">ملك الكريب</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
