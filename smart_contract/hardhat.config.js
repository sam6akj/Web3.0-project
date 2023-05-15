// https://eth-rinkeby.alchemyapi.io/v2/IB1mM1IPcwl3sGfybzFISbUE6V572SoZ


require('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks :{
    rinkeby :{
      url : 'https://eth-rinkeby.alchemyapi.io/v2/IB1mM1IPcwl3sGfybzFISbUE6V572SoZ',
      accounts :['343c3be565f488d31812c0d41bf22118105d6e6836fc7714e89b834f00703dea']
    }
  }
}
