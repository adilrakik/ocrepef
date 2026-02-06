/**
 * ===========================================
 * MENU SECTION - قسم الميني
 * ===========================================
 * 
 * هاد القسم كيعرض صورة الميني كاملة
 * 
 * باش تبدل الصورة:
 * - بدل الصورة ف src/assets/menu-full.jpg
 * - أو بدل import وpath
 * 
 * باش تزيد حاجة فوق أو تحت الصورة:
 * - زيدها داخل <div className="container-padding...">
 * ===========================================
 */

import menuImage from '@/assets/menu-full.jpg';

const MenuSection = () => {
  return (
    <section
      id="menu"
      className="section-padding bg-secondary"
      aria-labelledby="menu-title"
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* ===== SECTION HEADER - العنوان ===== */}
        <div className="text-center mb-12 md:mb-16">
          {/* العنوان الصغير */}
          <p className="text-sm tracking-ultra-wide uppercase text-muted-foreground mb-4">
            La Carte Exclusive
          </p>
          {/* العنوان الكبير */}
          <h2
            id="menu-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl"
          >
            Notre Menu
          </h2>
        </div>

        {/* ===== MENU IMAGE - صورة الميني ===== */}
        <div className="w-full">
          <img
            src={menuImage}
            alt="Menu complet O'Crepe - Crêpes sucrées, salées, gaufres et cups"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
