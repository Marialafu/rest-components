import { useEffect, useState } from 'react';
import Filters from '../../components/filters/Filters';
import FlagContainer from '../../components/flag-container/FlagContainer';
import SearcherBar from '../../components/searcher-bar/SearcherBar';
import { StyledMain } from './home.styled';

const Home = () => {
  const [countries, setCountries] = useState();
  console.log(countries);

  useEffect(() => {
    getCounty(setCountries);
  }, []);

  return (
    <StyledMain>
      <SearcherBar />
      <Filters countries={countries} />
      <FlagContainer countries={countries} />
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

export default Home;
