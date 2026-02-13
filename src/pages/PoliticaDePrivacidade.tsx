import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoImage from "@/assets/logo-cortex-branco.webp";

const PoliticaDePrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-dm">
      <header className="w-full px-5 md:px-12 py-6 border-b border-white/10">
        <div className="max-w-[900px] mx-auto flex items-center justify-between">
          <Link to="/">
            <img src={logoImage} alt="Cortex" className="h-7 md:h-8" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-5 md:px-12 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-medium mb-2">Política de Privacidade</h1>
        <p className="text-white/40 text-sm mb-10">
          Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
        </p>

        <div className="space-y-8 text-white/70 text-sm md:text-base leading-relaxed font-light">
          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">1. Introdução</h2>
            <p>
              A Cortex High Level ("Cortex", "nós", "nosso") está comprometida com a proteção da sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">2. Dados que Coletamos</h2>
            <p>Podemos coletar os seguintes tipos de informações:</p>
            <ul className="list-disc list-inside mt-2 space-y-1.5 text-white/60">
              <li><strong className="text-white/80">Dados de identificação:</strong> nome, e-mail, telefone, empresa</li>
              <li><strong className="text-white/80">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência</li>
              <li><strong className="text-white/80">Dados de comunicação:</strong> mensagens enviadas através de formulários de contato ou WhatsApp</li>
              <li><strong className="text-white/80">Cookies e tecnologias similares:</strong> para melhorar a experiência de navegação</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">3. Como Utilizamos seus Dados</h2>
            <p>Utilizamos suas informações para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1.5 text-white/60">
              <li>Responder às suas solicitações e fornecer nossos serviços</li>
              <li>Enviar comunicações relevantes sobre nossos serviços</li>
              <li>Melhorar nosso site e a experiência do usuário</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Realizar análises internas e estatísticas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">4. Compartilhamento de Dados</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar dados com:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1.5 text-white/60">
              <li>Prestadores de serviços essenciais para a operação (hospedagem, analytics)</li>
              <li>Autoridades competentes, quando exigido por lei</li>
              <li>Plataformas de publicidade para otimização de campanhas (dados anonimizados)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">5. Segurança dos Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, controle de acesso e monitoramento contínuo.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">6. Seus Direitos (LGPD)</h2>
            <p>De acordo com a LGPD, você tem direito a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1.5 text-white/60">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Solicitar a correção de dados incompletos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar a portabilidade dos dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">7. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, embora isso possa afetar a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">8. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, incluindo obrigações legais, contratuais e regulatórias.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">9. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos suas informações.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">10. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail{" "}
              <a href="mailto:cortexhighlevel@gmail.com" className="text-orange-500 hover:underline">
                cortexhighlevel@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PoliticaDePrivacidade;
