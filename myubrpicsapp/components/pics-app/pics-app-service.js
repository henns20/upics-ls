'use strict';

angular.module('myubrApp')
  .factory('picsFactory', profilePicsFactory);

function profilePicsFactory () {
  // this will be super long - better place ment link put it in a function so that it hoists
  var profilePics = [
    {
      name: "Snapchat it",
      description: "The story of Snapchat is an exciting one",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../images/evan_snapchat.jpg",
      littleImage: "../images/snapchat-logo-250250.png"
    },
    {
      name: "iExec",
      description: "Get a photo inspired by the Apple executive",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../images/apple-woman-350.png",
      littleImage: "../images/apple-aluminum.png"
    },
    {
      name: "Search Engine Giant",
      description: "Get a photo like the Google's management team",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../images/googleexec.jpg",
      littleImage: "../images/google4.png"
    },
    {
      name: "G Ventrified",
      description: "A quick creative description of the pic",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../images/bluebottle/kevin-rose2.jpg",
      littleImage: "../images/gv-logo-icon.png"
    },
    {
      name: "Yahoo Ceo",
      description: "A quick creative description of the pic",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../images/mmayer-1.jpg",
      littleImage: "../images/yahoo-logo.png"
    },
    {
      name: "G Ventrified 2",
      description: "A quick creative description of the pic",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../images/bluebottle/phoebe-peronto.jpg",
      littleImage: "../images/gv-logo-icon.png"
    }
//    {
//      name: "Snapchat",
//      description: "The story of Snapchat is an exciting one",
//      productlink: "../../app/components/product-page/product.html",
//      profileImage: "../../images/evan_snapchat.jpg"
//    },
//    {
//      name: "Snapchat",
//      description: "The story of Snapchat is an exciting one",
//      productlink: "../../app/components/product-page/product.html",
//      profileImage: "../../images/evan_snapchat.jpg"
//    },
//    {
//      name: "Snapchat",
//      description: "The story of Snapchat is an exciting one",
//      productlink: "../../app/components/product-page/product.html",
//      profileImage: "../../images/evan_snapchat.jpg"
//    },
//    {
//      name: "Snapchat",
//      description: "The story of Snapchat is an exciting one",
//      productlink: "../../app/components/product-page/product.html",
//      profileImage: "../../images/evan_snapchat.jpg"
//    },
//    {
//      name: "Snapchat",
//      description: "The story of Snapchat is an exciting one",
//      productlink: "../../app/components/product-page/product.html",
//      profileImage: "../../images/evan_snapchat.jpg"
//    }
  ];
  var profilePics2 = [
    {
      name: "Wordpress Hero",
      description: "Get a photo like the J. Torke Wordpress development guru.",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../images/torke-large-1.jpeg",
      littleImage: ""
    },
    {
      name: "Iron Chef W",
      description: "Cat Kora was the first woman Iron Chefe",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../images/cat.png",
      littleImage: ""
    },
    {
      name: "Comic Genius",
      description: "Get a photo inspired by the Apple executive",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../images/comicbfrop250.jpg",
      littleImage: ""
    },
    {
      name: "Martha's Assistant",
      description: "A quick creative description of the pic",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../images/bluebottle/marthstewart-mediakit.png",
      littleImage: ""
    }

  ];

  return {
    getPics: function() {
      return profilePics;
    },
    getPics2: function() {
        return profilePics2;
    }
  }
}