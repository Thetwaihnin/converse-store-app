import { XMarkIcon } from "@heroicons/react/16/solid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate  = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    let hasErrors = false;
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    if (!name) {
      newErrors.name = 'Name is required';
      hasErrors = true;
    }
    if (!email) {
      newErrors.email = 'Email is required';
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
      hasErrors = true;
    }
    if (!password) {
      newErrors.password = 'Password is required';
      hasErrors = true;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      try {
        // Replace with your API endpoint
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error('Registration failed');
        }

        const data = await response.json();

        // Save JWT token to localStorage or sessionStorage
        localStorage.setItem('token', data.token);

        // Redirect to /home
        navigate('/home');
      } catch (error) {
        console.error('Registration error:', error);
        // Handle errors (e.g., display a message to the user)
      }
    }
  };

  return (
    <div className="fixed inset-0  bg-gray-200 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto w-full mt-8">
        <div className="relative">
          <strong className="text-2xl text-center block">Sign Up</strong>
          <button className="absolute top-4 right-4" aria-label="Close">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-sm px-4 py-2 w-full"
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
            <p>
              Already have an account?{" "}
              <Link className="text-red-600" to="/login">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
