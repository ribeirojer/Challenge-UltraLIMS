import axios from "axios";
import Header from "./components/Header";
import Table from "./components/Table";
import { FormEvent, useEffect, useState } from "react";
import { ICep } from "./interfaces/Cep";
import { Wrapper } from "./Styles";

function App() {
  const cepInput = document.querySelector("#cep");
  const [search, setSearch] = useState("");
  const [listData, setListData] = useState<ICep[]>([]);
  const [data, setData] = useState({} as ICep);
  const [iscorrect, setIsCorrects] = useState(false);
  const [apoio, setApoio] = useState(0);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const url = `https://viacep.com.br/ws/${search}/json/`;

    async function getData() {
      await axios(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fecthing data: ", error);
        });
    }

    var objER = /^[0-9]{8}$/;
    if (objER.test(search)) {
      getData();
    } else {
      setIsCorrects(true);
    }
  }

  useEffect(() => {
    if (data.cep) {
      setListData([...listData, data]);
    }
  }, [data]);

  async function handlePostData(e: any): Promise<void> {
    e.preventDefault();

    await fetch("/URLdoBackend", {
      method: "POST",
      body: JSON.stringify(listData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setListData([]);
    setSearch("");
    alert("Pesquisas enviadas ao Banco de Dados");
  }

  cepInput?.addEventListener("keypress", (e: any) => {
    const onlyNumbers = /[0-9]|\./;
    const key = String.fromCharCode(e.keyCode);
    // allow only numbers
    if (!onlyNumbers.test(key)) {
      e.preventDefault();
      return;
    }
  });

  function handleChange(event: string) {
    setIsCorrects(false);
    setSearch(event);
  }
  const handleOrderBairro = () => {
    if (apoio % 2 === 0) {
      listData.sort(function (a, b) {
        return a.bairro < b.bairro ? -1 : a.bairro > b.bairro ? 1 : 0;
      });
    } else {
      listData.sort(function (a, b) {
        return a.bairro > b.bairro ? -1 : a.bairro < b.bairro ? 1 : 0;
      });
    }
    setApoio(apoio + 1);
  };
  const handleOrderLocalidade = () => {
    if (apoio % 2 === 0) {
      listData.sort(function (a, b) {
        return a.localidade < b.localidade
          ? -1
          : a.localidade > b.localidade
          ? 1
          : 0;
      });
    } else {
      listData.sort(function (a, b) {
        return a.localidade > b.localidade
          ? -1
          : a.localidade < b.localidade
          ? 1
          : 0;
      });
    }
    setApoio(apoio + 1);
  };
  const handleOrderUF = () => {
    if (apoio % 2 === 0) {
      listData.sort(function (a, b) {
        return a.uf < b.uf ? -1 : a.uf > b.uf ? 1 : 0;
      });
    } else {
      listData.sort(function (a, b) {
        return a.uf > b.uf ? -1 : a.uf < b.uf ? 1 : 0;
      });
    }
    setApoio(apoio + 1);
  };

  return (
    <Wrapper>
      <Header />
      <main>
        <h1>Ultra Sistema de Endereços (USE)</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            id="cep"
            type="text"
            placeholder="Digite somente números..."
            value={search}
            onChange={(event) => handleChange(event.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>
        {iscorrect && (
          <div className="error">
            Preenchimento incorreto. Digite 8 números.
          </div>
        )}
        <Table
          listData={listData}
          handleOrderBairro={handleOrderBairro}
          handleOrderLocalidade={handleOrderLocalidade}
          handleOrderUF={handleOrderUF}
        />
        {listData.length > 0 && (
          <div className="save">
            <button onClick={handlePostData}>Salvar</button>
          </div>
        )}
      </main>
    </Wrapper>
  );
}

export default App;
