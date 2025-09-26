const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">LifeApp</div>
            <p className="text-background/80">
              Revolucionando a nutrição e treino em casa com Inteligência artificial.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Úteis</h3>
            <ul className="space-y-2 text-background/80">
              <li><span className="cursor-default text-background/80">Funcionalidades</span></li>
              <li><span className="cursor-default text-background/80">Planos</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Suporte</h3>
            <ul className="space-y-2 text-background/80">
              <li><span className="cursor-default text-background/80">Central de Ajuda</span></li>
              <li><span className="cursor-default text-background/80">Contato</span></li>
              <li><span className="cursor-default text-background/80">Política de Privacidade</span></li>
              <li><span className="cursor-default text-background/80">Termos de Uso</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2025 lifeapp. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;