import Star from "../assets/star.svg"
import StarOuter from "../assets/StartarOuter.svg"

interface ITestimonialsProps {
  img: string; 
  nome: string; 
  rating: number; //oi
}

export default function TestimonialsCard(props: ITestimonialsProps) {
  return (
    <div className="carousel-card">
      <img src={props.img} alt="Imagem perfil cliente" />
      <span className="testimony">
        <p>Clientes</p>
      </span>

      <span className="rating">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <img
              key={index}
              src={index < props.rating ? Star : StarOuter}
              alt={index < props.rating ? "ícone estrela preenchida" : "ícone estrela vazia"}
              width={22}
              height={20}
            />
          ))}
      </span>

      <span className="names">
        <p>{props.nome}</p>
        <p>Chaves</p>
      </span>
    </div>
  );
}