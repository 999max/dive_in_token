## Quickstart for testing contracts

1. Clone repository to your local machine

2. Install requirements:
`$ npm install`

3. Install Truffle to your machine:
`$ npm install -g truffle`

~~4. Run tests:~~
~~`$ truffle test`~~
*command was depricated after adding peckage.json with:*
``` 
"scripts": {
    "test": "truffle test",
    ...}
```

4. Run tests:
`$ npm test`
This command will compile all contracts located in "contracts" folder and run all tests from "test" folder.
