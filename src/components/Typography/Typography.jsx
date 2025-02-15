import "./Typography.scss";

export const Wordmark = ({ children }) => (
  <h1 className="wordmark">{children}</h1>
);
export const Title = ({ children , italic}) => (
  <span className={`title ${italic ? "italic":""}`}>{children}</span>
);
export const Heading = ({ children }) => (
  <h3 className="heading">{children}</h3>
);
export const BodyCopy = ({ children, light }) => (
  <span className={`body-copy ${light ? "light" : ""}`}>{children}</span>
);
export const SmallBodyCopy = ({ children }) => (
  <span className="small-body-copy"> {children}</span>
);
export const Label = ({ children }) => (
  <span className="label">{children}</span>
);
