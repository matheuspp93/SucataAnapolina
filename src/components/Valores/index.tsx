import { FaHandsHelping, FaCross, FaHandPaper } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

const Valores = () => {
  return (
    <section className="side-padding py-16">
      <SectionTitle title="Nossos Valores" />
      <ul className="flex justify-between pt-10">
        <li className="flex items-center flex-col gap-2 w-1/3">
          <div className="rounded-full bg-green-500 p-4">
            <FaCross color="#fff" size={50} />
          </div>
          <div className="text-center">
            <h4>
              <b>Fé Cristã</b>
            </h4>
            <p>Resultado é consequência do nosso criador</p>
          </div>
        </li>
        <li className="flex items-center flex-col gap-2 w-1/3">
          <div className="rounded-full bg-green-500 p-4">
            <FaHandPaper color="#fff" size={50} />
          </div>
          <div className="text-center">
            <h4>
              <b>Honestidade</b>
            </h4>
            <p>
              Transparência e integridade comercial a fim de construir
              relacionamento entre nossos clientes e parceiros
            </p>
          </div>
        </li>
        <li className="flex items-center flex-col gap-2 w-1/3">
          <div className="rounded-full bg-green-500 p-4">
            <FaHandsHelping color="#fff" size={50} />
          </div>
          <div className="text-center">
            <h4>
              <b>Lealdade</b>
            </h4>
            <p>Compromisso inabalável com o próximo.</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Valores;
