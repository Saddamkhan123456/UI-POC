import { useEffect, useState } from 'react';
import { Card, CardBody, Button } from 'design-system';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile, updateProfile } from '../../redux/actions/ActionsCreators';
import { RootState } from '../../store/configureStore';
import Spinner from '../../atoms/spinner/spinner';

interface IFormInput {
  name?: string;
  address?: string;
  phoneNumber?: string;
}

const Account = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const handleEdit = () => {
    let item = { name, address, mobile };
    dispatch<any>(updateProfile(item));
    setEditMode(false);

    // alert("Your form details have been saved");
  }; // your form submit function which will invoke after successful validation

  //
  // const [users, setUser] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch<any>(getProfile());
  }, []);

  const handleEditMode = () => {
    setEditMode(true);
  };
  useEffect(() => {
    setName(profile.userData?.name);
    setAddress(profile.userData?.address);
    setMobile(profile.userData?.mobile);
  }, [profile.userData]);

  return (
    <>
      <h2 className='text-xl capitalize leading-none pb-4 mb-4 border-b w-full font-medium'>Account Details</h2>
      <Card className='grow flex p-4 mt-4 w-1/2 card-shadow'>
        <CardBody className='w-full h-full'>
          {profile.loading ? (
            <Spinner />
          ) : (
            <>
              {editMode ? (
                <form onSubmit={handleSubmit(handleEdit)} className='w-full mx-auto flex flex-col justify-center '>
                  <div className='flex flex-col space-y-4 sm:space-y-5'>
                    <div>
                      <label
                        aria-label='name'
                        className='block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer'
                      >
                        Name*
                      </label>
                      <input
                        autoComplete='true'
                        {...register('name', {
                          minLength: 5,
                          pattern: /^[A-Za-z]+$/i,
                        })}
                        type='text'
                        id='name'
                        name='name'
                        placeholder={'Name'}
                        value={name}
                        className='py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12'
                        aria-invalid='false'
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      {errors?.name?.type === 'pattern' && (
                        <p className='mt-2 text-theme-danger'>Alphabetical characters only</p>
                      )}
                      {errors?.name?.type === 'required' && (
                        <p className='mt-2 text-theme-danger'>This field is required</p>
                      )}
                      {errors?.name?.type === 'minLength' && (
                        <p className='mt-2 text-theme-danger'>First name cannot less than 5 characters</p>
                      )}
                    </div>
                    <div>
                      <label className='block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer'>
                        Phone/Mobile *
                      </label>
                      <input
                        autoComplete='true'
                        {...register('phoneNumber', {
                          minLength: 10,
                          maxLength: 10,
                          pattern: /\d+/,
                        })}
                        type='tel'
                        id='phoneNumber'
                        name='phoneNumber'
                        placeholder={'mobile'}
                        value={mobile}
                        className='py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12'
                        aria-invalid='false'
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
                      {errors?.phoneNumber?.type === 'required' && (
                        <p className='mt-2 text-theme-danger'>This field is required</p>
                      )}
                      {errors?.phoneNumber?.type === 'pattern' && (
                        <p className='mt-2 text-theme-danger'>This input is number only.</p>
                      )}
                      {errors?.phoneNumber?.type === 'minLength' && (
                        <p className='mt-2 text-theme-danger'>Please enter valid 10 digit number</p>
                      )}
                      {errors?.phoneNumber?.type === 'maxLength' && (
                        <p className='mt-2 text-theme-danger'>limit exceeded than 10 digit</p>
                      )}
                    </div>
                    <div>
                      <label className='block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer'>
                        Address
                      </label>
                      <textarea
                        {...register('address', {})}
                        name='address'
                        id='address'
                        placeholder={'Address'}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className='py-2 px-3 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading'
                        rows={7}
                      ></textarea>
                    </div>

                    <div className='flex items-center justify-between'>
                      <Button
                        variant='primary'
                        className='cursor-pointer uppercase'
                        type='submit'
                        // onClick={onSubmit}
                      >
                        Save
                      </Button>
                      <Button
                        variant='secondary'
                        className='cursor-pointer uppercase'
                        onClick={() => setEditMode(false)}
                      >
                        Cancle
                      </Button>
                    </div>
                  </div>
                </form>
              ) : (
                <>
                  <div className='flex flex-col gap-4'>
                    <div className='flex item-center gap-2'>
                      <label
                        aria-label='name'
                        className='block text-gray-400 font-semibold text-sm leading-none mb-3 cursor-pointer'
                      >
                        Name*
                      </label>
                      <label
                        aria-label='name'
                        className='block text-black-600 font-semibold text-sm leading-none mb-3 cursor-pointer'
                      >
                        {profile.userData?.name}
                      </label>
                    </div>
                    <div className='flex item-center gap-2'>
                      <label
                        aria-label='name'
                        className='block text-gray-400 font-semibold text-sm leading-none mb-3 cursor-pointer'
                      >
                        Email
                      </label>
                      <label
                        aria-label='name'
                        className='block text-black-600 font-semibold text-sm leading-none mb-3 cursor-pointer'
                      >
                        {profile.userData?.email}
                      </label>
                    </div>
                    <div className='flex item-center gap-2'>
                      <label
                        aria-label='name'
                        className='block text-gray-400 font-semibold text-sm leading-none mb-3 cursor-pointer'
                      >
                        Mobile
                      </label>
                      <label
                        aria-label='name'
                        className='block text-black-600 font-semibold text-sm leading-none mb-3 cursor-pointer'
                      >
                        {profile.userData?.mobile}
                      </label>
                    </div>
                    <div className='flex item-center gap-2'>
                      <label
                        aria-label='name'
                        className='block text-gray-400 font-semibold text-sm leading-none mb-3 cursor-pointer'
                      >
                        Address
                      </label>
                      <label
                        aria-label='name'
                        className='block text-black-600 font-semibold text-sm leading-none mb-3 cursor-pointer'
                      >
                        {profile.userData?.address}
                      </label>
                    </div>
                    <Button
                      variant='primary'
                      className='cursor-pointer uppercase pt-4 mt-4'
                      type='submit'
                      onClick={handleEditMode}
                    >
                      Edit
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default Account;
