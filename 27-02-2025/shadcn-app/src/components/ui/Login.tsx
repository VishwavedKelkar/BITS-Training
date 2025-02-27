import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './button';
import { Form } from './form';
import { Input } from './input';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
  username: z.string().min(2, { message: 'Username must be at least 2 characters long' }).max(50, { message: 'Username must be at most 50 characters long' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).max(100, { message: 'Password must be at most 100 characters long' }),
});

type FormData = z.infer<typeof formSchema>;

const Login: React.FC = () => {

  const navigate = useNavigate();

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = () => {
    navigate('/admin');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">

      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="p-4 w-full max-w-xs">
          <h1 className="text-xl mb-4 text-center">Login</h1>
          <div className="mb-4">
            <Input {...methods.register('username')} placeholder="Username" className="w-full p-2 mb-2" />
            {methods.formState.errors.username && (
              <span className="text-red-500">{methods.formState.errors.username.message}</span>
            )}
          </div>
          <div className="mb-4">
            <Input {...methods.register('password')} type="password" placeholder="Password" className="w-full p-2 mb-2" />
            {methods.formState.errors.password && (
              <span className="text-red-500">{methods.formState.errors.password.message}</span>
            )}
          </div>
          <Button type="submit" className="w-full p-2 bg-blue-500">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
