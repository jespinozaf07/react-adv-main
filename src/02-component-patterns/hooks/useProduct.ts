import { useEffect, useRef, useState } from 'react';
import { useProductArgs } from '../interfaces/interfaces';

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isContolled = useRef(!!onChange);

  const increseBy = (value: number) => {
    if (isContolled.current) {
      return onChange!({count: value, product})
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increseBy,
  };
};
