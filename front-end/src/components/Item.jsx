import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/69/02/9c/ac-hotel-rio-de-janeiro.jpg?w=1200&h=-1&s=1
"
        alt="Imagem do quarto do hotel"
        className="aspect-square rounded-2xl object-cover"
      />

      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">
          🏨 Quarto Luxo com Suíte Privativa e Vista Panorâmica Desfrute de
          conforto, estilo e praticidade em um quarto privativo no coração da
          cidade. Ideal para casais, turistas e viajantes a trabalho, com fácil
          acesso a restaurantes, mercados e pontos turísticos. 🛏️ Conforto
          Garantido Cama queen com roupas de cama premium Ar-condicionado split,
          Wi-Fi rápido e Smart TV 43” com Netflix Estação de trabalho, tomadas
          USB e vista panorâmica com blackout 🛁 Banheiro Privativo Ducha a gás,
          toalhas macias e amenities inclusos Secador de cabelo e espelho com
          luz para maquiagem 🍽️ Extras & Serviços Frigobar, cafeteira Nespresso
          e cofre digital Limpeza a cada 2 dias, check-in digital e
          estacionamento (consulte taxa) 📌 Regras Não fumante, sem pets
          Silêncio das 22h às 8h Reserve agora e viva uma experiência única, com
          conforto e praticidade em cada detalhe. Estamos à disposição para
          tirar dúvidas e fazer da sua estadia algo especial!
        </p>
      </div>
      <p>
        <span className="font-semibold">R$ 550 </span>noite
      </p>
    </a>
  );
};

export default Item;
