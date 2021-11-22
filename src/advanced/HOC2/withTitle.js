import React, { useState } from "react";

const withTitle = (WrapperComponent) => {
  return function () {
    const [content, setContent] = useState("hello");

    const showContent = () => {
      setContent(content);
      console.log(content);
    };

    return (
      <WrapperComponent showContent={showContent}>{content}</WrapperComponent>
    );
  };
};

export { withTitle };
