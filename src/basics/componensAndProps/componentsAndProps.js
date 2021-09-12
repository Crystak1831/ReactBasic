import React from "react";

class ComponentsAndProps extends React.Component {
  render() {
    // display the dataList in Page
    const dataList = [
      { name: "ming", age: "26", id: "1" },
      { name: "Alice", age: "20", id: "2" },
      { name: "Peter", age: "26", id: "3" },
      { name: "Emma", age: "30", id: "4" }
    ];
    return (
      <div>
        {/* class components vs functional components */}
        {/* <ClassComponentDemo name = "Amy" gender="F"/>
        <FunctionComponentDemo name = "Tom" gender ="M"/> */}

        {/* Extracting Components: split componects into smaller components */}
        {/* before extracting components */}

        {/* 写法很难看： */}
        {/* <ul> */}
        {/* {dataList.map((item) =>{
              return (
                <li key = {item.id}>
                  {item.name}
                  {item.age}
                  {item.id}
                </li>
              )
            })} */}
        {/* </ul> */}
        <List list={dataList} />
      </div>
    );
  }
}

// class ClassComponentDemo extends React.Component{
//   render(){//when props changed, it will trigger the component updating state
//     // destructuring
//     const {name,gender} = this.props
//     return(
//       <div>
//         {/* use this.props in class component pass the data from parent to child */}
//         <p>{name}</p>
//         <p>{gender}</p>
//       </div>
//     )
//   }
// }

// function FunctionComponentDemo(props){
//   // 没有this，函数里要传入props
//   const{name,gender} = props
//   return(
//     <div>
//      <p>{name}</p>
//      <p>{gender}</p>
//     </div>
//   )
// }

class List extends React.Component {
  render() {
    // get the data from parent components
    const { list } = this.props;
    return (
      <div>
        <ul>
          {list.map((item) => {
            return (
              // <li key = {item.id}>
              //   {item.name}
              //   {item.age}
              // </li>
              // <li>还可以拆分
              <ItemList item={item} key={item.id} />
            );
          })}
        </ul>
      </div>
    );
  }
}

class ItemList extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <li>
        {item.name}
        {item.age}
      </li>
    );
  }
}

export default ComponentsAndProps;
