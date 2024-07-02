//rrd imports
import { Form } from 'react-router-dom';
import { Link } from 'react-router-dom';

//components
import { FormInput } from '../components';

//action
export const action = async ({ request }) => {
  let email = formData.get('email');
  let password = formData.get('password');
  return { email, password };
};

function Login() {
  return (
    <div className=' auth-container mt-10'>
      <div className='auth-left'></div>
      <div className='auth-right'>
        <Form className='flex flex-col gap-5 w-96'>
          <h1 className='text-3xl font-semibold text-center'>Login</h1>
          <FormInput name='email' type='email' label='email' />
          <FormInput name='password' type='password' label='password' />
          <div>
            <button className=' mbt-10 btn btn-primary btn-block'>
              <Link to='/home'> Register</Link>
            </button>
          </div>
          <div className='btn btn-secondary btn-block'>Google</div>
          <div className='text-center'>
            <p>
              If you don't have account,
              <Link className='link link-primary' to='/register'>
                Register
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
