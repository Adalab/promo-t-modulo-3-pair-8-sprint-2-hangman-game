function Render({ renderErrorLetters, renderSolutionLetters }) {
  return (
    <>
      <div className='solution'>
        <h2 className='title'>Solución:</h2>
        <ul className='letters'>{renderSolutionLetters()}</ul>
      </div>
      <div className='error'>
        <h2 className='title'>Letras falladas:</h2>
        <ul className='letters'>{renderErrorLetters()}</ul>
      </div>
    </>
  );
}

export default Render;
