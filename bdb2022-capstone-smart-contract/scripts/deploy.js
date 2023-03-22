const { ethers } = require('hardhat')
require('dotenv').config({ path: '.env' })
const { METADATA_URL } = require('../constants')

async function main () {
  const metadataURL = METADATA_URL
  const todoRewardContract = await ethers.getContractFactory('TodoListReward')

  const deployedTodoRewardContract = await todoRewardContract.deploy(
    metadataURL
  )

  await deployedTodoRewardContract.deployed()

  console.log(
    'Todo List Reward Contract Address:',
    deployedTodoRewardContract.address
  )
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
