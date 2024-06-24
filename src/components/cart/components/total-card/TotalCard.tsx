import { pageLevelLocalization } from '@/constants/localization';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const TotalCard = ({ totalPrice }: { totalPrice: number }) => {
  const router = useRouter();
  const hasLogin = hasCookie('access');
  const handleTocheckout = () => {
    router.push(hasLogin ? '/checkout' : '/auth');
  };

  return (
    <Card sx={{ width: 400, height: 'fit-Content' }} dir="rtl">
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <TextField
            variant="outlined"
            label="کد تخفیف را وارد کنید"
            size="small"
          />
          <Button variant="contained">
            {pageLevelLocalization.cart.submit}
          </Button>
        </Box>
        <Divider sx={{ bgcolor: grey[300], mt: '14px' }} />
      </CardContent>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="secondary">
            {pageLevelLocalization.cart.totalPrice} :
          </Typography>
          <Typography variant="body2" color="secondary">
            {totalPrice?.toLocaleString('fa')}{' '}
            {pageLevelLocalization.cart.toman}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="secondary">
            {pageLevelLocalization.cart.discount} :
          </Typography>
          <Typography variant="body2" color="secondary">
            {(0).toLocaleString('fa')} {pageLevelLocalization.cart.toman}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">
            {pageLevelLocalization.cart.amountPayable}:
          </Typography>
          <Typography variant="body2">
            {totalPrice?.toLocaleString('fa')}{' '}
            {pageLevelLocalization.cart.toman}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{ width: '100%' }}
          onClick={handleTocheckout}
        >
          {pageLevelLocalization.cart.finalThePurchase}
        </Button>
      </CardActions>
    </Card>
  );
};

export default TotalCard;
