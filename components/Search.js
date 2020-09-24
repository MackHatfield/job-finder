import styled from 'styled-components';
import { useState } from 'react';
import _ from 'lodash';

const Search = props => {
  const [searchText, setSearchText] = useState(null);
  const [city, setCity] = useState(null);

  const { jobs } = props;

  const cities = [];

  jobs.forEach(job => {
    if (job.cities.length > 0) {
      job.cities.forEach(city => cities.push(city.name));
    }
  });

  const onClickSearch = event => {
    event.preventDefault();
    const { searchFilters, setSearchFilters } = props;
    const filterCopy = _.clone(searchFilters);
    filterCopy.roleFilter = searchText ? searchText : '';
    filterCopy.city = city ? city : '';

    setSearchFilters(filterCopy);
  }

  const onChangeText = event => {
    setSearchText(event.target.value);
  }

  const onChangeCity = event => {
    setCity(event.target.value);
  }

  return (
    <Container>
      <Form>
        <Input type='text' onChange={onChangeText} />
        <Button type='submit' onClick={onClickSearch}>Search</Button>
        <Select name='cities' onChange={onChangeCity}>
          <option value=''>--Select City--</option>
          {_.uniq(cities).map((city, index) => <option key={index} value={city}>{city}</option>)}
        </Select>
      </Form> 
    </Container>
  );
}

export default Search;

const Container = styled.div`
  max-width: 800px;
  height: 200px;
  border: 1px solid purple;
`;

const Input = styled.input``;

const Button = styled.button``;

const Form = styled.form``;

const Select = styled.select``;
