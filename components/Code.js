const Code = ({ children }) => (
  <pre>
    <code>
      { children }
    </code>
    <style jsx>{`
      code {
        display: block;
        color: #C7254E;
        font-family: 'Source Code Pro', monospace;
        font-size: 0.8rem;
        line-height: 1.42857143;
        background-color: #F9F2F4;
        padding: 9.5px;
        margin: 0 0 10px;
        border: 1px solid #CCC;
        border-radius: 4px;
      }
    `}</style>
  </pre>
)

export default Code
