export const FormConverter = () => {
    const handleSubmit = (e) => { 
        e.preventDefault();
        const { currency } = e.currentTarget.elements;
        const [amount, from, to] = currency.value.split(' ')
        console.log(amount, from, to);
        
    }
  return (
    <div>
          <form onSubmit={ handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="15 USD in UAH"
            name="currency"
            required
          />
        </label>
        <button type="submit">Convert</button>
      </form>
    </div>
  );
};
