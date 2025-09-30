const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {/* Brand */}
          <div className="space-y-4 text-center max-w-md">
            <div className="text-2xl font-bold">LifeApp</div>
            <p className="text-background/80">
              Revolucionando a nutrição e perda de peso em casa com Inteligência artificial.
            </p>
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