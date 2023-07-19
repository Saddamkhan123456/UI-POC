import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'design-system';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/ActionsCreators';

export interface SignupFormProps {
  name?: string;
  password?: string;
  password2?: string;
  email?: string;
  address?: string;
  mobile?: string;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormProps>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    address: '',
    mobile: '',
  });
  const handleEdit = async (data: SignupFormProps) => {
    if (formData.password !== formData.password2) {
      console.log('Passwords do not match');
    } else {
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.password2,
        address: formData.address,
        mobile: formData.mobile,
      };
      try {
        dispatch<any>(registerUser(newUser));
        navigate('/');
      } catch (error) {}
    }
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className='flex flex-col responsive-height overflow-auto items-center w-full py-5'>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form my-8 flex flex-col gap-4' onSubmit={handleSubmit(handleEdit)}>
        <div className='form-group'>
          <input
            {...register('name', {
              required: true,
              minLength: 5,
              pattern: /^[A-Za-z]+$/i,
            })}
            type='text'
            placeholder='Name'
            className='py-2 px-3 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading'
            name='name'
            value={formData.name}
            onChange={handleInput}
            required
          />
          {errors?.name?.type === 'pattern' && <p className='mt-2 text-theme-danger'>Alphabetical characters only</p>}
          {errors?.name?.type === 'required' && <p className='mt-2 text-theme-danger'>This field is required</p>}
          {errors?.name?.type === 'minLength' && (
            <p className='mt-2 text-theme-danger'>First name cannot less than 5 characters</p>
          )}
        </div>
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
          <small className='form-text block mt-1 text-theme-neutral'>
            This site uses Gravatar so if you want a profile image, use a Gravatar email
          </small>
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
          />
          {errors?.password?.type === 'required' && <p className='mt-2 text-theme-danger'>This field is required</p>}
        </div>
        <div className='form-group'>
          <input
            {...register('password2', {
              required: true,
            })}
            type='password'
            className='py-2 px-3 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading'
            placeholder='Confirm Password'
            value={formData.password2}
            onChange={handleInput}
            name='password2'
            minLength={6}
          />
          {errors?.password2?.type === 'required' && <p className='mt-2 text-theme-danger'>This field is required</p>}
        </div>
        <div>
          <input
            {...register('mobile', {
              required: true,
              pattern: /\d+/,
              minLength: 10,
              maxLength: 10,
            })}
            type='tel'
            id='mobile'
            name='mobile'
            placeholder='Mobile No.'
            value={formData.mobile}
            className='py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38'
            aria-invalid='false'
            onChange={handleInput}
          />
          {errors?.mobile?.type === 'required' && <p className='mt-2 text-theme-danger'>This field is required</p>}
          {errors?.mobile?.type === 'pattern' && <p className='mt-2 text-theme-danger'>This input is number only.</p>}
          {errors?.mobile?.type === 'minLength' && (
            <p className='mt-2 text-theme-danger'>Please enter valid 10 digit number</p>
          )}
          {errors?.mobile?.type === 'maxLength' && (
            <p className='mt-2 text-theme-danger'>limit exceeded than 10 digit</p>
          )}
        </div>
        <div>
          <textarea
            {...register('address', {
              required: true,
            })}
            name='address'
            id='address'
            placeholder='Address'
            value={formData.address}
            onChange={handleInput}
            className='py-2 px-3 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading'
            rows={7}
          ></textarea>
          {errors?.address?.type === 'required' && <p className='mt-2 text-theme-danger'>This field is required</p>}
        </div>
        <div className='w-full '>
          <Button variant='primary' className='cursor-pointer w-full font-semi' type='submit'>
            Register
          </Button>
        </div>
      </form>
      <p className='my-1'>
        Already have an account?{' '}
        <a href='/login' className='underline text-theme-supportBlue'>
          Sign In
        </a>
      </p>
    </div>
  );
};

export default Signup;
