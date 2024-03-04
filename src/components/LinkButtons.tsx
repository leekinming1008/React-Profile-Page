import "./LinkButton.css"

interface LinkButtonsProps {
  type: string;
  url: string;
}

const LinkButtons = (props: LinkButtonsProps) => {
  return (
    <>
        <a target="_blank" href={props.url}>{props.type}</a>
    </>
  )
}


export default LinkButtons