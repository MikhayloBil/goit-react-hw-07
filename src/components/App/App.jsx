import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectIsError } from "../../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {loading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
      <SearchBox />
      <ContactList />
    </div>
  );
}
