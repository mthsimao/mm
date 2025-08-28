import Slide from "./Slide";

import { formatDate } from "../utils/formatDate";

const Content = () => {
  const dataFormatada = formatDate();

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="mb-10">
        <h1 className="font-bold text-2xl text-white">MM</h1>
      </div>

      <div id="slide">
        <Slide />
      </div>

      <div className="textinho max-w-1/2 mt-10 border border-red-600 rounded-2xl p-6">
        <p className="text-white">
          {dataFormatada}
          <br />
          <br />
          Espero que esteja ocorrendo tudo de uma forma que eu planejei para que isso fique bem bonito e certo para nós.
          Desde o dia que a gente se beijou pela primeira vez, eu sabia que você seria uma pessoa incrível para mim.
        </p>
      </div>
    </div>
  );
};

export default Content;
