import "./LinkButton.css"

const LinkButtons = ({type, url}) => {
  return (
    <>
        <a target="_blank" href={url}>{type}</a>
    </>
  )
}


export default LinkButtons