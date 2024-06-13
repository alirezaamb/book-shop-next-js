import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      dir="rtl"
      sx={{
        bgcolor: '#FFC14D',
        color: 'black',
        mt: 10,
        py: 6,
        px: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 4,
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: 'bold' }}
              >
                درباره ما
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  href="https://facebook.com"
                  sx={{ color: 'gray.300', '&:hover': { color: '#1877F2' } }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href="https://twitter.com"
                  sx={{ color: 'gray.300', '&:hover': { color: '#1DA1F2' } }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  href="https://instagram.com"
                  sx={{ color: 'gray.300', '&:hover': { color: '#E1306C' } }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href="https://linkedin.com"
                  sx={{ color: 'gray.300', '&:hover': { color: '#0A66C2' } }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
              خوش آمدید به فروشگاه کتاب ما، جایی که ما با افتخار به شما ارائه
              می‌دهیم انواع گسترده‌ای از کتاب‌ها در انواع ژانرها. هدف ما ارائه
              بهترین تجربه خواندن برای شماست.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
              لینک‌های سریع
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'gray.300',
                  '&:hover': { color: 'white' },
                  cursor: 'pointer',
                }}
              >
                صفحه اصلی
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'gray.300',
                  '&:hover': { color: 'white' },
                  cursor: 'pointer',
                  mt: 1,
                }}
              >
                فروشگاه
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'gray.300',
                  '&:hover': { color: 'white' },
                  cursor: 'pointer',
                  mt: 1,
                }}
              >
                درباره
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'gray.300',
                  '&:hover': { color: 'white' },
                  cursor: 'pointer',
                  mt: 1,
                }}
              >
                تماس
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: 'gray.700' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2">
            &copy; 2024 فروشگاه کتاب. تمامی حقوق محفوظ است.
          </Typography>
          <Typography variant="body2">
            خیابان کتاب 123، شهر خواندن | info@bookshop.com | (123) 456-7890
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
