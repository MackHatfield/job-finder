import styled from 'styled-components';
import { useState } from 'react';
import _ from 'lodash';

const Search = props => {
  const [searchText, setSearchText] = useState(null);

  const onClickSearch = event => {
    event.preventDefault();
    const { searchFilters, setSearchFilters } = props;
    const filterCopy = _.clone(searchFilters);
    filterCopy.roleFilter = searchText;

    setSearchFilters(filterCopy);
  }

  const onChangeText = event => {
    setSearchText(event.target.value);
  }

  return (
    <Container>
      <Form>
        <Input type='text' onChange={onChangeText} />
        <Button type='submit' onClick={onClickSearch}>Search</Button>
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
