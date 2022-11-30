import { useEffect, useState } from "react";

const useCSSVariableColors = (state = 'dark') => {
  const [primary, setPrimary] = useState('#FFF6E5');
  const [secondary, setSecondary] = useState('#131313');

  useEffect(() => {
    const temp = primary;
    setPrimary(secondary);
    setSecondary(temp);
  }, [])

  return [primary, secondary]
}

export default useCSSVariableColors;
