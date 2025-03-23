import axios from "axios";
import { useEffect, useState } from "react";

//icon import yukaridakiler
import { LuSearch } from "react-icons/lu";
import { TiThMenuOutline } from "react-icons/ti";
import { RiSquareLine } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
//Component import yukaridakiler

import Card from "./components/Card";
import Modal from "./components/modal";

//Axios ile baseUrl tanimlama

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  // Bilesen icerisinde verileri yonetmek icin state tanimla
  //kisi isimlerinin ad ve soyadinin ilk harflerini bolmek icin bu veriyi split ile bolduk .Sonrasinda bunlari isim ve soyisim degerlerine aktadir.

  const [contatcs, setContacts] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(true);
  const [editItem, setEditItem] = useState(null);

  //Sayfa yuklendiginde Apiden verileri al
  useEffect(() => {
    axios.get("/contacts").then((res) => setContacts(res.data));
  }, []);

  //! Form gonderme
  const handleSubmit = (e) => {
    //Sayfanin yenilenmesini engelle
    e.preventDefault();
    //input icerisindeki degere eris

    const text = e.target[1].value;

    // apiye gonderilecek parametreleri belirle

    const params = {
      q: text,
    };

    //inputdan alinan deger neticesinde ilgili veriyi apiden al
    axios.get("/contacts", { params }).then((res) => setContacts(res.data));
  };

  //Sil butonuna tiklaninca ilgili kisiyi silen fonk

  const handleDelete = (id) => {
    const res = confirm("Bist du sicher?");

    if (res) {
      //apiden idsi bilinen kullaniciyi silsin

      axios
        .delete(`/contacts/${id}`)
        .then(() => {
          //silinen ksiiyi stateden kaldir
          const updated = contatcs.filter(() => contact.id !== id);

          setContacts(updated);
        })
        .catch((err) => {
          alert("While delete process is not achieve");
        });
    }
  };

  //! Guncelle ikonuna tiklayinca ilgili kisi verisini guncelleyecek fonk

  const handleEdit = (contact) => {
    //Modali ac
    setIsModelOpen(true);

    //Guncellencek kisiyi state aktar
    setEditItem(contact);
  };

  return (
    <div className="app">
      {/* Header */}
      <header>
        <h1>Rehber</h1>
        <div>
          <form onSubmit={handleSubmit}>
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
          <button onClick={() => setIsModelOpen(true)} className="add">
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
          <Card
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </main>
      <Modal
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
        setContacts={setContacts}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
