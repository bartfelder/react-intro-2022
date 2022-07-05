import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import CardBox from './CardContents/CardBox';
import { BASE_URL} from '../constants';
import { useDispatch } from 'react-redux';
import { addCard } from '../store/cardsSlice';

const CreatorCard = () => {
  const [inEditMode, setInEditMode] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const timerId = useRef();
  const dispatch = useDispatch();

  const handleAddButton = () => {
    setIsFlipping(true);
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => setInEditMode(true), 1000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Title: ${title} \nDescription ${description} \nVideo URL ${BASE_URL}${videoLink}`);
    dispatch(addCard({
      id: Math.trunc(Math.random() * 1000),
      title,
      description,
      videoLink: `${BASE_URL}${videoLink}`,
    }));
  }

  return (
    <CardBox>
      {inEditMode ? (
        <form className='grid grid-cols-3 gap-2 h-full' onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            name='title'
            className='h-6 col-span-2'
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title} />
          <label>Description:</label>
          <textarea
            name='description'
            className='col-span-2'
            type='textarea'
            onChange={(e) => setDescription(e.target.value)}
            value={description} />
          <label>Video URL:</label>
          <div className='h-6 col-span-2'>
            <input
              className='w-full'
              disabled
              value={BASE_URL} />
            <input
              className='w-full'
              name='videoLink'
              type='text' onChange={(e) => setVideoLink(e.target.value)}
              value={videoLink} />
          </div>
          <button className='' type='submit'>Create card</button>
        </form>
      ) : (
        <button className='inline-block w-full h-full' onClick={handleAddButton}>
          <FontAwesomeIcon icon={faPlusSquare} size='6x' flip={isFlipping} />
        </button>
      )}
    </CardBox>
  )
}

export default CreatorCard;