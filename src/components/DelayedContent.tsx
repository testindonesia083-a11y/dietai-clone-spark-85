import { useState, useEffect } from "react";

interface DelayedContentProps {
  children: React.ReactNode;
  delayInSeconds: number;
}

const DelayedContent = ({ children, delayInSeconds }: DelayedContentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if vslTub player exists and listen for video events
    const checkVideoProgress = () => {
      const player = document.getElementById('vslturb-player');
      if (player) {
        // Use a timer as fallback since vslTub API might not be directly accessible
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, delayInSeconds * 1000);

        return () => clearTimeout(timer);
      }
    };

    // Wait a bit for the player to load
    const initTimer = setTimeout(checkVideoProgress, 1000);

    return () => clearTimeout(initTimer);
  }, [delayInSeconds]);

  if (!isVisible) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="text-2xl font-semibold">Aguarde...</div>
          <div className="text-muted-foreground">O conteúdo será liberado em breve</div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default DelayedContent;