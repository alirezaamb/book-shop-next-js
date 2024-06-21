import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AddCardTwoToneIcon from '@mui/icons-material/AddCardTwoTone';
import CheckIcon from '@mui/icons-material/Check';

import Image from 'next/image';
import { pageLevelLocalization } from '@/constants/localization';

const AboutUs = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid
        container
        direction={'column'}
        spacing={3}
        sx={{ margin: '1% 0 0 0', width: '100%' }}
      >
        <Box
          sx={{
            backgroundImage: 'url(photo/Page_19.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            direction: 'ltr',
            padding: '40px',
          }}
        >
          <Grid item xs={12} md={6}>
            <Card sx={{ width: '50%' }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {pageLevelLocalization.aboutUs.aboutOurStore}
                </Typography>
                <Typography>
                  {pageLevelLocalization.aboutUs.describeAboutUs}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            bgcolor: '#FFC14D',
            padding: '3%',
            height: '30%',
          }}
        >
          <Card
            sx={{
              width: '30%',
              height: '10%',
              marginTop: '3%',
              paddingX: '9%',
              marginX: '1%',
              marginRight: '3%',
            }}
          >
            <CardContent sx={{ display: 'flex', gap: '7%' }}>
              <Typography>روش ارسال</Typography>
              <ShoppingCartTwoToneIcon sx={{ color: '#FFC14D' }} />
            </CardContent>
          </Card>
          <Card
            sx={{
              width: '30%',
              height: '10%',
              marginTop: '3%',
              paddingX: '7%',
              marginX: '1%',
            }}
          >
            <CardContent sx={{ display: 'flex', gap: '7%' }}>
              <Typography>
                {pageLevelLocalization.aboutUs.buyWithShetab}
              </Typography>
              <AddCardTwoToneIcon sx={{ color: '#FFC14D' }} />
            </CardContent>
          </Card>
          <Card
            sx={{
              width: '30%',
              height: '10%',
              marginTop: '3%',
              paddingX: '8%',
              marginX: '1%',
            }}
          >
            <CardContent sx={{ display: 'flex', gap: '7%' }}>
              <Typography>
                {pageLevelLocalization.aboutUs.warrantySending}
              </Typography>
              <CheckIcon sx={{ color: '#FFC14D' }} />
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            backgroundColor: 'black',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            direction: 'ltr',
            padding: '40px',
            display: 'flex',
            gap: '15%',
            width: '100%',
          }}
        >
          <Image
            src="/photo/Page_18.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <Grid item xs={12} md={6}>
            <Card sx={{ width: '80%', marginTop: '20%' }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {pageLevelLocalization.aboutUs.socialResponsibility}
                </Typography>

                <Typography sx={{ textAlign: 'justify' }}>
                  {pageLevelLocalization.aboutUs.detailsResponsibilityL}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Box>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                {pageLevelLocalization.aboutUs.joinToOurClub}
              </Typography>
              <Typography variant="body2" align="center">
                {pageLevelLocalization.aboutUs.knowAboutOurDiscountJoinUs}
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="آدرس ایمیل شما"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone number"
                  label="شماره تلفن شما"
                  type="number"
                  id="phone number"
                  autoComplete="current-number"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {pageLevelLocalization.aboutUs.signUp}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
