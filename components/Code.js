const Code = ({ children }) => (
  <pre>
    <code>{children}</code>
    <style jsx>{`
      code {
        display: block;
        color: #c7254e;
        font-family: 'Source Code Pro', monospace;
        font-size: 0.8rem;
        line-height: 1.42857143;
        background-color: #f9f2f4;
        padding: 9.5px;
        margin: 0 0 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        overflow-x: scroll;
      }
    `}</style>
  </pre>
);

export default Code;
