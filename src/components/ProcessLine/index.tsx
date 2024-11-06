import {
  FaChartBar,
  FaBalanceScaleLeft,
  FaTruckLoading,
  FaMoneyCheckAlt,
  FaUserCheck,
  FaPiggyBank,
} from "react-icons/fa";

const ProcessLine = () => {
  return (
    <section className="py-16 side-padding">
      <h2 className="text-2xl text-center font-bold pb-7">
        Veja como funciona o processo e como <br />
        executamos os nossos serviços
      </h2>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        <li className="text-xl flex flex-col items-center font-bold">
          <FaChartBar size={50} color="#46835d" />
          Analisamos
        </li>
        <li className="text-xl flex flex-col items-center font-bold">
          <FaPiggyBank size={50} color="#46835d" />
          Orçamento
        </li>
        <li className="text-xl flex flex-col items-center font-bold">
          <FaBalanceScaleLeft size={50} color="#46835d" />
          Pesagem
        </li>
        <li className="text-xl flex flex-col items-center font-bold">
          <FaTruckLoading size={50} color="#46835d" />
          Coleta
        </li>
        <li className="text-xl flex flex-col items-center font-bold">
          <FaMoneyCheckAlt size={50} color="#46835d" />
          Pagamento
        </li>
        <li className="text-xl flex flex-col items-center font-bold">
          <FaUserCheck size={50} color="#46835d" />
          Confiança
        </li>
      </ul>
    </section>
  );
};

export default ProcessLine;
