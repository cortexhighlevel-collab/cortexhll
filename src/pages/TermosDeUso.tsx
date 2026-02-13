import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoImage from "@/assets/logo-cortex-branco.webp";

const TermosDeUso = () => {
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
        <h1 className="text-3xl md:text-4xl font-medium mb-2">Termos de Uso</h1>
        <p className="text-white/40 text-sm mb-10">
          Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
        </p>

        <div className="space-y-8 text-white/70 text-sm md:text-base leading-relaxed font-light">
          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar os serviços da Cortex High Level ("Cortex", "nós", "nosso"), você concorda com estes Termos de Uso. Se você não concordar com algum destes termos, não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">2. Descrição dos Serviços</h2>
            <p>
              A Cortex High Level oferece serviços de marketing digital, design, desenvolvimento web, gestão de tráfego pago, CRM, inteligência artificial aplicada ao marketing e serviços correlatos. Os detalhes específicos de cada serviço são definidos em propostas comerciais e contratos individuais.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente neste site, incluindo mas não limitado a textos, imagens, logotipos, vídeos, designs e código-fonte, é de propriedade exclusiva da Cortex High Level ou de seus licenciadores, sendo protegido pelas leis de propriedade intelectual vigentes.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">4. Uso Permitido</h2>
            <p>Você se compromete a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1.5 text-white/60">
              <li>Utilizar o site apenas para fins legais e legítimos</li>
              <li>Não reproduzir, distribuir ou modificar qualquer conteúdo sem autorização prévia</li>
              <li>Não tentar acessar áreas restritas do site ou seus sistemas</li>
              <li>Fornecer informações verdadeiras ao entrar em contato conosco</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">5. Limitação de Responsabilidade</h2>
            <p>
              A Cortex High Level não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou da incapacidade de uso dos nossos serviços, salvo nos casos previstos em lei.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">6. Links para Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo ou práticas de privacidade desses sites e não nos responsabilizamos por eles.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">7. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas através do nosso site. O uso continuado dos serviços após as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">8. Contato</h2>
            <p>
              Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail{" "}
              <a href="mailto:cortexhighlevel@gmail.com" className="text-orange-500 hover:underline">
                cortexhighlevel@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-medium mb-3">9. Legislação Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca da sede da empresa.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermosDeUso;
