import { Contact } from "../../../types";
import { HtmlContactItem } from "../../ContactItem";
import { StyledFooter } from "./styles";

const Footer = ({ contacts }: { contacts: Contact[] }) => {
  return (
    <StyledFooter>
      <div>
        <p>Daniel Arfwedson</p>
        <ul>
          {contacts.map(({id, ...contact}, i: number) => (
            <li key={`f-${i}-${id}`}>
              <HtmlContactItem {...contact} />
            </li>
          ))}
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
