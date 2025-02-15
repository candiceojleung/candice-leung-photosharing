import "./Typography.scss";

export const Wordmark = ({ children }) => (
  <h1 className="wordmark">{children}</h1>
);
export const Title = ({ children, italic }) => (
  <h2 className= "title"> {italic ? <span className="italic">{children}</span> : children}
</h2>
);
export const Heading = ({ children }) => (
  <h3 className="heading">{children}</h3>
);
export const BodyCopy = ({ children, light, italic }) => (
  <span
    className={`body-copy ${italic ? "italic" : ""} ${light ? "light" : ""}`}
  >
    {children}</span>
);
export const SmallBodyCopy = ({ children }) => (
  <span className="small-body-copy"> {children}</span>
);
export const Label = ({ children }) => (
  <span className="label">{children}</span>
);
