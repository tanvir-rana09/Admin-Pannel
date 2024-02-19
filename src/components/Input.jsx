import { Controller } from "react-hook-form"

const Input = ({
  type = 'text',
  className = '',
  placeholder = '',
  name = 'content',
  control,
  ...props
}) => {

  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field:{onChange} }) => <input required {...props} type={type} className={`outline-none w-full px-4 py-2 rounded-md ${className}`} placeholder={placeholder} onChange={onChange}/>}
      />
    </div>
  )
}

export default Input