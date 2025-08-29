import Slide from "./Slide";
import SecondSlide from "./SecondSlide";

import "./Content.css";

import { formatDate } from "../utils/formatDate";

const Content = ({ isOpen }) => {
  const dataFormatada = formatDate();

  if (isOpen)
    return (
      <div className="top-0 z-50 font-cabin">
        <div className="bg-gray-900  flex flex-col items-center justify-center min-h-screen py-10">
          <div className="mb-10">
            <h1 className="font-bold text-2xl text-white">MM</h1>
          </div>
          <div id="slide">
            <Slide />
          </div>
          <div className="textinho min-w-[320px] max-w-[670px] mt-6 rounded-2xl p-6">
            <div className="text-white ">
              <p className="text-center text-red-500 font-medium">{dataFormatada}</p>
              <br />
              <br />
              <strong>Melzinha</strong>, desde o dia em que eu te dei o primeiro
              beijo, eu já sabia que seria difícil de controlar meus sentimentos
              por você, não só pelo beijo, mas pelo momento em que passamos
              juntos, horas e horas dentro do carro, conversando, rindo, zuando
              e tenho quase certeza que a melhor parte foi estar ao seu lado
              independente se estávamos conversando ou não. O que eu senti
              aquele dia, foi algo que não sabemos explicar, mas podemos sentir
              quando estamos juntos e eu espero ter isso pro resto da vida.
              <br />
              <br />
              Tivemos uma conexão extraordinária e completamente tranquila,
              leve, e por mais que era o nosso primeiro momento juntos, depois
              daquele dia, eu soube que seria você quem eu iria escolher para estar comigo.
              Não tenho dúvidas de que eu te quero.
              <br />
              <br />
              Como diz na música "Pras Damas": <br />
              <br />{" "}
              <div className="italic border border-white w-fit p-4 rounded-2xl">
                "Você me olha de toalha eu te agarro te dou um beijo <br />
                A gente briga, discute discorda mas mesmo assim <br />
                <br />
                Eu gosto de você e você gosta de mim <br />
                Eu te prometo uma vida com hora boa e com hora ruim <br />
                Não prometo final feliz pois não quero que tenha fim <br />
                Te prometo a lua, assim que ela aparecer <br />
                <br />
                Não prometo muito dinheiro, mas o que dê pra viver <br />
                Te prometo uma casa que seja perto do mar <br />
                Pra fim de tarde irmos juntos a areia pra caminhar <br />
                Eu prometo que to contigo pro que der e vier <br />
                <br />
                Te prometo dormir na rede com direito a cafuné [...]"
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-red-500 text-2xl text-center py-4">
              Eu te amo, bê 
            </h2>

            <div>
              <SecondSlide />
            </div>
          </div>

          <div className="text-white text-center max-w-2xl py-8">
            <p>
              Estou acreditando que me permitir amar você seja uma das coisas
              mais bonitas que eu esteja fazendo por mim, nunca havia me sentido
              tão seguro ao lado de alguém igual me sinto com você. Eu amo falar
              com você mesmo quando eu não tenho nada para dizer, amo olhar nos
              teus olhos e enxergar um brilho tão lindo quanto ao se olhar para
              um céu estrelado às 00h no campo deitado na grama.
              <br />
              <br />
              Como eu havia dito em uma das cartas, eu quero te fazer a mulher
              mais feliz desse mundo, eu simplesmente não fazia a menor ideia
              que eu iria ter você por perto de mim, mas sabia que você é tudo o
              que eu sempre quis e quero comigo. Eu te amo mais que comer açaí
              em um dia de verão.
              <br />
              <br />
              Obrigado por ser você 🤍
            </p>
          </div>
        </div>
      </div>
    );
};

export default Content;
