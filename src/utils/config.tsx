const {
    VITE_REACT_FIREBASE_APP_API_KEY,
    VITE_REACT_FIREBASE_APP_AUTH_DOMAIN,
    VITE_REACT_FIREBASE_APP_PROJECT_ID,
    VITE_REACT_FIREBASE_APP_STORAGE_BUCCKET,
    VITE_REACT_FIREBASE_APP_MESSAGING_SENDER_ID,
    VITE_REACT_FIREBASE_APP_MESSAGING_APPLE_ID,
    VITE_REACT_FIREBASE_APP_MESSAGING_MEASUREMENT_ID
  } = import.meta.env
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = {
    firebase: {
      apiKey: VITE_REACT_FIREBASE_APP_API_KEY,
      authDomain: VITE_REACT_FIREBASE_APP_AUTH_DOMAIN,
      projectId: VITE_REACT_FIREBASE_APP_PROJECT_ID,
      storageBucket: VITE_REACT_FIREBASE_APP_STORAGE_BUCCKET,
      messagingSenderId: VITE_REACT_FIREBASE_APP_MESSAGING_SENDER_ID,
      appId: VITE_REACT_FIREBASE_APP_MESSAGING_APPLE_ID,
      measurementId: VITE_REACT_FIREBASE_APP_MESSAGING_MEASUREMENT_ID
    }
  };

  export default config;