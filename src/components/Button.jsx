

const Button = ({ icon=null, text, className, ...props }) => {
  return (
    <div>
      <button className={`w-full px-6 py-2 flex gap-2 font-semibold ${className}`} {...props}>
        <span>{icon}</span>
        <p>{text}</p>
      </button>
    </div>
  )
}

export default Button