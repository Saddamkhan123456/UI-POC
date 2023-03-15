import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'design-system';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/ActionsCreators';
import { RootState } from '../../store/configureStore';

export interface SigninFormProps {
  password?: string;
  email?: string;
}

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormProps>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const auth = useSelector((state: RootState) => state.auth);
  const handleEdit = async (data: SigninFormProps) => {
    const user = {
      email: formData.email,
      password: formData.password,
    };
    try {
      dispatch<any>(loginUser(user));
    } catch (error) {
      console.log(error);
    }
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    if (auth.token) {
      navigate(-1);
    }
  }, [auth.token]);
  return (
    <div className='flex flex-col responsive-height overflow-auto items-center w-full py-5'>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Login To Your Account
      </p>
      <form autoComplete='off' className='form my-8 flex flex-col gap-4 w30' onSubmit={handleSubmit(handleEdit)}>
        <div className='form-group'>
          <input
            {...register('email', {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            type='email'
            className='py-2 px-3 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleInput}
            name='email'
          />
          {errors?.email?.type === 'required' && <p className='mt-2 text-theme-danger'>This field is required</p>}
          {errors?.email?.type === 'pattern' && <p className='mt-2 text-theme-danger'>enter valid email id</p>}
        </div>
        <div className='form-group'>
          <input
            {...register('password', {
              required: true,
            })}
            type='password'
            className='py-2 px-3 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading'
            placeholder='Password'
            value={formData.password}
            onChange={handleInput}
            name='password'
            minLength={6}
            autoComplete={'new-password'}
          />
          {errors?.password?.type === 'required' && <p className='mt-2 text-theme-danger'>This field is required</p>}
        </div>
        <div className='w-full '>
          <Button variant='primary' className='cursor-pointer w-full font-semi' type='submit'>
            Login
          </Button>
        </div>
      </form>
      <p className='my-1'>
        Don't have an account?{' '}
        <a href='/register' className='underline text-theme-supportBlue'>
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Signin;
