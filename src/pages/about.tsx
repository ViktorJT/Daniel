import type { NextPage } from "next";

import styled from "styled-components";

import ContactItem from "../components/ContactItem";

import { getAbout } from "../queries/getAbout";

import {
  StyledAbout,
  StyledContacts,
  StyledHeading,
} from "../styles/aboutpage";
import { StyledPage } from "../styles/homepage";

const About: NextPage<any> = ({ about }) => {
  return (
    <StyledPage>
      <StyledAbout>
        <StyledHeading>
          <h1>{about.heading}</h1>
          {(about.subHeading || about.paragraph) && (
            <div>
              {about.subHeading && <h2>{about.subHeading}</h2>}
              {about.paragraph && <p>{about.paragraph}</p>}
            </div>
          )}
        </StyledHeading>
        <StyledContacts>
          {about.contacts.map(({ id, ...contact }: any, i: number) => (
            <li key={`p-${i}-${id}`}>
              <ContactItem heading {...contact} />
            </li>
          ))}
        </StyledContacts>
      </StyledAbout>
    </StyledPage>
  );
};

export async function getStaticProps() {
  const about = await getAbout();

  return {
    props: about,
  };
}

export default About;
