import React, { useRef } from 'react';

const Login = () => {
  const authContainerRef = useRef(null);

  useEffect(() => {
    // Iniciar o FirebaseUI no elemento com o ID 'firebaseui-auth-container'
    ui.start(authContainerRef.current, uiConfig);
  }, [uiConfig]);

  return (
    <div ref={authContainerRef}></div>
  );
};

export default Login;