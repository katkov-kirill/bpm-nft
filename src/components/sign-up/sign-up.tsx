import { Stack, Typography } from '@mui/material';
import { Button, TextField } from 'components/common/common';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase-config';
import { joiResolver } from '@hookform/resolvers/joi';
import { userSignUp } from 'validation-schemas/validation-schemas';

type FormValues = {
  email: string;
  password: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: joiResolver(userSignUp),
  });

  const onSubmit = async (data: FormValues) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = await user.getIdToken();

        sessionStorage.setItem('Auth token', token);
        toast.success('You have successfully signed up!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

        navigate('/profile');
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  return (
    <Stack
      component="main"
      direction="row"
      justifyContent="center"
      minHeight="calc(100vh - 322px)"
      p={6.25}
      gap={3}
      sx={{ backgroundColor: '#EEEFF3' }}
    >
      <Stack
        width="50%"
        height={750}
        borderRadius="50px"
        p={8.75}
        justifyContent="space-between"
        display={{ md: 'flex', xs: 'none' }}
        sx={{ backgroundColor: '#92C800' }}
      >
        <Typography
          component="span"
          fontSize={40}
          fontWeight={700}
          color="#fff"
        >
          Welcome to
        </Typography>
        <Typography
          component="h2"
          fontSize={{ lg: 120, md: 80, sm: 60, xs: 40 }}
          fontWeight={700}
          textAlign="end"
          lineHeight={{ lg: '100px', xs: 'normal' }}
          color="#fff"
        >
          Beats <br /> Per <br /> Mint
        </Typography>
      </Stack>
      <Stack
        width={{ md: '50%', xs: '100%' }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          component="form"
          width="100%"
          maxWidth={416}
          justifyContent="center"
          alignItems="center"
          spacing={4}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Typography fontSize={40} fontWeight={700}>
            Sign up
          </Typography>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                fullWidth
                variant="filled"
                placeholder="Email"
                type="email"
                InputProps={{ disableUnderline: true }}
                error={!!error}
                helperText={error?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                fullWidth
                variant="filled"
                placeholder="Password"
                type="password"
                InputProps={{ disableUnderline: true }}
                error={!!error}
                helperText={error?.message}
                {...field}
              />
            )}
          />

          <Button type="submit">Sign Up</Button>
          <Stack width="100%" direction="row" justifyContent="space-between">
            <Typography>Already have an account?</Typography>
            <Typography component={Link} color="#92C800" to="/login">
              Log in now
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { SignUp };
