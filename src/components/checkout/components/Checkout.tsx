import { pageLevelLocalization } from "@/constants/localization";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
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
      <Grid container spacing={3} sx={{ direction: "ltr" }}>
        <FormGrid item xs={12} md={6} onSubmit={handleSubmit(onSubmit)}>
          <FormLabel htmlFor="first-name" required>
            {pageLevelLocalization.checkout.firstName}
          </FormLabel>
          <OutlinedInput
            {...register("firstName", { required: true })}
            value={userProfile?.firstName}
            id="first-name"
            name="first-name"
            type="name"
            required
          />
         
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormLabel htmlFor="last-name" required>
            {pageLevelLocalization.checkout.lastName}
          </FormLabel>
          <OutlinedInput
            {...register("lastName", { required: true })}
            value={userProfile?.lastName}
            id="last-name"
            name="last-name"
            type="last-name"
            required
          />
          error={!!errors.lastName}
          {errors.lastName && <Box>This field is required</Box>}
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormLabel htmlFor="email" required>
            {pageLevelLocalization.checkout.email}
          </FormLabel>
          <OutlinedInput
            {...register("email", { required: true })}
            value={userProfile?.email}
            id="email"
            name="email"
            type="email"
            required
          />
          {errors.email && <Box>This field is required</Box>}
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormLabel htmlFor="phone-number" required>
            {pageLevelLocalization.checkout.phoneNumber}
          </FormLabel>
          <TextField
            {...register("phoneNumber", { required: true })}
            id="phone-number"
            name="phone-number"
            type="number"
            required
            error={!!errors.phoneNumber}
            helperText={
              errors.phoneNumber
                ? `${pageLevelLocalization.addProduct.author} ${pageLevelLocalization.addProduct.error}`
                : ""
            }
          />
        </FormGrid>
        <FormGrid item xs={12}>
          <FormLabel htmlFor="address1" required>
            {pageLevelLocalization.checkout.address}
          </FormLabel>
          <OutlinedInput id="address" name="address" type="address" required />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="date-of-registration" required>
            {pageLevelLocalization.checkout.state}
          </FormLabel>
          <OutlinedInput id="state" name="state" type="state" required />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="date-of-registration" required>
            {pageLevelLocalization.checkout.city}
          </FormLabel>
          <OutlinedInput id="city" name="city" type="city" required />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="date-of-registration" required>
            {pageLevelLocalization.checkout.postalCode}
          </FormLabel>
          <OutlinedInput
            id="postal-code"
            name="postal-code"
            type="number"
            required
          />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="date-of-registration" required>
            {pageLevelLocalization.checkout.dateOfRegistration}
          </FormLabel>
          <OutlinedInput id="date" name="date" type="date" required />
        </FormGrid>
        <FormGrid item xs={12}>
          <FormControlLabel
            control={<Checkbox name="saveAddress" value="yes" />}
            label={pageLevelLocalization.checkout.textLabel}
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
    </Container>
  );
}
