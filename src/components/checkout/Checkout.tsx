import { pageLevelLocalization } from "@/constants/localization";
import { Button, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function Checkout() {
  return (
    <Grid container spacing={3} sx={{ direction: "ltr" }}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="first-name" required>
          {pageLevelLocalization.checkout.firstName}
        </FormLabel>
        <OutlinedInput id="first-name" name="first-name" type="name" required />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="last-name" required>
          {pageLevelLocalization.checkout.lastName}
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          type="last-name"
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="email" required>
          {pageLevelLocalization.checkout.email}
        </FormLabel>
        <OutlinedInput id="email" name="email" type="email" required />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="phone-number" required>
          {pageLevelLocalization.checkout.phoneNumber}
        </FormLabel>
        <OutlinedInput
          id="phone-number"
          name="phone-number"
          type="number"
          required
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
        <Button sx={{ border: 1, borderRadius: 2, borderColor: "#ffa500" }}>
          ثبت اطلاعات
        </Button>
      </FormGrid>
    </Grid>
  );
}
