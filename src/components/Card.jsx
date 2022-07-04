import CardDescription from './CardContents/CardDescription';
import CardTitle from './CardContents/CardTitle';
import CardVideo from './CardContents/CardVideo';

const Card = ({ title, description, videoLink }) => {
  return (
    <div className='max-w-l rounded overflow-hidden shadow-lg bg-slate-400 p-3'>
      <CardTitle title={title} />
      <CardVideo link={videoLink} />
      <CardDescription description={description} />
    </div>
  )
}

export default Card;
