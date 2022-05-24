import { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleSignIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  // useEffect(() => {
  //   if (token) {
  //     navigate(from, { replace: true });
  //   }
  // }, [from, navigate, token]);

  let errorMessage;

  if (googleError) {
    errorMessage = (
      <p className="text-red-600 text-center">Authentication failed</p>
    );
  }
  useEffect(() => {
    if (googleUser) {
      navigate(from, { replace: true });
    }
  }, [from, googleUser, navigate]);

  return (
    <>
      {googleError && errorMessage}
      <button
        disabled={googleLoading}
        onClick={() => signInWithGoogle()}
        className={`btn btn-outline btn-warning ${
          googleLoading ? 'loading' : ''
        }`}
      >
        {googleLoading ? '' : 'Continue With Google'}
      </button>
    </>
  );
};

export default GoogleSignIn;
