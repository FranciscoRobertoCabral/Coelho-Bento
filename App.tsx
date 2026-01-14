import React from 'react';
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
  Check,
  CreditCard
} from 'lucide-react';

// --- Helper Components ---

const Button: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = "", onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full md:w-auto px-10 py-5 bg-[#2ecc71] hover:bg-[#27ae60] text-white font-extrabold text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-wider ${className}`}
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

const Hero = () => (
  <section className="relative bg-[#1a2e2a] text-white pt-16 pb-24 px-6 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
    </div>
    
    <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
      <div className="inline-block bg-[#2ecc71] text-[#1a2e2a] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
        Lançamento
      </div>
      
      <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-6 uppercase tracking-tighter">
        Kit Sala de Aula
        <br />
        <span className="text-[#e67e22]">Tema Coelho Bento</span>
      </h1>
      
      <p className="text-lg md:text-2xl font-medium text-gray-300 max-w-3xl mb-10 leading-relaxed">
        Materiais pedagógicos prontos, lúdicos e organizados para facilitar a rotina do professor em sala na Educação Infantil.
      </p>

      <div className="relative w-full max-w-4xl aspect-video rounded-3xl bg-white/10 p-4 border border-white/20 shadow-2xl backdrop-blur-sm group mb-12">
        <div className="w-full h-full bg-[#fdf8f1] rounded-2xl flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center p-8">
             <div className="bg-white/90 p-12 rounded-2xl shadow-xl border-2 border-dashed border-[#2ecc71] flex flex-col items-center w-full max-w-lg">
                <Star className="text-yellow-400 w-12 h-12 mb-4" />
                <span className="text-2xl md:text-4xl font-black text-[#2ecc71] text-center uppercase tracking-tighter">
                  imagem dos entregaveis
                </span>
             </div>
          </div>
        </div>
      </div>

      <Button onClick={() => window.scrollTo({ top: document.getElementById('oferta')?.offsetTop || 0, behavior: 'smooth' })}>
        Comprar agora
      </Button>
      
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full text-gray-400 font-semibold text-sm">
        <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-[#2ecc71]" /> PDF de Alta Qualidade</div>
        <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-[#2ecc71]" /> Envio Imediato</div>
        <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-[#2ecc71]" /> 18 Arquivos Prontos</div>
        <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-[#2ecc71]" /> Compra Segura</div>
      </div>
    </div>
  </section>
);

const Description = () => (
  <section className="bg-white py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <SectionTitle center={false}>
            <span className="text-[#2ecc71]">📘</span> Descrição do Projeto
          </SectionTitle>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-normal">
            <p>
              O <strong>Kit Sala de Aula – Tema Coelho Bento</strong> foi desenvolvido para professores que buscam materiais pedagógicos prontos, com um tema lúdico e atrativo para as crianças.
            </p>
            <p>
              Com atividades ilustradas e organizadas, o kit ajuda a tornar o dia a dia em sala de aula mais <strong>prático, visual e envolvente</strong>.
            </p>
          </div>
        </div>
        <div className="flex-1 w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full aspect-square bg-[#fdf8f1] border-2 border-dashed border-[#2ecc71] flex items-center justify-center p-8">
                   <p className="text-xl md:text-2xl font-black text-[#2ecc71] text-center uppercase tracking-tight">
                     imagem do entregavel
                   </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
);

const Contents = () => {
  const items = [
    "🕒 Painel “Que horas são?”",
    "🧑‍🤝‍🧑 Ajudantes do dia",
    "📜 Combinados da turma",
    "🔺 Formas geométricas planas e espaciais",
    "🅰️ Silabário simples (cursivo e bastão)",
    "🆎 Silabário complexo (cursivo e bastão)",
    "🔢 Painel Número do dia",
    "📝 Painel Palavrinha do dia",
    "📚 Leiturômetro",
    "👧👦 Quantos somos",
    "🪪 Crachá de mesa (3 opções completas)",
    "✖️ Tabuada da multiplicação",
    "🙌 Painel “Bem-vindos” interativo",
    "🔠 Alfabeto de parede",
    "📋 Chamadinha (Editável no Canva Pro)",
    "👋 Cumprimentos divertidos",
    "🚪 Placa de porta para sala",
    "🎨 Opções de decoração de porta"
  ];

  return (
    <section className="bg-[#f0f9f1] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 flex items-center justify-center gap-3">
            <span className="text-3xl">📂</span> O kit contém:
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-[6px] border-[#2ecc71] transition-all hover:shadow-md">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#2ecc71] flex items-center justify-center">
                <Check className="text-[#2ecc71]" size={14} strokeWidth={4} />
              </div>
              <span className="text-gray-700 font-bold text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-[#1a2e2a] text-white py-5 px-8 rounded-2xl flex items-center justify-center gap-3 text-lg md:text-2xl font-black shadow-2xl border-b-4 border-black/20">
          <span className="text-yellow-400 text-2xl">⚡</span> 
          <span className="text-2xl">📌</span> 
          <span>Total: 18 arquivos digitais</span>
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => (
  <section className="bg-[#fdf8f1] py-20 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <SectionTitle>🎯 Indicado para:</SectionTitle>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { icon: <BookOpen />, label: "Educação Infantil" },
          { icon: <Users />, label: "Professores" },
          { icon: <CheckCircle />, label: "Auxiliares" },
          { icon: <Printer />, label: "Escolas" },
          { icon: <FileText />, label: "Uso em sala ou reforço" }
        ].map((item, idx) => (
          <Card key={idx} className="flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform cursor-default">
            <div className="text-[#2ecc71] p-3 bg-[#f0f9f1] rounded-full">{item.icon}</div>
            <span className="font-bold text-gray-700 text-sm leading-tight">{item.label}</span>
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
        <div className="bg-blue-50 p-4 rounded-3xl">
            <div className="rounded-2xl shadow-lg w-full aspect-square bg-white border-2 border-dashed border-[#2ecc71] flex items-center justify-center p-8">
               <p className="text-xl md:text-2xl font-black text-[#2ecc71] text-center uppercase tracking-tight">
                 foto de um coelho de oculos
               </p>
            </div>
        </div>
      </div>
      <div className="flex-1 order-1 md:order-2">
        <SectionTitle center={false}>🐰 Tema Coelho Bento</SectionTitle>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            O <strong>Coelho Bento</strong> é um personagem carismático e familiar para as crianças, ajudando a tornar as atividades mais atrativas e envolventes.
          </p>
          <p>
            O uso de um personagem fixo facilita a identificação das crianças com o material, tornando o momento das atividades mais <strong>leve e organizado</strong>.
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
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <Download className="text-[#3498db]" /> 💾 Formato:
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600">
              <CheckCircle size={18} className="text-[#3498db]" /> Arquivos digitais (PDF)
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600">
              <CheckCircle size={18} className="text-[#3498db]" /> Envio imediato após a compra
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600">
              <CheckCircle size={18} className="text-[#3498db]" /> Pode ser impresso quantas vezes desejar
            </li>
          </ul>
        </Card>

        <Card className="flex flex-col gap-6 border-none bg-white">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <AlertCircle className="text-orange-500" /> Informações Importantes
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600">
              <CheckCircle size={18} className="text-orange-500" /> Produto digital
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600">
              <CheckCircle size={18} className="text-orange-500" /> Não acompanha material físico
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600">
              <CheckCircle size={18} className="text-orange-500" /> Uso pedagógico
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-gray-600 italic">
              <CheckCircle size={18} className="text-red-500" /> Proibida a revenda ou compartilhamento
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
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wider">
        Acesso Imediato ao Kit Completo
      </h2>
      <p className="text-gray-400 text-lg mb-8 font-medium">
        Garanta seu material hoje com valor promocional por tempo limitado.
      </p>
      
      <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-md inline-block w-full max-w-2xl shadow-2xl">
        <div className="mb-2">
          <span className="text-red-400 line-through text-xl mr-3 font-semibold">De R$ 49,90</span>
        </div>
        <div className="flex flex-col items-center justify-center mb-10">
          <span className="text-gray-300 text-lg font-bold uppercase mb-1">Por apenas</span>
          <div className="flex items-baseline gap-2">
            <span className="text-white text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">R$</span>
            <span className="text-[#2ecc71] text-7xl md:text-9xl font-black tracking-tighter">10,00</span>
          </div>
          <span className="text-gray-400 text-sm mt-4 flex items-center gap-2">
            <CreditCard size={16} /> Pagamento Único • Sem Mensalidades
          </span>
        </div>
        
        <Button className="w-full !py-6 !text-2xl shadow-[0_0_30px_rgba(46,204,113,0.3)]">
          QUERO MEU KIT AGORA
        </Button>
      </div>
      
      <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/40 text-xs font-bold uppercase tracking-widest">
        <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#2ecc71]" /> Site 100% Seguro</span>
        <span className="flex items-center gap-2"><Zap size={16} className="text-[#2ecc71]" /> Liberação Imediata</span>
        <span className="flex items-center gap-2"><Star size={16} className="text-[#2ecc71]" /> Satisfação Garantida</span>
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
      <SectionTitle>✅ Garantia de 7 dias</SectionTitle>
      <p className="text-xl text-gray-600 leading-relaxed mb-10">
        Você pode solicitar reembolso dentro do prazo caso o material não atenda às suas expectativas. Sua satisfação é nossa prioridade.
      </p>
      
      <div className="flex flex-col items-center gap-8">
        <Button onClick={() => window.scrollTo({ top: document.getElementById('oferta')?.offsetTop || 0, behavior: 'smooth' })}>
          Comprar agora
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1a2e2a] text-gray-500 py-10 px-6 border-t border-white/5 text-center text-sm font-medium">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
      <p>&copy; Kit Sala de Aula - Tema Coelho Bento. Todos os direitos reservados.</p>
      <p className="max-w-2xl">
        Este produto é exclusivamente digital. O acesso será enviado ao e-mail cadastrado no momento da compra imediatamente após a confirmação do pagamento.
      </p>
    </div>
  </footer>
);

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-['Montserrat']">
      {/* Navigation - Minimal fixed CTA for mobile */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-50 md:hidden flex justify-center">
        <button 
          onClick={() => window.scrollTo({ top: document.getElementById('oferta')?.offsetTop || 0, behavior: 'smooth' })}
          className="w-full py-4 bg-[#2ecc71] text-white font-black rounded-xl text-lg shadow-lg"
        >
          COMPRAR AGORA
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