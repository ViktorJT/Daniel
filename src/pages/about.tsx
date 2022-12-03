// TODO: remove orbit controls from CanvasLayout
// TODO: remove GUIs (lava & perf)
import type { NextPage } from "next";
import styled from "styled-components";
import { HtmlContactItem } from "../components/ContactItem";
import { HtmlFooter } from "../components/Footer";
import { getAbout } from "../queries/getAbout";

const StyledPage = styled.div`
  margin-top: 6vh;
  
  flex: 1 1 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
    
  section {
    height: 100%;
    max-width: var(--containerWidth);
    padding: 0 40px;
    
    display: inherit;
    flex-flow: row wrap;
    gap: 40px;
    
    justify-content: space-between;
    align-items: center;
    
    h1 {
      flex: 0 1 560px;
    }

    div {
      flex: 1 1 400px;
      padding-top: 48px;
      display: inherit;
      flex-flow: inherit;

      gap: 40px;

      h2 {
        flex: 1 1 40%;
        font-size: 1rem;
      }

      ul {
        flex: 1 1 40%;

        li {
          text-align: right;
        }

        li + li {
          margin-top: 40px;
        }

        li p:last-of-type {
          font-weight: bold;
        }
      }
    }
  }
`;

const Home: NextPage<any> = ({ contacts, about }) => {
  return (
    <StyledPage>
      <section>
        <h1>
          {about.heading}
        </h1>
        <div>
          <h2>
            {about.subHeading}
          </h2>
          <ul>
            {about.contacts.map(({ id, ...contact }: any, i: number) => (
              <li key={`p-${i}-${id}`}>
                <HtmlContactItem heading {...contact} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <HtmlFooter contacts={contacts} />
    </StyledPage>
  );
};

export async function getStaticProps() {
  const data = await getAbout();

  return {
    props: {
      ...data,
    },
  };
}

export default Home;
