const HomeFlagText = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <div>
        <span>Population</span>
        <span>{country.population}</span>
      </div>
      <div>
        <span>Region</span>
        <span>{country.region}</span>
      </div>
      <div>
        <span>Capital</span>
        <span>{country.capital}</span>
      </div>
    </>
  );
};

export default HomeFlagText;
