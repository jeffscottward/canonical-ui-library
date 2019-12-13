```jsx
const sampleCode = `pragma solidity ^0.4.15;

// Proof of Existence contract, version 1
contract ProofOfExistence1 {

  // state
  bytes32 public proof;

  // calculate and store the proof for a document
  // *transactional function*
  function notarize(string document) {
    proof = proofFor(document);
  }

  // helper function to get a document's sha256
  // *read-only function*
  function proofFor(string document) constant returns (bytes32) {
    return sha256(document);
  }
}`;

<CodeInputArea
  code={sampleCode}
  handleChange={(value, data, editor) => {
    console.log(value);
    console.log(data);
    console.log(editor);
  }}
/>;
```
