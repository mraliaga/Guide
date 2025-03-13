import axios from "axios";
import { useEffect, useState } from "react";

//icon import yukaridakiler
import { LuSearch } from "react-icons/lu";
import { TiThMenuOutline } from "react-icons/ti";
import { RiSquareLine } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
//Component import yukaridakiler

function App() {
  // Bilesen icerisinde verileri yonetmek icin state tanimla
  const [contatcs, setContacts] = useState([]);

  //Sayfa yuklendiginde Apiden verileri al
  useEffect(() => {
    axios
      .get("http://localhost:3000/contacts")
      .then((res) => setContacts(res.data));
  }, []);

  console.log(contatcs);

  return (
    <div className="app">
      {/* Header */}
      <header>
        <h1>Rehber</h1>
        <div>
          <form>
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
          <Card key={contact.id} />
        ))}
      </main>
    </div>
  );
}

export default App;
