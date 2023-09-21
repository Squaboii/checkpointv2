import React from "react";
import CardItems from "./CardItems";
function PrductsList() {
  let data = [
    {
      image:
        "https://th.bing.com/th/id/R.2b2ac1bb5b369a4aea0e5dc1768f10b4?rik=uXHEZ0EPPT7U7w&pid=ImgRaw&r=0",
      title: "Smartphone Apple iPhone 14 Pro / 5G / 128 Go /black",
      descrption:
        "Ecran 6.7 HDR OLED Super Retina XDR (1290 x 2796 px) - Processeur Apple A16 Bionic Hexa Core - Etanche IP68 - RAM 6 Go - Memoire 128 Go",
      prix: "5000",
    },
    {
      image:
        "https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg",
      title: "Smartphone Apple iPhone 14 Pro / 5G / 128 Go /black",
      descrption:
        "Ecran 6.7 HDR OLED Super Retina XDR (1290 x 2796 px) - Processeur Apple A16 Bionic Hexa Core - Etanche IP68 - RAM 6 Go - Memoire 128 Go",
      prix: "5000",
    },
    {
      image:
        "https://imagedelivery.net/JAV112JY973Crznn4xb8Sg/a6190deb-22d7-4ab1-a1aa-f7401bf4b100/public",
      title: "Smartphone Apple iPhone 14 Pro / 5G / 128 Go /black",
      descrption:
        "Ecran 6.7 HDR OLED Super Retina XDR (1290 x 2796 px) - Processeur Apple A16 Bionic Hexa Core - Etanche IP68 - RAM 6 Go - Memoire 128 Go",
      prix: "5000",
    },
    {
      image:
        "https://www.smartprix.com/bytes/wp-content/uploads/2022/11/FiERK3lVEAEGyCO-photoutils.com_.jpeg",
      title: "Smartphone Apple iPhone 14 Pro / 5G / 128 Go /black",
      descrption:
        "Ecran 6.7 HDR OLED Super Retina XDR (1290 x 2796 px) - Processeur Apple A16 Bionic Hexa Core - Etanche IP68 - RAM 6 Go - Memoire 128 Go",
      prix: "5000",
    },

    {
      image:
        "https://th.bing.com/th/id/R.2b2ac1bb5b369a4aea0e5dc1768f10b4?rik=uXHEZ0EPPT7U7w&pid=ImgRaw&r=0",
      title: "Smartphone Apple iPhone 14 Pro / 5G / 128 Go /black",
      descrption:
        "Ecran 6.7 HDR OLED Super Retina XDR (1290 x 2796 px) - Processeur Apple A16 Bionic Hexa Core - Etanche IP68 - RAM 6 Go - Memoire 128 Go",
      prix: "5000",
    },
    {
      image:
        "https://www.blackxperience.com/assets/content/blackattitude/blacktech/0x0-21.jpg",
      title: "Smartphone Apple iPhone 14 Pro / 5G / 128 Go /black",
      descrption:
        "Ecran 6.7 HDR OLED Super Retina XDR (1290 x 2796 px) - Processeur Apple A16 Bionic Hexa Core - Etanche IP68 - RAM 6 Go - Memoire 128 Go",
      prix: "5000",
    },
  ];

  return (
    <div className="App">
      {data.map((elt) => (
        <CardItems
          image={elt.image}
          title={elt.title}
          descrption={elt.descrption}
          prix={elt.prix}
        />
      ))}
    </div>
  );
}

export default PrductsList;
