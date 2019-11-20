import React, { useContext } from "react";

// const { Provider, Consumer } = React.createContext();
const ctx = React.createContext();

function Comp1(props) {
  const val = useContext(ctx);
  console.log(val);
  return <p>{val.name}</p>;
  //   return (
  //     <>
  //       <Consumer>{val => <p>{val}</p>}</Consumer>
  //     </>
  //   );
}

export default function Comp() {
  return (
    <div>
      {/* <Provider value="test">
        <Comp1 />
      </Provider> */}
      <ctx.Provider value={{ name: "xiexie", age: 27 }}>
        <Comp1 />
      </ctx.Provider>
    </div>
  );
}
