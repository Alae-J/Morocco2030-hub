
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../service/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();  // <-- HOOK
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("User signed in:", userCredential.user);
          localStorage.setItem("token", userCredential.user.uid); // Save token ✅
          localStorage.setItem("loginTime", Date.now().toString()); // <- store login timestamp

          navigate("/"); // Redirect to home
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      if (password !== confirmPassword) {
        console.error('Passwords do not match');
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("User created:", userCredential.user);
          localStorage.setItem("token", userCredential.user.uid); // Save token ✅
          localStorage.setItem("loginTime", Date.now().toString()); // <- store login timestamp

          navigate("/"); // Redirect to home
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  
  const toggleView = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 bg-gray-50 dark:bg-moroccan-dark/80">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-moroccan-dark shadow-lg rounded-2xl p-8 border border-gray-100 dark:border-moroccan-dark">
            <h2 className="text-3xl font-bold text-center mb-8 text-moroccan-dark dark:text-white">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-moroccan-red"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-moroccan-red"
                    placeholder="••••••••"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeOff size={18} className="text-gray-400" />
                      ) : (
                        <Eye size={18} className="text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Confirm password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-moroccan-red"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}
              
              {isLogin && (
                <div className="flex justify-end">
                  <Link to="/forgot-password" className="text-sm text-moroccan-red hover:underline">
                    Forgot password?
                  </Link>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-moroccan-red hover:bg-moroccan-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-moroccan-red transition-colors"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white dark:bg-moroccan-dark text-sm text-gray-500 dark:text-gray-400">
                    or
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
            {error && <p style={{ color: "red" }}>{error}</p>}
              <button
                onClick={toggleView}
                className="text-moroccan-red hover:underline font-medium"
              >
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </button>
            </div>
           
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Auth;