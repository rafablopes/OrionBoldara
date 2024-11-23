import "../styles/buttons.css";

interface IButtonProps {
  text: string;
  secondary?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;  // Aceita eventos de clique
  type?: "button" | "submit" | "reset";  // Define o tipo do botão
}

export default function Button({
  text,
  secondary,
  disabled,
  onClick,
  type = "button"  // Define "button" como padrão, mas permite sobrescrever
}: IButtonProps) {
  return (
    <button
      type={type}  // Configura o tipo do botão, como "submit" ou "button"
      className={secondary ? "btn-secondary" : "btn-primary"}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}