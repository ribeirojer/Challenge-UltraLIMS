import { ICep } from "../interfaces/Cep";
import styled from "styled-components";

type Props = {
  listData: ICep[];
  handleOrderBairro(): any;
  handleOrderLocalidade(): void;
  handleOrderUF(): void;
};

const Wrapper = styled.section`
  .demo {
    width: 60vw;
    border: 1px solid #c0c0c0;
    border-collapse: collapse;
    padding: 5px;
  }
  .demo th {
    border: 1px solid #c0c0c0;
    padding: 5px;
    color: #ffffff;
    background: #01aef0;
  }
  .demo td {
    border: 1px solid #c0c0c0;
    padding: 5px;
  }
  .demo tr:hover {
    background-color: #8caff7;
    color: #ffffff;
  }
  .demo td:nth-child(1),
  .demo th:nth-child(1) {
    width: 13%;
  }
  .demo td:nth-child(2),
  .demo th:nth-child(2) {
    width: 30%;
  }
  .demo td:nth-child(3),
  .demo th:nth-child(3) {
    width: 27%;
  }
  .demo td:nth-child(4),
  .demo th:nth-child(4) {
    width: 25%;
  }
  .demo td:nth-child(5),
  .demo th:nth-child(5) {
    width: 5%;
  }
  /* scrollbar */
  .table_wrapper {
    border-bottom: 1px solid #c0c0c0;
    max-height: 240px;
    overflow: overlay;
  }
  .table_wrapper::-webkit-scrollbar {
    width: 10px;
  }
  .table_wrapper::-webkit-scrollbar-thumb {
    background: #16213e;
    border-radius: 0.3rem;
    margin-top: 1px;
  }
  .table_wrapper::-webkit-scrollbar-track {
    background: #fff;
  }
`;

const Table = ({
  listData,
  handleOrderBairro,
  handleOrderLocalidade,
  handleOrderUF,
}: Props) => {
  return (
    <Wrapper>
      {listData.length > 0 && (
        <table className="demo">
          <thead>
            <tr>
              <th>CEP</th>
              <th>Logradouro</th>
              <th onClick={() => handleOrderBairro()}>Bairro</th>
              <th onClick={() => handleOrderLocalidade()}>Localidade</th>
              <th onClick={() => handleOrderUF()}>UF</th>
            </tr>
          </thead>
        </table>
      )}
      {listData.length > 0 && (
        <div className="table_wrapper">
          <table className="demo">
            <tbody>
              {listData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.cep}</td>
                    <td>{item.logradouro}</td>
                    <td>{item.bairro}</td>
                    <td>{item.localidade}</td>
                    <td>{item.uf}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </Wrapper>
  );
};

export default Table;
