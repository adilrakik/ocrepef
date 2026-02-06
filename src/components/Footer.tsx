/**
 * ===========================================
 * FOOTER - أسفل الصفحة
 * ===========================================
 * 
 * هاد القسم فيه:
 * - Logo و "ملك الكريب"
 * - Contact (تليفون، عنوان، أوقات العمل)
 * - Social media links
 * - Copyright
 * 
 * باش تبدل المعلومات:
 * - Contact: بدل النص مباشرة تحت
 * - Social: بدل socialLinks array
 * ===========================================
 */

/**
 * ===== SOCIAL LINKS - روابط Social Media =====
 * زيد هنا أي رابط جديد بغيتي
 */
const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/youssefocrepe/' },
  { name: 'Facebook', href: 'https://web.facebook.com/people/Youssef-ocr%C3%AApe/100079004726449/?locale=fr_FR' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@youssefocrepe' },
];

const Footer = () => {
  // السنة الحالية للcopyright
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="section-padding bg-foreground text-primary-foreground"
      role="contentinfo"
      aria-label="Pied de page"
    >
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* ===== BRAND - Logo والاسم ===== */}
          <div>
            <h3 className="font-serif text-2xl tracking-ultra-wide mb-4">O'CREPE</h3>
            <p className="font-arabic text-xl text-primary-foreground/60">ملك الكريب</p>
          </div>

          {/* ===== CONTACT - معلومات الاتصال ===== */}
          <div className="space-y-4">
            <h4 className="text-sm tracking-ultra-wide uppercase text-primary-foreground/60 mb-6">
              Contact
            </h4>
            {/* رقم التليفون - بدلو هنا */}
            <p className="text-primary-foreground/80">+212 7 76 70 28 65</p>
            {/* العنوان - بدلو هنا */}
            <p className="text-primary-foreground/80">
              Settat, Maroc
            </p>
            {/* أوقات العمل - بدلو هنا */}
            <p className="text-primary-foreground/60 text-sm mt-4">
              Ouvert tous les jours<br />
              18h00 — 23h00
            </p>
          </div>

          {/* ===== SOCIAL - روابط Social Media ===== */}
          <div>
            <h4 className="text-sm tracking-ultra-wide uppercase text-primary-foreground/60 mb-6">
              Suivez-nous
            </h4>
            <ul className="space-y-3" role="list">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors nav-link"
                    aria-label={`Visitez notre page ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== COPYRIGHT ===== */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/40 text-center">
            © {currentYear} O'Crepe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
