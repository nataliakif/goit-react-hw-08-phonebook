import Section from '../components/Section/Section';
import InputForm from '../components/InputForm/InputForm';
import Filter from '../components/Filter/Filter';
import Contacts from '../components/Contacts/Contacts';

const ContactsView = () => {
  return (
    <>
      <Section title="PhoneBook">
        <InputForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};

export default ContactsView;
