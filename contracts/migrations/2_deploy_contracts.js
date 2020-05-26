const TodoList = artifacts.require('TodoList')
const Counter = artifacts.require('Counter')

module.exports = function(deployer) {
  deployer.then(async () => {
    await deployer.deploy(TodoList, 'Jon Snow').then(() => {
      console.log('TodoList contract address: ', TodoList.address)
    })

    await deployer.deploy(Counter, 0).then(() => {
      console.log('Counter contract address: ', Counter.address)
    })
  })
}
