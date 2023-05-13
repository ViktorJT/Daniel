import type { NextPage } from "next";

import styled from "styled-components";

import ContactItem from "../components/ContactItem";

import { getAbout } from "../queries/getAbout";

const StyledPage = styled.div`
  margin-top: 6vh;
  
  flex: 1 1 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
    
  section {
    height: 100%;
    padding: 0 5vw;
    margin-top: 0;
    
    display: inherit;
    flex-flow: row wrap;
    gap: 80px;
    
    justify-content: space-between;
    align-items: center;
    
    h1 {
      flex: 0 1 640px;
      font-size: 2.5rem;
      line-height: 1;
    }

    &>div {
      flex: 1 0 520px;
      display: inherit;
      flex-flow: row nowrap;

      gap: 40px;

      h2 {
        flex: 1 1 40%;
        font-size: 1rem;
      }

      div {

        max-width: 400px;

        h2 {
          margin-bottom: 8px;
        }


        p {
          text-transform: none;
        }
      }


      ul {
        flex: 1 1 40%;
        text-align: right;


        li + li {
          margin-top: 40px;
        }

        li p {
          font-size: 0.9rem;
        }
      }
    }

    @media (max-width: 970px) {
      gap: 24px;
      padding: 0 2vw;

      &>div {
        flex-flow: column nowrap;
        flex: 1 1 100%;
      }

      h1 {
        margin: 64px 0;
      }

      div ul li {
        text-align: left;
      }


      div ul li + li {
        margin-top: 16px;
      }
    }
`;

const About: NextPage<any> = ({ about }) => {
  return (
    <StyledPage>
      <section>
        <h1>
          {about.heading}
        </h1>
        <div>
          <div>
            <h2>
              {about.subHeading}
            </h2>
            <p>
              {about.paragraph}
            </p>
          </div>
          <ul>
            {about.contacts.map(({ id, ...contact }: any, i: number) => (
              <li key={`p-${i}-${id}`}>
                <ContactItem heading {...contact} />
              </li>
            ))}
          </ul>
        </div>
      </section>
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
