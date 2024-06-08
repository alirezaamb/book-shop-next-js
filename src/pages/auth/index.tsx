import { useRouter } from 'next/router';
import SignIn from '@/components/auth/signIn/SignIn';
import SignUp from '@/components/auth/signUp/SignUp';

const AuthPage = () => {
  const router = useRouter();
  const { action } = router.query;

  const setSearchParams = (params: any) => {
    router.push({
      pathname: router.pathname,
      query: params,
    });
  };

  return action === 'signup' ? (
    <SignUp setSearchParams={setSearchParams} />
  ) : (
    <SignIn setSearchParams={setSearchParams} />
  );
};

export default AuthPage;
