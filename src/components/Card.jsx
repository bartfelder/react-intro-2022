import CardBox from './CardContents/CardBox';
import CardDescription from './CardContents/CardDescription';
import CardTitle from './CardContents/CardTitle';
import CardVideo from './CardContents/CardVideo';

const Card = ({ title, description, videoLink }) => {
  return (
    <CardBox>
      <CardTitle title={title} />
      <CardVideo link={videoLink} />
      <CardDescription description={description} />
    </CardBox>
  )
}

export default Card;
