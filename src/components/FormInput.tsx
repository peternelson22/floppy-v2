type Props = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  size?: string;
  placeholder?: string;
};

const FormInput = ({
  name,
  label,
  type,
  defaultValue,
  size,
  placeholder,
}: Props) => {
  return (
    <div className='form-control w-full max-w-xs'>
      <label className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};
export default FormInput;
