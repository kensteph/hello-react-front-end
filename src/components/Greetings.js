import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingsFromAPI } from '../redux/features/greetingsSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const error = useSelector((sotre) => sotre.greetings.error);
  const status = useSelector((sotre) => sotre.greetings.status);
  const greetings = useSelector((sotre) => sotre.greetings.greetings);

  useEffect(() => {
    dispatch(getGreetingsFromAPI());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(getGreetingsFromAPI());
  };

  return (
    <>
      {error}
      {status === 'loading' && 'Loading....'}
      <p>{status === 'succeed' && greetings}</p>
      <button type="button" onClick={handleClick}>Get greetings</button>
    </>
  );
};

export default Greetings;
