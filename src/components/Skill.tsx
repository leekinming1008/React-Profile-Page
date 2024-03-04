interface SkillProps {
  src: string;
}

const Skill = (props: SkillProps) => {
  return (
    <img className="skills" src={props.src}></img>           
  )
}

export default Skill