import React from "react";
import "./style.css";
import Youtube from "../assets/youtube.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import logo from "../assets/logo.png";
import iconeMenu from "../assets/icone-menu.png";

export const TelaInicial = () => {
  return (
    <div className="tela-inicial">
      <div className="div">
        <div className="overlap">
          <div className="overlap">
            <img
              className="logo-sem-fundo-roxo"
              alt="Logo sem fundo roxo"
              src={logo}
            />

            <div className="text-wrapper">Bem-vindo ao MusicFeel!</div>
          </div>

          <img
            className="boto-menu"
            alt="Boto menu"
            src={iconeMenu}
          />
        </div>

        <div className="overlap-group">
          <div className="text-wrapper-2">Plano Duo</div>

          <div className="text-wrapper-3">Plano Individual</div>

          <div className="text-wrapper-4">Plano Banda</div>

          <div className="text-wrapper-5">Planos do MusicFeel</div>

          <div className="text-wrapper-6">Suporte</div>

          <div className="text-wrapper-7">Links Úteis</div>

          <div className="text-wrapper-8">Empresa</div>

          <div className="text-wrapper-9">Sobre</div>

          <div className="text-wrapper-10">Empregos</div>

          <img
            className="instagram"
            alt="Instagram"
            src={Instagram}
          />

          <img
            className="facebook"
            alt="Facebook"
            src={Facebook}
          />

          <img
            className="youtube"
            alt="Youtube"
            src={Youtube}
          />
        </div>

        <p className="aqui-a-m-sica-ganha">
          Aqui, a música ganha vida em suas mãos! Aprenda a tocar instrumentos
          musicais com lições interativas, dicas práticas e uma comunidade
          apaixonada por música. Seja você iniciante ou já experiente, temos o
          conteúdo certo para ajudar a transformar sua paixão pela música em
          habilidade.
          <br />
          Escolha seu instrumento favorito e comece a jornada musical agora
          mesmo!
        </p>

        <div className="div-wrapper">
          <div className="text-wrapper-11">Comece agora</div>
        </div>

        <div className="overlap-2">
          <div className="text-wrapper-12">Visualizar todos os planos</div>
        </div>

        <p className="p">
          Escolha o plano ideial e aprenda a tocar o instrumento dos seus
          sonhos. Vários métodos de pagamento. Cancele quando quiser.
        </p>

        <p className="text-wrapper-13">
          Planos acessíveis para qualquer situação
        </p>
      </div>
    </div>
  );
};