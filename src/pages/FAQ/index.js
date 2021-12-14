import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FAQ = () => {
  return (
    <Div>
      <H1 className="second text-center">FAQ</H1>

      <H3 size="25">About me</H3>  
    
      <p className="primary">
        <b>Q:</b> What is Citizen, technically? ☺️ :thinking:
      </p>
      <p className="second">
        <b>A:</b> Citizen is a digital artwork project stored on the Ethereum
        blockchain. They are unique cryptostory cards that you can buy, sell or
        trade with other people.
      </p>
      <p className="primary">
        <b>Q:</b>What kind of cryptoart is Citizen? 📖
      </p>
      <p className="second">
        <b>A:</b>This is a project based on a dystopian noir cryptostory. An
        innovative way to tell a sci-fiction story though collectible tokens. 
      </p>
      <p className="primary">
        <b>Q:</b>
        What is different with Citizens compared to other blockchain projects? 🦄
      </p>
      <p className="second">
        <b>A:</b>
        So far, there is no project that has merged the art of storytelling,
        partially algorithm-generated unique illustration, and blockchain
        technology.
      </p>
      <p className="primary">
        <b>
          Q: How do I get my own character?<br></br>
        </b>
          <p className="text-center mg_2">🐷 🐶 😸 🐴 🐮 🐔</p>
      </p>
      <p className="second">
        <b>A:</b>
        Check them out on our website and buy them in either opensea or rarible.
        We hope to implement other ways to acquire them.
      </p>
      <p className="primary">
        <b>Q:  </b>
        Ok, so I have one. What can I do with it? 🤷‍♂️
      </p>
      <p className="second">
        <b>A:</b>
        When you acquire your unique token, you are acquiring everything,
        including the image rights. All Citizens owners can use their unique
        citizen's image as they wish. The only thing you are not allowed to do
        is use your character for a hateful purpose.
      </p>
      <p className="primary">
        <b>Q:</b>
        How much do citizens cost? 💸 
      </p>
      <p className="second">
        <b>A:  </b>
        This depends on the type of <Link to="/universe"></Link> (rarity) you would like to buy.
      </p>
      <p className="primary">
        <b>Q:</b>
        What are the <Link to="/universe"></Link> rarity ranks?
      </p>
      <p className="second">
        <b>A:</b>
        Common; Uncommon; Rare; Epic; Legendary. Check out #🌈social-rarity-rank
        to know more
      </p>
      <p className="primary">
        <b>Q:</b>
        How many citizens will there be? 🤩
      </p>
      <p className="second">
        <b>A:</b>
        There might be more series of citizens, but this one is limited to 2000
        characters.
      </p>
      <H3>Opensea</H3>
      <p className="primary">
        <b>Q:</b>
        What is OpenSea?
      </p>
      <p className="second">
        <b>A:</b>
        OpenSea is a marketplace for digital goods, including collectibles, gaming items, digital art, and other digital assets that are backed by a blockchain like Ethereum. On OpenSea, you can buy, sell, and trade any of these items with anyone in the world. OpenSea is currently the largest general marketplace for user-owned digital goods, with the broadest set of categories (200 and growing), the most items (over 4 million), and the best prices for new categories of items.
      </p>
      <p className="second">

        OpenSea is also a decentralized marketplace. Trading on on OpenSea happens through a
        <a href="https://en.wikipedia.org/wiki/Smart_contract"> smart contract</a>
        , meaning that no central authority ever holds custody of your items. Instead, users store items in their wallet of choice - whether that's a mobile wallet like
        <a href="https://wallet.coinbase.com/"> Coinbase Wallet </a>
        or 
        <a href="https://www.opera.com/mobile/touch"> Opera Touch </a>
        or an in-browser chrome extension like 
        <a href="https://metamask.io/download.html"> MetaMask</a>
        . To better understand the inner workings of the OpenSea marketplace, you can check out the open source code for the OpenSea smart contracts 
        <a href="https://etherscan.io/address/0x7be8076f4ea4a4ad08075c2508e481d6c946d12b"> here</a>
        .
      </p>
      <p className="primary">
        <b>Q:</b>
        What exactly are these items I see on OpenSea?
      </p>
      <p className="second">
        <b>A:</b>
        All of the items you see on OpenSea are blockchain-based digital items. Some people like to call them non-fungible tokens, or NFT's. Excitingly, they can be viewed anywhere, exchanged openly, and truly owned in a way that was never before possible in the digital world. You can read a little more about the idea of true digital ownership in 
        <a href="https://opensea.io/blog/announcements/opensea-raises-2-million/"> this blog post</a>
        .
      </p>
      <p className="primary">
        <b>Q:</b>
        How do I use OpenSea? I'd like the full tour!
      </p>
      <p className="second">
        <b>A:</b>
        We've got an article that should answer all of your questions. Check it out
        <a href="https://opensea.io/blog/guides/welcome-to-opensea/"> on this blog</a>
        .
      </p>
      <p className="primary">
        <b>Q:</b>
        What do I need to use OpenSea?
      </p>
      <p className="second">
        <b>A:</b>
        If you're on a desktop computer, you'll need to install a wallet extension for your browser, such as
        <a href="https://metamask.io/download.html"> MetaMask </a>
        or 
        <a href="https://www.meetdapper.com/?utm_source=opensea"> Dapper</a>
        . You'll also need to fund your account with Ether in order to purchase an item on OpenSea.
      <br></br>
        On your mobile device, you'll need to use an Ethereum-compatible mobile browser like
        <a href="https://wallet.coinbase.com/"> Coinbase Wallet </a>
        , or
        <a href="https://www.opera.com/mobile/touch"> Opera Touch </a>
        .
      <br></br>
        To learn a little more, check out 
        <a href="https://opensea.io/blog/guides/welcome-to-opensea/"> our blog post on getting started</a>
        .
      </p>
      <p className="primary">
        <b>Q:</b>
        Getting MetaMask
      </p>
      <p className="second">
        <b>A:</b>
        You can install MetaMask in your browser from
        <a href="https://metamask.io/"> the MetaMask website</a>
        . A great video can be found on MetaMask
        <a href="https://www.youtube.com/watch?time_continue=4&v=6Gf_kRE4MJU"> here</a>
        .
      </p>
      <p className="primary">
        <b>Q:</b>
        I'm trying to buy my first item. Where do I find the address that I should send the ETH to?
      </p>
      <p className="second">
        <b>A:</b>
        You don't need to specify an address. When you click "Buy Now", OpenSea and your wallet will work together to send the ETH from your wallet to the seller. You just have to click "Buy Now" and then approve the transaction that your wallet pops up. OpenSea sends the appropriate info to your wallet, then when you approve the transaction, your wallet broadcasts a transaction to the Ethereum network that sends the ETH to First Edition and the item to you (atomically! either the whole deal happens or none of it does). When the transaction is mined (which usually happens after 30-70 seconds and requires no addiitonal action from you), the item becomes yours and the ETH becomes the seller's.
      <br></br>
        You just need to click "Buy Now", then approve the transaction using your wallet's interface.</p>
      <p className="primary">
        <b>Q:</b>
        How do I make an offer for an item I want to buy?
      </p>
      <p className="second">
        <b>A:</b>
        See an item you'd like to buy? Simply click the "Make an Offer", which will allow you to specify the price you're willing to buy the item. By bidding like this, you will automatically pay for this item if the owner accepts your offer, unless you cancel it.
        <a href="https://opensea.io/blog/announcements/bid-on-your-favorite-crypto-collectibles-16f07908b214/"> Read more about how this is useful on this blog</a>
        .
      <br></br>
        If you're bidding for the first time, there will be a few preliminary steps before you can submit your offer. While these steps may be a little cumbersome, keep in mind these will only happen once! You will need to:
      <br></br>
      1. Wrap your ETH with W-ETH (
        <a href="https://weth.io/">wrapped Ether</a>
        ) using the W-ETH station on the right hand side in the bid flow.
      2. Approve the exchange to access your W-ETH.
      <br></br>
        Both of these will require submitting transactions to the blockchain, but after that submitting an offer does not require gas! Each time you want to bid, you simply sign a message which specifies the price you'd like to purchase the item at.
      </p>
      <p className="primary">
        <b>Q:</b>
        What's the difference between ETH and WETH?
      </p>
      <p className="second">
        <b>A:</b>
        WETH is
        <a href="https://weth.io/"> wrapped Ether</a>
        . It's worth exactly the same as ETH and you can convert between the two currencies any time using the Ethereum Balance widget on the right side of
        <a href="/account?tab=bids"> your account page's Offers tab</a>
        . WETH is necessary for some actions on OpenSea because, unlike ETH, it can be instantly transferred using ERC20's "transferFrom" function. This allows for bids to be accepted by a seller without escrow and without any action from the bidder.
      </p>
      <p className="primary">
        <b>Q:</b>
        How many offers can I make at a time?
      </p>
      <p className="second">
        <b>A:</b>
        You can pretty much make as many offers as you want!
    <br></br>
        For example, say you have 1 ETH in your account. If you wrap that ETH (turning it into 1 WETH), you could bid 1 ETH on CryptoKitty #123, 1 ETH on CryptoFighter #345, 1 ETH on a Mythereum card. However, the moment that any of your bids gets fulfilled, the other bids for 1 ETH on the other items would no longer be valid (since you no longer have enough WETH to fulfill them). When your WETH balance increases enough to cover the offer again, the bid will become valid once again.
      </p>
      <p className="primary">
        <b>Q:</b>
        I'm making a small bid. Why do I see such a large amount of WETH in my wallet popup?
      </p>
      <p className="second">
        <b>A:</b>
        To make offers or place bids, you need to approve WETH (or a whichever ERC-20 token you're using). While this action requires a transaction on the Ethereum network and costs a little bit of gas, it's not a transfer.
     <br></br>
        It simply authorizes the instantaneous transfer of WETH later, at the moment your offer is accepted or at the moment that your winning bid is matched up with the auction's sell order.
     <br></br>
        Most dapps, including OpenSea, ask you to approve all of the WETH in your wallet up front so that you don't have to approve more every time you make a larger offer or bid. That way, after the first approval, you can make all the bids and offers you want and you won't ever have to do another approval transaction for that currency.
      </p>
      <p className="primary">
        <b>Q:</b>
        I made an offer but it wasn't accepted. When will I get my refund?
      </p>
      <p className="second">
        <b>A:</b>
        When you make an offer on OpenSea, no money leaves your wallet. It's just a promise to send money in the event that your offer is accepted.
      </p>
      <p className="second">
        See <a href="/faq#how-many-offers-can-i-make-at-a-time"> this related question </a> for more information.
    <br></br>
        You can convert the
        <a href="https://weth.io/"> WETH </a>
        you used to make the offer back into ETH on the Offers section of your account page.
      </p>
      <p className="primary">
        <b>Q:</b>
        Is OpenSea safe?
      </p>
      <p className="second">
        <b>A:</b>
        OpenSea has a strong track record as a safe marketplace for unique blockchain-based assets. We've had over 40,000 ETH of volume pass through our smart contract and many thousands of successful sales. We've acted as the primary marketplace for several large games, including Etheremon Adventure, My Crypto Heroes, CryptoVoxels, ChainBreakers, Ether Kingdoms, and CryptoBeasties -- as well as a secondary market for CryptoKitties, MLB Crypto, Axie, and a host of others.
      <br></br>
        For the more technically savvy: we leverage the
        <a href="https://github.com/ProjectWyvern/"> Wyvern Protocol</a>
        , an audited, battle-tested set of smart contracts. Wyvern is a decentralized exchange system that creates a personal proxy for each user. We don't control the proxies that get created, and you have to approve access to each ERC721 contract individually. Once the contract is approved, the logic of the exchange contract only allows it to transfer an asset from your proxy only if A) you have signed an order indicating you wish to sell that item, and B) it is properly matched by a buyer paying the appropriate funds. So not only does your asset not leave your wallet until it is sold, it is only allowed to be swapped if an order you create is properly matched.
      </p>
    </Div>
  );
};

const Div = styled.div`
  margin: auto;
  max-width: 560px;
  max-height: 100vh;
  h3{

  }
  b {

      margin-right: 5px;
      background-color: rgba(0,0,0,0.5);
      padding: 5px;
      border-radius: 5px;
  }
  p {
    margin: 10px;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 26px;
    &.primary{
      a{
        color: var(--dark);
      }
    }
    &.second{
      a{
        color: var(--dark);
      }
    }
  }
`;
const H1 = styled.h1`
  font-size: 48px;
  line-height: 76px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 20px auto;
`;

const H3 = styled.h3`
  font-size: ${props => props.size}px;
  line-height: 76px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  color: var(--primary);
  padding: 10px;
`;

export default FAQ;
