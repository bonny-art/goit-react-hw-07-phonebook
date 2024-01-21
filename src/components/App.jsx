import React from 'react';

import { PhoneInputForm, Filter, Contacts } from 'components';
import { Section, Header, Title } from './Section/Section.styled';

export const App = () => {
  return (
    <Section>
      <Header>Phonebook</Header>
      <PhoneInputForm />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </Section>
  );
};
