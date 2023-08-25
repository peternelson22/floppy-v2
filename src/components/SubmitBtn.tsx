import { useNavigation } from 'react-router-dom';

type Props = {
  text: string;
};
const SubmitBtn = ({ text }: Props) => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === 'submitting';
  return (
    <button
      className='btn btn-info btn-block'
      type='submit'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner'></span>
          sending...
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};
export default SubmitBtn;
