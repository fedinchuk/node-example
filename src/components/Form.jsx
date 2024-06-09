function Form(props) {
  const { name, email, handleChange } = props;

  return (
    <form>
      <label htmlFor="name">Імʼя: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="email">Імейл: </label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <p>
        Привіт, {name || "незнайомець(-ка)"}! Ваш імейл {email || "невідомий"}.
      </p>
    </form>
  );
}

export { Form };
