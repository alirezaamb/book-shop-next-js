import { pageLevelLocalization } from "@/constants/localization";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { getCookie } from "cookies-next";
import { useGetUserProfile } from "../hooks";
import { useEffect, useState } from "react";
import { InputsCheckout, UserType } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const userId = getCookie("id");

export default function Checkout() {
  const { data: users } = useGetUserProfile();
  const [userProfile, setUserProfile] = useState<UserType | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsCheckout>();

  const onSubmit: SubmitHandler<InputsCheckout> = (data) => console.log(data);

  useEffect(() => {
    const userProfile = users?.find((user: UserType) => user.id === userId);
    setUserProfile(userProfile);
  }, [users, userId]);

  return (
    <Container sx={{ mt: 12 }}>
      <Box component="form" dir="rtl" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} sx={{ direction: "ltr" }}>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="first-name" required>
              {pageLevelLocalization.checkout.firstName}
            </FormLabel>
            <TextField
              value={userProfile?.firstName}
              size="small"
              fullWidth
              id="firstName"
              aria-describedby="firstName"
              error={!!errors.email}
              {...register("firstName", { required: true })}
              helperText={
                errors.firstName
                  ? `${pageLevelLocalization.checkout.firstName} ${pageLevelLocalization.checkout.error}`
                  : ""
              }
              onChange={(e) => {
                setUserProfile((prevUserProfile) => prevUserProfile? {...prevUserProfile, firstName: e.target.value } : null);
              }}
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="last-name" required>
              {pageLevelLocalization.checkout.lastName}
            </FormLabel>
            <TextField
              value={userProfile?.lastName}
              id="lastName"
              size="small"
              fullWidth
              type="text"
              {...register("lastName", { required: true })}
              error={!!errors.lastName}
              helperText={
                errors.lastName
                  ? `${pageLevelLocalization.checkout.lastName} ${pageLevelLocalization.checkout.error}`
                  : ""
              }
              onChange={(e) => {
                setUserProfile((prevUserProfile) => prevUserProfile? {...prevUserProfile, lastName: e.target.value } : null);
              }}
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="email" required>
              {pageLevelLocalization.checkout.email}
            </FormLabel>
            <TextField
              value={userProfile?.email}
              id="email"
              size="small"
              fullWidth
              type="email"
              {...register("email", { required: true })}
              error={!!errors.email}
              helperText={
                errors.email
                  ? `${pageLevelLocalization.checkout.email} ${pageLevelLocalization.checkout.error}`
                  : ""
              }
              onChange={(e) => {
                setUserProfile((prevUserProfile) => prevUserProfile? {...prevUserProfile, email: e.target.value } : null);
              }}
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="phone-number" required>
              {pageLevelLocalization.checkout.phoneNumber}
            </FormLabel>
            <TextField
              id="phone-number"
              size="small"
              fullWidth
              type="number"
              {...register("phoneNumber", { required: true })}
              error={!!errors.phoneNumber}
              helperText={
                errors.phoneNumber
                  ? `${pageLevelLocalization.checkout.phoneNumber} ${pageLevelLocalization.checkout.error}`
                  : ""
              }
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="address1" required>
              {pageLevelLocalization.checkout.address}
            </FormLabel>
            <TextField
              id="address"
              size="small"
              fullWidth
              type="text"
              {...register("address", { required: true })}
              error={!!errors.address}
              helperText={
                errors.address
                  ? `${pageLevelLocalization.checkout.address} ${pageLevelLocalization.checkout.error}`
                  : ""
              }
            />
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="date-of-registration" required>
              {pageLevelLocalization.checkout.state}
            </FormLabel>
            <TextField
              id="state"
              size="small"
              fullWidth
              type="text"
              {...register("state", { required: true })}
              error={!!errors.state}
              helperText={
                errors.state
                  ? `${pageLevelLocalization.checkout.state} ${pageLevelLocalization.checkout.error}`
                  : ""
              }
            />
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="date-of-registration" required>
              {pageLevelLocalization.checkout.city}
            </FormLabel>
            <TextField
              id="city"
              size="small"
              fullWidth
              type="text"
              {...register("city", { required: true })}
              error={!!errors.city}
              helperText={
                errors.city
                  ? `${pageLevelLocalization.checkout.city} ${pageLevelLocalization.checkout.error}`
                  : ""
              }
            />
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="date-of-registration" required>
              {pageLevelLocalization.checkout.postalCode}
            </FormLabel>
            <TextField
              id="postalCode"
              size="small"
              fullWidth
              type="text"
              {...register("postalCode", { required: true })}
              error={!!errors.postalCode}
              helperText={
                errors.postalCode
                  ? `${pageLevelLocalization.checkout.postalCode} ${pageLevelLocalization.checkout.error}`
                  : ""
              }
            />
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="date-of-registration" required>
              {pageLevelLocalization.checkout.dateOfRegistration}
            </FormLabel>
            <TextField
              id="date"
              size="small"
              fullWidth
              type="date"
              {...register("date", { required: true })}
              error={!!errors.date}
              helperText={
                errors.date
                  ? `${pageLevelLocalization.checkout.dateOfRegistration} ${pageLevelLocalization.checkout.error}`
                  : ""
              }
            />
          </FormGrid>

          <FormGrid item xs={12}>
            <Button
              type="submit"
              sx={{ border: 1, borderRadius: 2, borderColor: "#ffa500" }}
            >
              ذخیره و پرداخت
            </Button>
          </FormGrid>
        </Grid>
      </Box>
    </Container>
  );
}
