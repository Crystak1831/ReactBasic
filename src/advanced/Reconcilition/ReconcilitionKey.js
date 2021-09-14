/**
 * I think use key we can help us to find items.
 * When children have keys, React use the key to match children
 * in the original tree with new children in sub tree.
 * Use the key can help use to identify each item quickly,
 * (if we use the index instead of generating the unique key,
 * it's ok, but the problem is when the item is reorder,
 * it cause the issue )
 */

import { useState } from "react";

export default function ReconcilitionKey() {
  const [arr, setArr] = useState([1, 2, 3]);

  return (
    <div>
      {arr.map((item) => (
        <p key={Math.random()}>{item}</p>
      ))}
    </div>
  );
}
