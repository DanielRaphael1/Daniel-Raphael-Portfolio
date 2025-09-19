
function Language({ flag, name, level }) {
  return (
    <div className="language-bar">
      <span className="language-flag">{flag}</span>
      <div className="language-info">
        <div className="language-name-level">
          <span className="language-name">{name}</span>
          <span className="language-level">{level}</span>
        </div>
        <div className="language-progress">
          <div className="language-progress-fill"></div>
        </div>
      </div>
    </div>
  )
}


export default Language