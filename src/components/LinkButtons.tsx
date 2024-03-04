import "./LinkButton.css";

interface LinkButtonsProps {
  label: string;
  url: string;
}

const LinkButtons = ({ url, label }: LinkButtonsProps) => {
  return (
    <>
      <a target="_blank" href={url}>
        {label}
      </a>
    </>
  );
};

export default LinkButtons;
