import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function Search(props) {
  return (
    <Form>
      <FormGroup>
        <Label for='exampleEmail'></Label>
        <Input
          style={{ textAlign: 'center' }}
          onChange={(e) => props.setFilterText(e.target.value)}
          type='text'
          placeholder='Filter by company or position  '
        />
      </FormGroup>
    </Form>
  );
}

export default Search;
