import { BASE_URL } from '../constants';
import CardContainer from './CardContainer';

const Dashboard = () => {
  const cards = [
    {
      title: 'Honest movie trailer',
      description: 'This is the honest trailer of morbius which is nothing but a solid masterpiece. Fans are waiting for the sequel: Morbius 2: Let There be More Bius',
      videoLink: `${BASE_URL}NkqD2OUUjWY`,
    },
    {
      title: 'South Park clip',
      description: 'Randy Marsh learns why everyone is calling him Karen.',
      videoLink: `${BASE_URL}h75cPU_sP6c`,
    },
    {
      title: 'Robot Chicken | Adult Swim',
      description: 'Darth Vader continues to alter the deal with Lando, or how developers see product owners when they alter the story in the middle of a sprint.',
      videoLink: `${BASE_URL}WpE_xMRiCLE`,
    },
    {
      title: 'Family Guy: Peter\'s Painful Sleeping Habits',
      description: 'Peter\'s sleeping habits cause health problems for Lois.',
      videoLink: `${BASE_URL}R8MAW6N1Jhk`,
    },
  ]

  return (
    <>
      <h1 className='text-center font-extrabold text-white text-xl'>Clip collection</h1>
      <CardContainer cards={cards} />
    </>
  )
}

export default Dashboard;
