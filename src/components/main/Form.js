function Form({ handleSubmit, handleKeyDown, handleChange, lastLetter }) {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='title' htmlFor='last-letter'>
        Escribe una letra:
      </label>
      <input
        autoFocus
        autoComplete='off'
        className='form__input'
        maxLength='1'
        type='text'
        name='last-letter'
        id='last-letter'
        value={lastLetter}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </form>
  );
}
export default Form;
