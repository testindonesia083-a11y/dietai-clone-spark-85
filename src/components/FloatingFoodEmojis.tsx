const FloatingFoodEmojis = ({ density = 30 }: { density?: number }) => {
  const foodEmojis = ["🍎", "🥕", "🥦", "🍌", "🍓", "🥑", "🍊", "🥬", "🍇", "🫐", "🥒", "🍅", "🥝", "🥭", "🍑", "🥔", "🌶️", "🫑", "🧄", "🧅", "🍋", "🥥", "🥜", "🥗", "🍉", "🍒", "🥐", "🥖", "🧀", "🥞", "🍳", "🥪", "🌽", "🍠", "🥨", "🫒", "🍍", "🫚", "🥦", "🫛", "🌮", "🥙", "🍱", "🥘", "🍲", "🥣", "🥟", "🍜"];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: density }, (_, index) => (
        <div 
          key={index} 
          className="absolute text-2xl animate-float-food opacity-40" 
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        >
          {foodEmojis[Math.floor(Math.random() * foodEmojis.length)]}
        </div>
      ))}
    </div>
  );
};

export default FloatingFoodEmojis;