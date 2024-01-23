import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilterAction, getFilter } from 'store';

import { FilterSection, FormField, FormInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(changeFilterAction(e.target.value));
  };

  return (
    <FilterSection>
      <FormField>
        Search:
        <FormInput
          type="text"
          name="name"
          placeholder="Start printing name here"
          value={filter}
          onChange={changeFilter}
        />
      </FormField>
    </FilterSection>
  );
};
