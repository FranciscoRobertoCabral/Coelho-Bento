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

/**
 * Image Wrapper component that puts an invisible div on top of images
 * to prevent right-clicks, long presses on mobile, and dragging.
 */
const ProtectedImage: React.FC<{ 
  src: string; 
  alt: string; 
  className?: string; 
  width?: string; 
  height?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}> = ({ src, alt, className = "", width, height, loading = "lazy", fetchPriority = "auto" }) => (
  <div className={`relative inline-block overflow-hidden ${className}`} style={{ width: width ? 'auto' : undefined }}>
    <img 
      src={src} 
      alt={alt} 
      width={width}
      height={height}
      loading={loading}
      // @ts-ignore
      fetchpriority={fetchPriority}
      decoding="async"
      className="block w-full h-auto pointer-events-none select-none bg-gray-100"
      onContextMenu={(e) => e.preventDefault()}
    />
    {/* Invisible protection layer */}
    <div className="absolute inset-0 z-10 bg-transparent cursor-default" onContextMenu={(e) => e.preventDefault()}></div>
  </div>
);

// --- Sections ---

const Hero = () => {
  const images = [
    "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-19-de-jan.-de-2026-12_12_06.png",
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

        <div className="relative w-full max-w-4xl aspect-[16/9] mb-12 overflow-hidden group bg-white/5 rounded-2xl">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div 
              className="flex w-full h-full transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <ProtectedImage 
                    src={img} 
                    alt={`Material do Kit ${index + 1}`} 
                    className="w-full h-full object-contain"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={prevSlide}
              aria-label="Slide anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Próximo slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <button 
                  key={index}
                  aria-label={`Ir para slide ${index + 1}`}
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
            <div className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 bg-[#fdf8f1] aspect-square flex items-center justify-center">
                <ProtectedImage 
                  src="https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/Kit-Coelhinho-Bento.jpg" 
                  alt="Amostra do kit sala de aula do coelhinho bento"
                  width="500"
                  height="500"
                  className="w-full"
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
    { text: "🔠 cards do alfabeto", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-17-de-jan.-de-2026-15_05_34.png" },
    { text: "🔺 formas geométricas planas", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_02_29.png" },
    { text: "🔢 painel número do dia", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_03_30.png" },
    { text: "📝 palavrinha do dia", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_03_53.png" },
    { text: "📅 calendário", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-22_03_39.png" },
    { text: "🎂 aniversariantes", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_00_38.png" },
    { text: "👥 quantos somos", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-18-de-jan.-de-2026-21_03_09.png" },
    { text: "✖️ tabuada de multiplicação", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-19-de-jan.-de-2026-16_52_49.png" },
    { text: "🔢 painel dos números", image: "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-19-de-jan.-de-2026-17_09_40.png" }
  ];

  return (
    <section className="bg-[#f0f9f1] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionTitle><span className="lowercase">📂 visualização do kit</span></SectionTitle>
          <p className="text-gray-500 -mt-4 lowercase italic font-medium">conheça cada detalhe dos arquivos que você vai receber</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mb-16">
          {items.map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/5] w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 flex items-center justify-center p-2">
                <ProtectedImage 
                  src={item.image} 
                  alt={item.text} 
                  className="max-w-full max-h-full object-contain" 
                />
                {/* Visual Polish Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              
              {/* Item Name */}
              <div className="mt-4 text-center">
                <p className="text-gray-700 font-bold text-sm md:text-base lowercase leading-tight group-hover:text-[#2ecc71] transition-colors duration-300 px-2">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-[#1a2e2a] text-white py-6 px-10 rounded-3xl flex flex-col md:flex-row items-center justify-center gap-4 text-center shadow-2xl border-b-4 border-black/20 lowercase">
          <div className="flex items-center gap-3">
            <span className="text-yellow-400 text-3xl">⚡</span> 
            <span className="text-2xl">📌</span> 
          </div>
          <span className="text-xl md:text-2xl font-black">total: 12 arquivos digitais premium (+ bônus exclusivos)</span>
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
        <div className="bg-blue-50 p-4 rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-100 flex items-center justify-center">
            <ProtectedImage 
              src="https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/ChatGPT-Image-19-de-jan.-de-2026-09_26_03.png" 
              alt="Ilustração do diferencial coelho BENTO"
              width="600"
              height="338"
              className="w-full object-contain"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="flex flex-col gap-6 border-none">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 lowercase">
            <Download className="text-[#3498db]" /> formato:
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600 lowercase">
              <CheckCircle size={18} className="text-[#3498db]" /> arquivos digitais (pdf)
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600 lowercase">
              <CheckCircle size={18} className="text-[#3498db]" /> envio imediato após a compra
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600 lowercase">
              <CheckCircle size={18} className="text-[#3498db]" /> pode ser impresso quantas vezes desejar
            </li>
          </ul>
        </Card>

        <Card className="flex flex-col gap-6 border-none bg-white">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 lowercase">
            <AlertCircle className="text-orange-500" /> informações importantes:
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600 lowercase">
              <CheckCircle size={18} className="text-orange-500" /> produto digital
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600 lowercase">
              <CheckCircle size={18} className="text-orange-500" /> não acompanha material físico
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600 lowercase">
              <CheckCircle size={18} className="text-orange-500" /> uso pedagógico
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600 italic lowercase">
              <CheckCircle size={18} className="text-red-500" /> proibida a revenda ou compartilhamento
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="oferta" className="bg-[#1a2e2a] py-24 px-6 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-wider lowercase">
        acesso imediato ao kit completo
      </h2>
      <p className="text-gray-400 text-lg mb-8 font-medium lowercase">
        garanta seu material hoje com valor promocional por tempo limitado.
      </p>
      
      <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-md inline-block w-full max-w-2xl shadow-2xl text-center">
        <div className="mb-2">
          <span className="text-red-400 line-through text-xl mr-3 font-semibold lowercase">de r$ 49,90</span>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="text-gray-300 text-lg font-bold lowercase mb-1">por apenas</span>
          <div className="flex items-baseline gap-2">
            <span className="text-white text-3xl md:text-5xl font-extrabold lowercase tracking-tighter">r$</span>
            <span className="text-[#2ecc71] text-7xl md:text-9xl font-black tracking-tighter">10,00</span>
          </div>
          <span className="text-gray-400 text-sm mt-4 flex items-center gap-2 lowercase">
            <CreditCard size={16} /> pagamento único • sem mensalidades
          </span>
        </div>

        {/* Bonus Highlight repositioned above the button */}
        <div className="mb-8 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-4 inline-flex items-center gap-3">
          <Gift className="text-yellow-400" size={24} />
          <span className="text-yellow-100 font-bold text-base md:text-lg lowercase">
            bônus: crachá de mesa (editável no canva)
          </span>
        </div>
        
        <Button className="w-full !py-6 !text-2xl shadow-[0_0_30px_rgba(46,204,113,0.3)] lowercase">
          quero meu kit agora
        </Button>
      </div>
      
      <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/40 text-xs font-bold uppercase tracking-widest lowercase">
        <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#2ecc71]" /> site 100% seguro</span>
        <span className="flex items-center gap-2"><Zap size={16} className="text-[#2ecc71]" /> liberação imediata</span>
        <span className="flex items-center gap-2"><Star size={16} className="text-[#2ecc71]" /> satisfação garantida</span>
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section id="garantia" className="bg-white py-20 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-block p-4 bg-green-50 rounded-full mb-6">
        <ShieldCheck size={64} className="text-[#2ecc71]" />
      </div>
      <SectionTitle><span className="lowercase">✅ garantia de 7 dias</span></SectionTitle>
      <p className="text-xl text-gray-600 leading-relaxed mb-10 lowercase">
        você pode solicitar reembolso dentro do prazo caso o material não atenda às suas expectativas. sua satisfação é nossa prioridade.
      </p>
      
      <div className="flex flex-col items-center gap-8">
        <Button onClick={() => window.scrollTo({ top: document.getElementById('oferta')?.offsetTop || 0, behavior: 'smooth' })}>
          <span className="lowercase">comprar agora</span>
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1a2e2a] text-gray-500 py-10 px-6 border-t border-white/5 text-center text-sm font-medium lowercase">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
      <p>&copy; kit sala de aula do coelhinho BENTO. todos os direitos reservados.</p>
      <p className="max-w-2xl">
        este produto é exclusivamente digital. o acesso será enviado ao e-mail cadastrado no momento da compra imediatamente após a confirmação do pagamento.
      </p>
    </div>
  </footer>
);

// --- Main App Component ---

const App: React.FC = () => {
  useEffect(() => {
    // Disable right click globally
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable common copy/inspect shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'i' || e.key === 'j' || e.key === 'p')) ||
        (e.metaKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'i' || e.key === 'j' || e.key === 'p')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable image dragging globally
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('dragstart', handleDragStart);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div className="min-h-screen font-['Montserrat'] bg-gray-50 select-none">
      {/* Global Style for protection and performance placeholders */}
      <style>{`
        body {
          -webkit-touch-callout: none; /* Disable long press context menu on iOS */
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        img {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
          pointer-events: none; /* Important: makes the image non-interactable */
          background-color: #f3f4f6; /* Placeholder color */
        }
        /* Prevents layout shift for images in hero slider */
        .hero-img-container {
          aspect-ratio: 16/9;
        }
      `}</style>

      {/* Navigation - Minimal fixed CTA for mobile */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-50 md:hidden flex justify-center">
        <button 
          onClick={() => window.scrollTo({ top: document.getElementById('oferta')?.offsetTop || 0, behavior: 'smooth' })}
          className="w-full py-4 bg-[#2ecc71] text-white font-black rounded-xl text-lg shadow-lg lowercase"
        >
          comprar agora
        </button>
      </div>

      <main>
        <Hero />
        <Description />
        <Contents />
        <TargetAudience />
        <Differential />
        <FormatInfo />
        <Pricing />
        <Guarantee />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;