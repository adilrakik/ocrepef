/**
 * ===========================================
 * STORY SECTION - قسم "Notre Histoire"
 * ===========================================
 * 
 * هاد القسم فيه الفيديو ديال القصة ديال O'Crepe
 * 
 * الفيديو كيخدم AUTOMATIQUEMENT ملي توصل لهاد القسم
 * وكيوقف ملي تخرج منو
 * 
 * باش تبدل الفيديو:
 * - بدل الفيديو ف src/assets/story-video.mp4
 * 
 * باش تزيد text أو شي حاجة:
 * - زيدها داخل <div className="container-padding...">
 * ===========================================
 */

import { useEffect, useRef } from 'react';
import storyVideo from '@/assets/story-video.mp4';

const StorySection = () => {
  // Reference للفيديو باش نتحكمو فيه
  const videoRef = useRef<HTMLVideoElement>(null);
  // Reference للsection باش نعرفو واش بانت
  const sectionRef = useRef<HTMLElement>(null);

  /**
   * ===== AUTOPLAY EFFECT =====
   * كنخدمو الفيديو ملي المستخدم كيوصل لهاد القسم
   * وكنوقفوه ملي كيخرج
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            // القسم بان = خدم الفيديو
            videoRef.current.play();
          } else {
            // القسم خرج = وقف الفيديو
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.3 } // 30% ديال القسم خاصها تبان
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="histoire"
      className="section-padding bg-background"
      aria-labelledby="histoire-title"
    >
      <div className="container-padding max-w-6xl mx-auto">
        {/* ===== SECTION HEADER - العنوان ===== */}
        <div className="text-center mb-12">
          {/* العنوان الصغير */}
          <p className="text-sm tracking-ultra-wide uppercase text-muted-foreground mb-4">
            Notre Histoire
          </p>
          {/* العنوان الكبير */}
          <h2
            id="histoire-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl"
          >
            L'Héritage
          </h2>
        </div>

        {/* ===== VIDEO - الفيديو ===== 
            controls = كيبانو les boutons (play, pause, volume)
            muted = بلا صوت ف البداية
            loop = كيتعاود ملي كيسالي
            playsInline = كيخدم ف التليفون بلا fullscreen
        */}
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg shadow-2xl"
          src={storyVideo}
          controls
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default StorySection;
