import Card from "./Card";

const CardContainer = ({ cards }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {cards.map((card) => <Card title={card.title} description={card.description} videoLink={card.videoLink} />)}
    </div>
  )
}

export default CardContainer;