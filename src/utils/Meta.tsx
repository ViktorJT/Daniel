const Meta = ({ data }: { data: string[] }) => (
  <ul>
    {data.map((d: string, i: number) => {
      const moreThanOneAndNotLast = data.length > 1 && i !== data.length - 1;

      return (
        <li key={`${i}-${d.toLowerCase().replaceAll(" ", "-")}`}>
          <p>
            {d}
            {moreThanOneAndNotLast ? "," : ""}
          </p>
        </li>
      );
    })}
  </ul>
);

export { Meta as default, Meta };
