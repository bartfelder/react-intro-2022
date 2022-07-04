import Card from './Card';
import CreatorCard from './CreatorCard';

const CardContainer = ({ cards }) => (
    <div className="grid grid-cols-3 gap-5">
      {cards.map((card) => <Card title={card.title} description={card.description} videoLink={card.videoLink} />)}
      <CreatorCard />
    </div>
  )

export default CardContainer;