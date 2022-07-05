import { useSelector } from 'react-redux';
import Card from './Card';
import CreatorCard from './CreatorCard';

const CardContainer = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <div className="grid grid-cols-3 gap-5">
      {cards.map((card) => <Card title={card.title} description={card.description} videoLink={card.videoLink} />)}
      <CreatorCard />
    </div>
  )
}

export default CardContainer;