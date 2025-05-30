
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Zap, Shield, TrendingUp, Users, Clock, Star } from 'lucide-react';

const Index = () => {
  const [countdown, setCountdown] = useState(23);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
    const timer = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 23);
    }, 60000);

    // Add Wistia scripts to head
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/56y99ssk3w.js';
    script2.async = true;
    script2.type = 'module';
    document.head.appendChild(script2);

    // Add Wistia styles
    const style = document.createElement('style');
    style.textContent = `
      .player-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      wistia-player[media-id='56y99ssk3w']:not(:defined) {
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/56y99ssk3w/swatch');
        display: block;
        filter: blur(5px);
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearInterval(timer);
      // Cleanup scripts and styles
      if (document.head.contains(script1)) document.head.removeChild(script1);
      if (document.head.contains(script2)) document.head.removeChild(script2);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const grupos = [
      "https://chat.whatsapp.com/BPxw1S8Yp3u98R8C4HxkMf",
      "https://chat.whatsapp.com/IX7C8LOvXwUCOanAbnyIil",
      "https://chat.whatsapp.com/GT3gBkZnYoaFdFjtWpsinZ",
      "https://chat.whatsapp.com/ErJakxVIDVgCBgyQw3CyQI",
      "https://chat.whatsapp.com/L9CFAtNt8gB2t1yQcUfv50",
      "https://chat.whatsapp.com/KArkkZfUcJz08WScvfuCAG",
      "https://chat.whatsapp.com/F22ZAPilzpTKYZtMefsALc"
    ];
    window.location.href = grupos[Math.floor(Math.random() * grupos.length)];
  };

  const handleAccessMethod = () => {
    window.location.href = "https://php.betbr.site/mines/";
  };

  const testimonials = [
    { name: "João V.", location: "Recife/PE", text: "Fiz R$ 500 no primeiro dia com R$ 20 de banca!" },
    { name: "Ana C.", location: "São Paulo/SP", text: "O app realmente mostra onde NÃO ESTÁ AS BOMBINHAS. Incrível!" },
    { name: "Gabriel T.", location: "Belo Horizonte/MG", text: "Recuperei toda minha banca antiga e já tô no lucro!" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
      {/* Header with urgency banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-center py-2 font-bold animate-pulse">
        🔥 ÚLTIMAS {countdown} VAGAS DISPONÍVEIS HOJE! 🔥
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">
        <div className={`text-center text-white space-y-4 md:space-y-6 transform transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Badge className="bg-red-500 text-white text-base md:text-lg px-4 md:px-6 py-2 animate-bounce">
            🔥 ATENÇÃO! MÉTODO EXCLUSIVO
          </Badge>
          
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-black leading-tight px-2">
            Se você tá <span className="text-yellow-400">CANSADO</span> de perder dinheiro...
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-300 px-2">
            Essa informação pode mudar seu jogo AGORA MESMO! 🎯
          </p>

          <div className="bg-red-600/20 border-2 border-red-400 rounded-lg p-4 md:p-6 backdrop-blur-sm mx-2">
            <p className="text-base md:text-lg font-bold flex items-center justify-center gap-2 flex-wrap">
              <AlertTriangle className="text-yellow-400 flex-shrink-0" />
              AS PLATAFORMAS NÃO QUEREM QUE VOCÊ SAIBA DISSO!
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="bg-black/40 border-red-500 border-2">
            <CardContent className="p-4 md:p-8 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🎥 VÍDEO EXCLUSIVO</h2>
              <p className="text-base md:text-lg mb-6">ASSISTA AGORA e descubra como milhares de jogadores estão ganhando todos os dias com a ajuda da Inteligência Artificial no Mines!</p>
              
              <div className="player-container mb-6">
                <div 
                  dangerouslySetInnerHTML={{
                    __html: `<wistia-player media-id="56y99ssk3w" seo="false" aspect="0.565625" style="width: 100%; max-width: 640px; height: auto;"></wistia-player>`
                  }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-sm mb-6 md:mb-8">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                  🔒 Método 100% legal
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                  💰 Resultados já no primeiro dia
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                  ⚠️ Pode sair do ar a qualquer momento!
                </div>
              </div>

              {/* Second CTA Button */}
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl w-full md:w-auto"
                style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                onClick={handleAccessMethod}
              >
                🚀 ACESSAR MÉTODO AGORA
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Problem Section */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-red-900/80 to-red-800/80 border-red-400">
            <CardContent className="p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🤔 POR QUE VOCÊ PERDE TANTO NO MINES?</h2>
              
              <div className="space-y-4 text-base md:text-lg">
                <div className="flex items-center gap-3">
                  <span className="text-red-400 flex-shrink-0">❌</span>
                  <span>Não é falta de sorte...</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 flex-shrink-0">❌</span>
                  <span>Não é porque o jogo é impossível...</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 flex-shrink-0">❌</span>
                  <span>É porque o sistema é feito pra te enganar!</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-500/30 rounded-lg">
                <p className="font-bold text-center text-lg md:text-xl">
                  A inteligência da plataforma é feita para te fazer perder!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Solution Section */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-green-800/80 to-green-700/80 border-green-400">
            <CardContent className="p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🛑 MAS AGORA CHEGA!</h2>
              
              <p className="text-lg md:text-xl text-center mb-6">
                Descobri um método <span className="text-yellow-400 font-bold">100% FUNCIONAL</span> e <span className="text-yellow-400 font-bold">100% AUTOMATIZADO</span> com Inteligência Artificial
              </p>
              
              <p className="text-base md:text-lg text-center mb-8 text-green-300">
                Que te mostra ONDE ESTÃO AS BOMBAS antes mesmo de você clicar!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
                  <span>✅ Sem hacks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
                  <span>✅ Sem modificar o jogo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
                  <span>✅ Sem promessas falsas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
                  <span>✅ Resultados reais e rastreáveis</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-500/30 rounded-lg">
                <p className="font-bold text-center text-base md:text-lg">
                  ⚡ Qualquer pessoa consegue usar, mesmo sem entender de apostas!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <Card className="bg-black/40 border-blue-500">
            <CardContent className="p-6 md:p-8 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">📲 FUNCIONA EM QUALQUER CELULAR</h2>
              <p className="text-base md:text-lg mb-6">Veja como o app mostra o caminho seguro no Mines em tempo real com Inteligência Artificial!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Zap className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                  <span>🔐 Acesso imediato</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <TrendingUp className="text-green-400 w-6 h-6 flex-shrink-0" />
                  <span>📈 Resultados em até 24h</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">🗣️ DEPOIMENTOS REAIS DO NOSSO GRUPO</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-yellow-400 backdrop-blur-sm">
                <CardContent className="p-6 text-white">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-base md:text-lg mb-4">"{testimonial.text}"</p>
                  <p className="font-bold">— {testimonial.name}, {testimonial.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Badge className="bg-green-500 text-white text-base md:text-lg px-4 md:px-6 py-2">
              <Users className="w-5 h-5 mr-2" />
              🎯 Já são mais de 3.100 pessoas economizando e ganhando!
            </Badge>
          </div>
        </div>

        {/* Secret Section */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-900/80 to-purple-800/80 border-purple-400">
            <CardContent className="p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🔐 O SEGREDO QUE NINGUÉM CONTA</h2>
              
              <div className="space-y-4 text-base md:text-lg">
                <p>✨ Esse método foi criado após estudar a lógica por trás do algoritmo do Mines</p>
                <p>🚫 As plataformas NUNCA vão te ensinar isso</p>
                <p>🎯 Mas agora, você aprende passo a passo como usar a Inteligência Artificial ao seu favor!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Section */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <Card className="bg-red-600/30 border-red-400 border-2">
            <CardContent className="p-6 md:p-8 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">⚠️ ÚLTIMAS VAGAS!</h2>
              <p className="text-base md:text-lg mb-4">Liberamos apenas 20 acessos por dia para evitar que o app seja derrubado.</p>
              <p className="text-base md:text-lg mb-6 text-yellow-300">Essa página pode sair do ar a qualquer momento.</p>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="text-green-400 w-6 h-6 flex-shrink-0" />
                <span className="text-base md:text-lg font-bold">🔐 Garantia total</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white px-2">✅ QUERO COMEÇAR AGORA!</h2>
          <p className="text-lg md:text-xl text-yellow-300 px-2">💥 Clique no botão abaixo e comece a ganhar com Inteligência Artificial no Mines ainda hoje!</p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl w-full md:w-auto max-w-md mx-auto"
            style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
            onClick={handleAccessMethod}
          >
            🚀 ACESSAR MÉTODO AGORA
          </Button>

          {/* WhatsApp Button */}
          <div className="mt-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg md:text-xl px-6 md:px-12 py-4 md:py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl w-full md:w-auto max-w-md mx-auto"
              onClick={handleWhatsAppClick}
            >
              📱 ENTRAR NO GRUPO VIP DO WHATSAPP 📱
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm text-green-300 px-2">
            <span>🚀 100% seguro</span>
            <span>•</span>
            <span>📊 Resultados comprovados</span>
            <span>•</span>
            <span>⏰ Oferta por tempo LIMITADO</span>
          </div>
        </div>

        {/* Footer countdown */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-red-600/20 border border-red-400 rounded-lg p-4 inline-block">
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <span className="font-bold">Vagas restantes hoje: {countdown}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
