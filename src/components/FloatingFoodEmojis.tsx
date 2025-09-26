const FloatingFoodEmojis = ({ density = 30 }: { density?: number }) => {
  const foodEmojis = ["🍎", "🥕", "🥦", "🍌", "🍓", "🥑", "🍊", "🥬", "🍇", "🫐", "🥒", "🍅", "🥝", "🥭", "🍑", "🥔", "🌶️", "🫑", "🧄", "🧅", "🍋", "🥥", "🥜", "🥗", "🍉", "🍒", "🥐", "🥖", "🧀", "🥞", "🍳", "🥪", "🌽", "🍠", "🥨", "🫒", "🍍", "🫚", "🥦", "🫛", "🌮", "🥙", "🍱", "🥘", "🍲", "🥣", "🥟", "🍜"];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {Array.from({ length: density }, (_, index) => (
        <div 
          key={index} 
          className="absolute text-2xl animate-float-food" 
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '0px',
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          {foodEmojis[Math.floor(Math.random() * foodEmojis.length)]}
        </div>
      ))}
    </div>
  );
};

export default FloatingFoodEmojis;