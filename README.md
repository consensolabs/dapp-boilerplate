# DApp Boilerplate
Dapp Boilerplate is an boilerplate for building full-stack DApps using Solidity and React. It's built with the latest versions of React, Redux, Parcel, Truffle and has a superior organization and directory structure. It comes with a solid CSS, React and contract architecture that helps you correctly skin your DApp.

## Getting started

1. Clone the repo.
    ```javascript
    git clone https://github.com/consensolabs/dapp-boilerplate.git
    ```
2. Navigate to the project
    ```javascript
    cd dapp-boilerplate
    ```
    
3. Install the node dependencies.
    ```javascript
    npm install || yarn install
    ```

4. Start your local blockchain (I use Ganache-CLI) on a different terminal.
    ```javascript
    ganache-cli --networkId 10 --seed seedphrase
    ```

5. Add modify contracts in the /contracts directory, then compile, test and migrate it.
    ```javascript
    cd contracts
    truffle migrate
    ```

6. Start the dapp, then point your browser to localhost:3000.  If you want to use yarn instead of npm, just nuke the node_modules directory and run the command ```yarn install```.
    ```javascript
    npm start || yarn start
    ```
    ```

7. Build the Dapp for production, use the build command. A production build of the entire Dapp will be placed in the /build folder.
    ```javascript
    npm run build || yarn build
    ```


