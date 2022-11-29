import { Contact } from "../../../types";
import { ContactItem } from "../../ContactItem/html";
import { StyledFooter } from "./styles";

const Footer = ({ contacts }: { contacts: Contact[] }) => {
  return (
    <StyledFooter>
      <div>
        <p>Daniel Arfwedson</p>
        <ul>
          {contacts.map((contact) => (
            <li>
              <ContactItem {...contact} />
            </li>
          ))}
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
