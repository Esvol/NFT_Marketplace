// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint listingPrice = 0.0015 ether;

    address payable owner;

    mapping(uint => MarketItem) private idMarketItem;

    struct MarketItem {
        uint tokenId;
        address payable seller;
        address payable owner;
        uint price;
        bool sold;
    }

    event idMarketItemCreated(
        uint indexed tokenId,
        address seller,
        address owner,
        uint price,
        bool sold
    );

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "only owner of the marketplace can change the listing price!"
        );
        _;
    }

    constructor() ERC721("NFT Metavarse Token", "MYNFT") {
        owner = payable(msg.sender);
    }

    function updateListingPrice(uint _listingPrice) public payable onlyOwner {
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns (uint) {
        return listingPrice;
    }

    // Let create "CREATE NFT TOKEN FUNCTION"
    function createToken(string memory tokenURI, uint price) public payable returns (uint) {
        require(price > 0, "Price must be at least 1");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        _tokenIds.increment();

        _mint(msg.sender, _tokenIds.current());

        _setTokenURI(_tokenIds.current(), tokenURI);

        createMarketItem(_tokenIds.current(), price);

        return _tokenIds.current();
    }

    //CREATING MARKET ITEM
    function createMarketItem(uint tokenId, uint price) private {
        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    //FUNCTION FOR RESALE TOKEN
    function reSellToken(uint tokenId, uint price) public payable {
        // require(idMarketItem[tokenId].sold == true, "NFT is not listed for sale");

        require(
            idMarketItem[tokenId].owner == msg.sender,
            "Only item owner can perform this operation!"
        );
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price!"
        );

        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    //FUNCTION CREATE MARKETSALE
    function createMarketSale(uint tokenId) public payable {
        uint price = idMarketItem[tokenId].price;

        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase!"
        );

        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].owner = payable(address(0));

        _itemsSold.increment();
        _transfer(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }

    //GETTING UNSOLD NFT DATA
    function fetchMarketItem() public view returns (MarketItem[] memory) {
        uint unSoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint currentIndex;

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);
        for (uint i = 0; i < _tokenIds.current(); i++) {
            if (idMarketItem[i].owner == address(this)) {
                items[currentIndex] = idMarketItem[i];
                currentIndex += 1;
            }

        }

        return items;
    }

    //USER PURCHASE ITEMS
    function fetchMyNFT() public view returns (MarketItem[] memory) {
        uint itemCount;
        uint currentIndex;

        for (uint i = 0; i < _tokenIds.current(); i++) {
            if (idMarketItem[i].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint i = 0; i < _tokenIds.current(); i++) {
            if (idMarketItem[i].owner == msg.sender) {
                items[currentIndex] = idMarketItem[i];
                currentIndex += 1;
            }
        }

        return items;
    }

    //SINGLE USER ITEMS
    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint itemCount;
        uint currentIndex;

        for (uint i = 0; i < _tokenIds.current(); i++) {
            if (idMarketItem[i].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for(uint i=0; i < _tokenIds.current(); i++){
            if(idMarketItem[i].seller == msg.sender){
                items[currentIndex] = idMarketItem[i];
                currentIndex += 1;
            }
        }

        return items;
    }
    
}
