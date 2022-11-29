// TODO: remove orbit controls from CanvasLayout
// TODO: remove GUIs (lava & perf)
import type { NextPage } from "next";
import styled from "styled-components";
import Footer from "../components/Footer/html";

interface ContactInfo {
  label: string;
  contact: string;
}

interface AboutProps {
  title: string;
  subtitle: string;
  contactInfo: ContactInfo[];
}

const StyledPage = styled.div`
  margin-top: 6vh;
  
  flex: 1 1 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
    
  section {
    max-width: var(--containerWidth);
    padding: 0 40px;
    
    display: inherit;
    flex-flow: row wrap;
    gap: 40px;
    
    justify-content: space-between;
    
    h2 {
      flex: 0 1 560px;
    }

    div {
      flex: 1 1 400px;
      padding-top: 10px;
      display: inherit;
      flex-flow: inherit;

      gap: 40px;

      h3 {
        flex: 1 1 40%;
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

const Home: NextPage<AboutProps> = ({ title, subtitle, contactInfo }) => {
  return (
    <StyledPage>
      <section>
        <h2>
          {title}
        </h2>
        <div>
          <h3>
            {subtitle}
          </h3>
          <ul>
            {contactInfo.map(({ label, contact }, i) => (
              <li key={i}>
                <p>{label}</p>
                <p>{contact}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </StyledPage>
  );
};

export async function getStaticProps() {
  const data: any = {
    title: "Ipsum aute quis qui cupidatat veniam exercitation",
    subtitle: "Esse sit proident tempor exercitation tempor id cupidatat",
    contactInfo: [
      {
        label: "Email",
        contact: "Hello@Example.com",
      },
      {
        label: "Phone",
        contact: "+31 01 23 34 56 67",
      },
    ],
  };

  return {
    props: {
      ...data,
    },
  };
}

export default Home;
