import React, { useState, useEffect, useCallback } from 'react';
import { 
  CheckCircle, 
  Download, 
  FileText, 
  BookOpen, 
  Users, 
  Star, 
  ShieldCheck, 
  Printer, 
  Zap, 
  AlertCircle,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Gift
} from 'lucide-react';

// --- Helper Components ---

const Button: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = "", onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full md:w-auto px-10 py-5 bg-[#2ecc71] hover:bg-[#27ae60] text-white font-extrabold text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl tracking-wider ${className}`}
  >
    {children}
  </button>
);

const SectionTitle: React.FC<{ children: React.ReactNode; dark?: boolean; center?: boolean }> = ({ children, dark = false, center = true }) => (
  <h2 className={`text-3xl md:text-4xl font-extrabold mb-8 ${dark ? 'text-white' : 'text-gray-800'} ${center ? 'text-center' : ''}`}>
    {children}
  </h2>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl p-6 shadow-md border border-gray-100 ${className}`}>
    {children}
  </div>
);

// --- Sections ---

const Hero = () => {
  const images = [
    "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-16-de-jan.-de-2026-12_09_28.png",
    "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-17-de-jan.-de-2026-10_24_39.png",
    "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-17-de-jan.-de-2026-10_24_55.png",
    "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-17-de-jan.-de-2026-10_24_46.png",
    "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_03_53.png",
    "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_03_09-1.png",
    "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_02_21.png",
    "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-22_03_39.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative bg-[#1e3a8a] text-white pt-16 pb-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-10 w-80 h-80 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-block bg-white text-[#1e3a8a] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          lançamento
        </div>

        <p className="text-lg md:text-2xl text-blue-100 mb-2 lowercase tracking-tight">
          <span className="font-bold mr-1">professora,</span> 
          <span className="font-medium">receba seus aluninhos este ano com o</span>
        </p>
        
        <h1 className="text-4xl md:text-7xl leading-[1.1] mb-6 tracking-tighter">
          <span className="font-black lowercase">kit sala de aula</span>
          <br />
          <span className="text-[#e67e22] flex flex-wrap items-baseline justify-center gap-x-2 md:gap-x-4">
            <span className="font-medium text-2xl md:text-4xl lowercase text-white">do</span> 
            <span className="font-black flex gap-x-2">
              <span className="lowercase">coelhinho</span>
              <span className="uppercase text-yellow-300">BENTO</span>
            </span>
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl font-medium text-blue-100 max-w-3xl mb-10 leading-relaxed lowercase">
          materiais pedagógicos prontos, lúdicos e organizados para facilitar a rotina do professor em sala na educação infantil.
        </p>

        <div className="relative w-full max-w-4xl aspect-[16/9] mb-12 overflow-hidden group">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div 
              className="flex w-full h-full transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-contain flex-shrink-0 pointer-events-none"
                  onContextMenu={(e) => e.preventDefault()}
                />
              ))}
            </div>

            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-6' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>

        <Button onClick={() => window.scrollTo({ top: document.getElementById('oferta')?.offsetTop || 0, behavior: 'smooth' })}>
          comprar agora
        </Button>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full text-blue-100 font-semibold text-sm lowercase">
          <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-[#2ecc71]" /> pdf de alta qualidade</div>
          <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-[#2ecc71]" /> envio imediato</div>
          <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-[#2ecc71]" /> 12 arquivos prontos</div>
          <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-[#2ecc71]" /> compra segura</div>
        </div>
      </div>
    </section>
  );
};

const Description = () => (
  <section className="bg-white py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <SectionTitle center={false}>
            <span className="text-[#2ecc71]">📘</span> <span className="lowercase">descrição do projeto</span>
          </SectionTitle>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-normal lowercase">
            <p>
              o <strong>kit sala de aula do coelhinho <span className="uppercase text-[#e67e22]">BENTO</span></strong> foi desenvolvido para professores que buscam materiais pedagógicos prontos, com um tema lúdico e atrativo para as crianças.
            </p>
            <p>
              com atividades ilustradas e organizadas, o kit ajuda a tornar o dia a dia em sala de aula mais <strong>prático, visual e envolvente</strong>.
            </p>
          </div>
        </div>
        <div className="flex-1 w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 bg-[#fdf8f1]">
                <img 
                  src="https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/Kit-Coelhinho-Bento.jpg" 
                  alt="kit sala de aula do coelhinho bento"
                  className="w-full h-auto block pointer-events-none"
                  onContextMenu={(e) => e.preventDefault()}
                />
            </div>
        </div>
      </div>
    </div>
  </section>
);

const Contents = () => {
  const items = [
    { text: "🕒 vamos aprender as horas!!", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-19-de-jan.-de-2026-12_12_06.png" },
    { text: "🧑‍🤝‍🧑 ajudantes do dia", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-17-de-jan.-de-2026-11_03_54.png" },
    { text: "🔺 formas geométricas espaciais", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_02_21.png" },
    { text: "🔠 cards do alfabeto com letras bastão e cursiva para parede", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-17-de-jan.-de-2026-15_05_34.png" },
    { text: "🔺 formas geométricas planas", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_02_29.png" },
    { text: "🔢 painel número do dia", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_03_30.png" },
    { text: "📝 painel palavrinha do dia", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_03_53.png" },
    { text: "📅 calendário", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-22_03_39.png" },
    { text: "🎂 painel de aniversariantes", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_00_38.png" },
    { text: "👥 quantos somos", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_03_09.png" },
    { text: "✖️ tabuada da multiplicação", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-19-de-jan.-de-2026-16_52_49.png" },
    { text: "🔢 painel de parede dos numeros", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-19-de-jan.-de-2026-17_09_40.png" }
  ];

  return (
    <section className="bg-[#f0f9f1] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 flex items-center justify-center gap-3 lowercase">
            <span className="text-3xl">📂</span> o kit contém:
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {items.map((item, idx) => {
            const isPdf = item.image?.toLowerCase().endsWith('.pdf');
            return (
              <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-[6px] border-[#2ecc71] transition-all hover:shadow-md group">
                {item.image && (
                  <div className="relative group/img flex-shrink-0">
                    {isPdf ? (
                      <div className="w-12 h-12 rounded bg-red-50 flex items-center justify-center text-red-500 border border-red-100 group-hover:bg-red-100 transition-colors">
                        <FileText size={22} />
                      </div>
                    ) : (
                      <img 
                        src={item.image} 
                        alt="" 
                        className="w-12 h-12 rounded shadow-sm object-cover border border-gray-100 cursor-zoom-in transition-transform duration-300 pointer-events-none" 
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    )}
                    
                    {/* Hover Zoom Preview (Apenas para imagens) */}
                    {!isPdf && (
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 z-[60] opacity-0 group-hover/img:opacity-100 pointer-events-none transition-all duration-300 transform translate-y-4 group-hover/img:translate-y-0 hidden md:block">
                        <div className="bg-white p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 w-[450px] max-w-[90vw] overflow-hidden">
                           <img 
                            src={item.image} 
                            alt="ampliado" 
                            className="w-full h-auto rounded-xl pointer-events-none" 
                            onContextMenu={(e) => e.preventDefault()}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <span className="text-gray-700 font-bold text-sm md:text-base lowercase">{item.text}</span>
              </div>
            );
          })}
        </div>
        
        <div className="bg-[#1a2e2a] text-white py-5 px-8 rounded-2xl flex items-center justify-center gap-3 text-lg md:text-2xl font-black shadow-2xl border-b-4 border-black/20 lowercase">
          <span className="text-yellow-400 text-2xl">⚡</span> 
          <span className="text-2xl">📌</span> 
          <span>total: 12 arquivos digitais (+ bônus)</span>
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => (
  <section className="bg-[#fdf8f1] py-20 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <SectionTitle><span className="lowercase">🎯 indicado para:</span></SectionTitle>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { icon: <BookOpen />, label: "educação infantil" },
          { icon: <Users />, label: "professores" },
          { icon: <CheckCircle />, label: "auxiliares" },
          { icon: <Printer />, label: "escolas" },
          { icon: <FileText />, label: "uso em sala" }
        ].map((item, idx) => (
          <Card key={idx} className="flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform cursor-default">
            <div className="text-[#2ecc71] p-3 bg-[#f0f9f1] rounded-full">{item.icon}</div>
            <span className="font-bold text-gray-700 text-sm leading-tight lowercase">{item.label}</span>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Differential = () => (
  <section className="bg-white py-20 px-6">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 order-2 md:order-1">
        <div className="bg-blue-50 p-4 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-19-de-jan.-de-2026-09_26_03.png" 
              alt="diferencial coelho BENTO"
              className="w-full h-auto block pointer-events-none"
              onContextMenu={(e) => e.preventDefault()}
            />
        </div>
      </div>
      <div className="flex-1 order-1 md:order-2">
        <SectionTitle center={false}>
          <span className="flex flex-col items-start gap-1">
            <span className="flex items-center gap-2">
               <span className="text-3xl">🐰</span>
               <span className="lowercase">kit sala de aula</span>
            </span>
            <span className="flex items-baseline gap-2 flex-wrap">
              <span className="lowercase">do coelhinho</span>
              <span className="uppercase text-[#e67e22] font-black tracking-tight">BENTO</span>
            </span>
          </span>
        </SectionTitle>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed lowercase">
          <p>
            o <strong>coelhinho <span className="uppercase text-[#e67e22]">BENTO</span></strong> é um personagem carismático e familiar para as crianças, ajudando a tornar as atividades mais atrativas e envolventes.
          </p>
          <p>
            o uso de um personagem fixo facilita a identificação das crianças com o material, tornando o momento das atividades mais <strong>leve e organizado</strong>.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const FormatInfo = () => (
  <section className="bg-[#f0f4f9] py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-