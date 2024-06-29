import { pageLevelLocalization } from '@/constants/localization';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { getCookie } from 'cookies-next';
import {
  useGetUserProfile,
  useUpdateProfile,
} from '@/api/userInfo/userInfo.queries';
import LoadingPage from '@/components/shared/loading/Loading';
import { InputsCheckout } from '@/types/types';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { grey } from '@mui/material/colors';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const userId = getCookie('access')!;

export default function Checkout() {
  const router = useRouter();
  const { data: userProfile, isLoading } = useGetUserProfile(userId);
  const { mutate: updateProfile, isSuccess } = useUpdateProfile();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsCheckout>();

  const onSubmit: SubmitHandler<InputsCheckout> = (data) => {
    console.log(data);
    const address = {
      address: data.address,
      city: data.city,
      state: data.state,
      postalCode: data.postalCode,
      phoneNumber: data.phoneNumber,
    };
    updateProfile({ id: userId, address });
    console.log(isSuccess);
    if (isSuccess) {
      console.log('first');
      router.push('/payment');
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <Container sx={{ py: 3 }}>
        <Typography
          variant="h4"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            my: 4,
            bgcolor: grey[300],
            py: 1,
            borderRadius: 5,
          }}
        >
          فرم تکمیل اطلاعات شخصی
        </Typography>
        <Box component="form" dir="rtl" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3} sx={{ direction: 'ltr' }}>
            <FormGrid item xs={12} md={6}>
              <FormLabel htmlFor="first-name" required>
                {pageLevelLocalization.checkout.firstName}
              </FormLabel>
              <TextField
                defaultValue={userProfile?.firstName}
                size="small"
                fullWidth
                id="firstName"
                aria-describedby="firstName"
                error={!!errors.email}
                {...register('firstName', { required: true })}
                helperText={
                  errors.firstName
                    ? `${pageLevelLocalization.checkout.firstName} ${pageLevelLocalization.checkout.error}`
                    : ''
                }
              />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
              <FormLabel htmlFor="last-name" required>
                {pageLevelLocalization.checkout.lastName}
              </FormLabel>
              <TextField
                defaultValue={userProfile?.lastName}
                id="lastName"
                size="small"
                fullWidth
                type="text"
                {...register('lastName', { required: true })}
                error={!!errors.lastName}
                helperText={
                  errors.lastName
                    ? `${pageLevelLocalization.checkout.lastName} ${pageLevelLocalization.checkout.error}`
                    : ''
                }
              />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
              <FormLabel htmlFor="email" required>
                {pageLevelLocalization.checkout.email}
              </FormLabel>
              <TextField
                defaultValue={userProfile?.email}
                id="email"
                size="small"
                fullWidth
                type="email"
                {...register('email', { required: true })}
                error={!!errors.email}
                helperText={
                  errors.email
                    ? `${pageLevelLocalization.checkout.email} ${pageLevelLocalization.checkout.error}`
                    : ''
                }
              />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
              <FormLabel htmlFor="phone-number" required>
                {pageLevelLocalization.checkout.phoneNumber}
              </FormLabel>
              <TextField
                defaultValue={userProfile?.address.phoneNumber}
                id="phone-number"
                size="small"
                fullWidth
                type="number"
                {...register('phoneNumber', { required: true })}
                error={!!errors.phoneNumber}
                helperText={
                  errors.phoneNumber
                    ? `${pageLevelLocalization.checkout.phoneNumber} ${pageLevelLocalization.checkout.error}`
                    : ''
                }
              />
            </FormGrid>
            <FormGrid item xs={12}>
              <FormLabel htmlFor="address1" required>
                {pageLevelLocalization.checkout.address}
              </FormLabel>
              <TextField
                defaultValue={userProfile?.address.address}
                id="address"
                size="small"
                fullWidth
                type="text"
                {...register('address', { required: true })}
                error={!!errors.address}
                helperText={
                  errors.address
                    ? `${pageLevelLocalization.checkout.address} ${pageLevelLocalization.checkout.error}`
                    : ''
                }
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="date-of-registration" required>
                {pageLevelLocalization.checkout.state}
              </FormLabel>
              <TextField
                defaultValue={userProfile?.address.state}
                id="state"
                size="small"
                fullWidth
                type="text"
                {...register('state', { required: true })}
                error={!!errors.state}
                helperText={
                  errors.state
                    ? `${pageLevelLocalization.checkout.state} ${pageLevelLocalization.checkout.error}`
                    : ''
                }
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="date-of-registration" required>
                {pageLevelLocalization.checkout.city}
              </FormLabel>
              <TextField
                defaultValue={userProfile?.address.city}
                id="city"
                size="small"
                fullWidth
                type="text"
                {...register('city', { required: true })}
                error={!!errors.city}
                helperText={
                  errors.city
                    ? `${pageLevelLocalization.checkout.city} ${pageLevelLocalization.checkout.error}`
                    : ''
                }
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="date-of-registration" required>
                {pageLevelLocalization.checkout.postalCode}
              </FormLabel>
              <TextField
                defaultValue={userProfile?.address.postalCode}
                id="postalCode"
                size="small"
                fullWidth
                type="text"
                {...register('postalCode', { required: true })}
                error={!!errors.postalCode}
                helperText={
                  errors.postalCode
                    ? `${pageLevelLocalization.checkout.postalCode} ${pageLevelLocalization.checkout.error}`
                    : ''
                }
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="date-of-registration" required>
                {pageLevelLocalization.checkout.dateOfRegistration}
              </FormLabel>
              <TextField
                defaultValue={today}
                disabled
                id="date"
                size="small"
                fullWidth
                type="date"
                {...register('date')}
                error={!!errors.date}
                helperText={
                  errors.date
                    ? `${pageLevelLocalization.checkout.dateOfRegistration} ${pageLevelLocalization.checkout.error}`
                    : ''
                }
              />
            </FormGrid>

            <FormGrid item xs={12}>
              <Button type="submit" variant="contained">
                ذخیره و پرداخت
              </Button>
            </FormGrid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
