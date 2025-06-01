import { useContext } from 'react';
import { StyledSelect } from './filters.styled';
import { ModeContext } from '../../contexts/ModesContext';

const Filters = ({ setRegionFilter }) => {
  const { lightMode } = useContext(ModeContext);
  return (
    <StyledSelect
      $lightMode={lightMode}
      onChange={event => defineRegionFilter(event, setRegionFilter)}
    >
      <option>Search for regions</option>
      <option>Africa</option>
      <option>Americas</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </StyledSelect>
  );
};

const defineRegionFilter = (event, setRegionFilter) => {
  const region = event.target.value;
  setRegionFilter(region);
};

export default Filters;
