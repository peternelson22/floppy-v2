type Props = {
  name: string;
  label: string;
  size: string;
  defaultValue?: boolean;
};
const FormCheckbox = ({ name, label, size, defaultValue }: Props) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type='checkbox'
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-info ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
