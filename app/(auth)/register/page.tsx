import { login } from '@/actions/login';
import CardWrapper from '@/components/card-wrapper';
import { FormError } from '@/components/form-error';
import FormSuccess from '@/components/form-success';
import { LoginForm } from '@/components/login-form';
import RegisterForm from '@/components/registerForm';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const RegisterPage = () => {

  
    return (
        <RegisterForm />
    )
}

export default RegisterPage;