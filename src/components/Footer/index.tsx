import ContactItem from "../ContactItem";
import { StyledFooter } from "./styles";

const Footer = ({ contacts }: { contacts: any }) => {
  return (
    <StyledFooter>
      <div>
        <p>Daniel Arfwedson</p>
        <ul>
          {contacts.map(({id, ...contact}: any, i: number) => (
            <li key={`f-${i}-${id}`}>
              <ContactItem {...contact} />
            </li>
          ))}
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
