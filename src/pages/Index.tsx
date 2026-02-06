/**
 * ===========================================
 * INDEX PAGE - الصفحة الرئيسية
 * ===========================================
 * 
 * هاد الصفحة هي الصفحة الرئيسية ديال الموقع
 * كتجمع كاع les sections:
 * 
 * 1. Navigation - القائمة ديال التنقل (اللي فوق)
 * 2. Hero       - القسم الكبير اللول (ملك الكريب)
 * 3. MenuSection - صورة الميني
 * 4. StorySection - الفيديو ديال "Notre Histoire"
 * 5. Footer     - أسفل الصفحة (Contact, Social)
 * 
 * باش تزيد section جديدة:
 * - Import it here
 * - Add it in the return() where you want it
 * ===========================================
 */

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import StorySection from '@/components/StorySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* ===== NAVIGATION - القائمة ديال التنقل ===== */}
      <Navigation />
      
      {/* ===== HERO - القسم الكبير "ملك الكريب" ===== */}
      <Hero />
      
      {/* ===== MENU - صورة الميني ===== */}
      <MenuSection />
      
      {/* ===== NOTRE HISTOIRE - الفيديو ===== */}
      <StorySection />
      
      {/* ===== FOOTER - أسفل الصفحة ===== */}
      <Footer />
    </main>
  );
};

export default Index;
