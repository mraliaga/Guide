import axios from "axios";
import { useEffect, useState } from "react";

//icon import yukaridakiler
import { LuSearch } from "react-icons/lu";
import { TiThMenuOutline } from "react-icons/ti";
import { RiSquareLine } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
//Component import yukaridakiler

import Card from "./components/Card";

function App() {
  // Bilesen icerisinde verileri yonetmek icin state tanimla
  //kisi isimlerinin ad ve soyadinin ilk harflerini bolmek icin bu veriyi split ile bolduk .Sonrasinda bunlari isim ve soyisim degerlerine aktadir.

  const [contatcs, setContacts] = useState([]);

  //Sayfa yuklendiginde Apiden verileri al
  useEffect(() => {
    axios
      .get("http://localhost:3000/contacts")
      .then((res) => setContacts(res.data));
  }, []);
  const hundleSubmit = (e) => {
    //Sayfanin yenilenmesini engelle
    e.preventDefault();
    //input icerisindeki degere eris
    const text = e.target[1].value;

    // apiye gonderilecek parametreleri belirle

    const params = {
      q: text,
    };

    //inputdan alinan deger neticesinde ilgili veriyi apiden al
    axios
      .get("http://localhost:3000/contacts", { params })
      .then((res) => setContacts(res.data));
  };

  return (
    <div className="app">
      {/* Header */}
      <header>
        <h1>Rehber</h1>
        <div>
          <form onSubmit={hundleSubmit}>
            <button>
              <LuSearch />
            </button>
            <input type="text" placeholder="kisi aratiniz ..." />
          </form>
          <button className="ns">
            <TiThMenuOutline />
          </button>
          <button>
            <RiSquareLine className="ns" />
          </button>
          <button className="add">
            <span>
              <IoPersonAdd />
            </span>
            <span>Yeni Kisi</span>
          </button>
        </div>
      </header>
      {/* Main */}
      <main>
        {contatcs.map((contact) => (
          <Card key={contact.id} contact={contact} />
        ))}
      </main>
    </div>
  );
}

export default App;
