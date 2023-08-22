export const Cards = ({ characters, setIdSelected, idSelected }) => {
  {
    const isSelected = idSelected === characters.id;
    return (
      <div
        className={`container ${isSelected ? "selected" : ""} pointer`}
        role="button"
        onClick={() => setIdSelected(characters.id)}
      >
        <div className="card ">
          <p>Name: {characters?.name}</p>
          <p>Status: {characters?.status}</p>
          <p>Species: {characters?.species}</p>
          <img src={characters?.image} />
        </div>
      </div>
    );
  }
};
