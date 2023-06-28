import { useEffect, useState } from 'react';
import Dummy from './Dummy';
import Form from './Form';
// api
import getWordFromApi from '../../services/api';

function Main() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const handleChange = (ev) => {
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //add regular pattern
    if (re.test(ev.target.value) || ev.target.value === '') {
      handleLastLetter(ev.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter((letter) => word.includes(letter) === false);
    return errorLetters.length;
  };

  const renderErrorLetters = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
    );
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className='letter'>
          {letter}
        </li>
      );
    });
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className='letter'>
          {exists ? letter : ''}
        </li>
      );
    });
  };
  return (
    <main className='main'>
      <section>
        <div className='solution'>
          <h2 className='title'>Solución:</h2>
          <ul className='letters'>{renderSolutionLetters()}</ul>
        </div>
        <div className='error'>
          <h2 className='title'>Letras falladas:</h2>
          <ul className='letters'>{renderErrorLetters()}</ul>
        </div>
        <Form
          lastLetter={lastLetter}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
          handleChange={handleChange}
        />
      </section>
      <Dummy getNumberOfErrors={getNumberOfErrors} />
    </main>
  );
}

export default Main;
