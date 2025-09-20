const IntegrationSection = () => {
  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center space-y-8">
          {/* Chain Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-gray-600"
              >
                <path d="M9 12l2 2 4-4"/>
                <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                <path d="M8.5 8.5l-1.5-1.5"/>
                <path d="M15.5 15.5l1.5 1.5"/>
                <path d="M15.5 8.5l1.5-1.5"/>
                <path d="M8.5 15.5l-1.5 1.5"/>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground">
            Integração com seu relógio
          </h2>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            Registre facilmente exercícios através da integração com o Strava que permite você integrar com seu relógio, seja Apple, Fitbit etc.
          </p>

          {/* Brand Logos */}
          <div className="space-y-6 py-4">
            {/* Strava Logo */}
            <div className="flex justify-center">
              <div className="text-3xl font-bold text-orange-500">
                STRAVA
              </div>
            </div>

            {/* Garmin Logo */}
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-blue-600">
                GARMIN.
              </div>
            </div>

            {/* Whoop Logo */}
            <div className="flex justify-center">
              <div className="text-xl font-light text-gray-600 tracking-widest">
                WHOOP
              </div>
            </div>
          </div>

          {/* More integrations text */}
          <p className="text-sm text-blue-600 font-medium">
            e mais 30 integrações...
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;