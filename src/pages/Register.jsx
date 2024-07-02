//rrd imports
import { Form, Link, useActionData } from 'react-router-dom';

//components
import { FormInput } from '../components';
import { useEffect } from 'react';

//action
export const action = async ({ request }) => {
  let formData = await request.FormData();
  let displayName = formData.get('displayName');
  let imageUrl = formData.get('imageUrl');
  let email = formData.get('email');
  let password = formData.get('password');
  return { displayName, imageUrl, email, password };
};

function Register() {
  const register = useActionData();

  useEffect(() => {
    if (register) {
      console.log(register);
    }
  }, [register]);
  return (
    <div className=' auth-container mt-10'>
      <div className='auth-left'></div>
      <div className='auth-right'>
        <Form method='post' className='flex flex-col  gap-2 w-96'>
          <h1 className='text-3xl font-semibold text-center'>Register</h1>
          <FormInput name='displayName' type='text' label='name' />
          <FormInput name='ImageUrl' type='imageurl' label='ImageUrl' />
          <FormInput name='email' type='email' label='email' />
          <FormInput name='password' type='password' label='password' />
          <div className='mt-10'>
            <button type='sumbit' className='btn btn-primary btn-block'>
              <Link to='/home'>LogIn</Link>
            </button>
          </div>
          <div className='type="button" type="button" btn btn-secondary btn-block'>
            Google
          </div>
          <div className='text-center'>
            <p>
              If you don't have account,
              <Link className='link link-primary' to='/login'>
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
