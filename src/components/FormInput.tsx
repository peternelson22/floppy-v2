type Props = {
  name: string;
  type: string;
  label: string;
  defaultValue: string;
};

const FormInput = ({ name, label, type, defaultValue }: Props) => {
  return (
    <div className='form-control w-full max-w-xs'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className='input input-bordered '
      />
    </div>
  );
};
export default FormInput;
