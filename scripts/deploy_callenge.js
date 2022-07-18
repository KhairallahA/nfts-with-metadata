// scripts/deploy_callenge.js
const hre = require("hardhat");


const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("ChainBattlesCallenge");
  const nftContract = await nftContractFactory.deploy();
  
  await nftContract.deployed();

  console.log("Contract deployed to:", nftContract.address);
}



// We recommend this pattern to be able to use async/await everywhere
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });