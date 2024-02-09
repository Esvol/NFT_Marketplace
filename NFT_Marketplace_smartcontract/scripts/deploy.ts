import { ethers } from "hardhat";

async function main() {

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy();
  await lock.waitForDeployment();

  console.log(`Deployed`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
