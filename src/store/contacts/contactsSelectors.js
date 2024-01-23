export const getFilteredContacts = state => {
  const { items } = state.contacts.contacts;
  const { filter } = state.filter;

  return items.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
};
