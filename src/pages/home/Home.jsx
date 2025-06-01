import { useContext, useEffect, useState } from 'react';
import Filters from '../../components/filters/Filters';
import FlagContainer from '../../components/flag-container/FlagContainer';
import SearcherBar from '../../components/searcher-bar/SearcherBar';
import { StyledMain } from './home.styled';
import { ModeContext } from '../../contexts/ModesContext';

const Home = () => {
  const [countries, setCountries] = useState();
  const { lightMode } = useContext(ModeContext);

  const [searcherBar, setSearcherBar] = useState('');
  const [regionFilter, setRegionFilter] = useState('Search for regions');

  const searcherFilteredCountries = filterBySearcherBar(countries, searcherBar);
  const filteredCountries = filteredByRegion(
    regionFilter,
    searcherFilteredCountries
  );

  useEffect(() => {
    getCounty(setCountries);
  }, []);

  return (
    <StyledMain $lightMode={lightMode}>
      <SearcherBar setSearcherBar={setSearcherBar} />
      <Filters setRegionFilter={setRegionFilter} />
      <FlagContainer countries={filteredCountries} />
    </StyledMain>
  );
};

const getCounty = async setCountry => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    setCountry(countries);
  } catch (error) {
    console.log(error);
  }
};

const filterBySearcherBar = (countries, searcherBar) => {
  if (!countries) return;
  if (!searcherBar) {
    return countries;
  }

  return countries.filter(country => {
    const countryName = country.name.common.toLowerCase();
    return countryName.includes(searcherBar.toLowerCase());
  });
};

const filteredByRegion = (regionFilter, searcherFilteredCountries) => {
  if (!searcherFilteredCountries) return;
  if (regionFilter === 'Search for regions') {
    return searcherFilteredCountries;
  }
  return searcherFilteredCountries.filter(
    country => country.region === regionFilter
  );
};

export default Home;
