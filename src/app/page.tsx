// pages/page.js
import {Card} from '@/organisms'

const Page = () => {
  const cards = [
    { name: 'Card 1', route: '/card1' },
    { name: 'Card 2', route: '/card2' },
    { name: 'Card 3', route: '/card3' },
    // Add more cards as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Page 2</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} name={card.name} route={card.route} />
        ))}
      </div>
    </div>
  );
};

export default Page;
