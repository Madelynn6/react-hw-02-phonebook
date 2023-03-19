const ContactListElement = ({ filtered, handleDelete }) => {
  return (
    <>
      {filtered.map(el => (
        <li key={el.id}>
          {`${el.name}: ${el.number}`}{' '}
          <button name={el.name} onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default ContactListElement;
