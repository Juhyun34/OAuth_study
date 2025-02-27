import { useEffect } from 'react';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email%20profile&access_type=offline`.replace(/\s+/g, '');

export default function Login() {
  useEffect(() => {
    window.location.href = AUTH_URL;
  }, []);

  return <p>로그인 중...</p>;
}
