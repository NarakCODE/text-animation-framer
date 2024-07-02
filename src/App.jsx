import React from "react";
// Run `npm install` before following my video tutorial
const App = () => {
  return (
    <div className="w-full h-screen grid place-content-center gap-4">
      <AnimatedLink href="#">Instagram</AnimatedLink>
    </div>
  );
};

const AnimatedLink = ({ href, children }) => {
  return (
    <a
      className="relative overflow-hidden border block whitespace-nowrap text-8xl font-semibold uppercase"
      href={href}
    >
      <div>{children}</div>
    </a>
  );
};

export default App;
