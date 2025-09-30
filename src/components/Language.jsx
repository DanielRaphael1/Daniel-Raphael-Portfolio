
function Language({ flag, name, level }) {
  const languageBarStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }

  const languageInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '5px'
  }

  const languageNameLevelStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 0,
    gap: '8px',
    width: '100%'
  }

  const languageProgressStyle = {
    width: '100%',
    height: '6px',
    backgroundColor: 'var(--border-orange)',
    borderRadius: '3px',
    overflow: 'hidden',
    position: 'relative'
  }

  const languageProgressFillStyle = {
    height: '100%',
    background: 'linear-gradient(90deg, #f9bc05, #fc8200, #dc6d31)',
    borderRadius: '3px',
    width: '100%',
    animation: 'fillProgress 2s ease-out',
    position: 'relative'
  }


  return (
    <div style={languageBarStyle}>
      <span style={{
        fontSize: '20px',
        minWidth: '24px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <img
          src={flag}
          alt={`${name} flag`}
          style={{
            width: '20px',
            height: '15px',
            objectFit: 'cover'
          }}
        />
      </span>
      <div style={languageInfoStyle}>
        <div style={languageNameLevelStyle}>
          <span style={{
            color: '#f2ebeb',
            fontSize: '0.9rem',
            fontWeight: 600,
            minWidth: 0,
            flex: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>{name}</span>
          <span style={{
            color: '#fc8200',
            fontSize: '0.75rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            minWidth: 0,
            flexShrink: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>{level}</span>
        </div>
        <div style={languageProgressStyle}>
          <div style={languageProgressFillStyle}></div>
        </div>
      </div>
    </div>
  )
}


export default Language