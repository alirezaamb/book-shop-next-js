import { useClearCart } from '@/api/cart/cart.queries';
import { useAddOrder } from '@/api/orders/order.queries';
import { useEditBook, useGetBooks } from '@/api/products/products.queries';
import { useGetUserProfile } from '@/api/userInfo/userInfo.queries';
import { BooksEntity } from '@/types/types';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import SimCardRoundedIcon from '@mui/icons-material/SimCardRounded';
import {
  Box,
  Button,
  FormLabel,
  OutlinedInput,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function Payment() {
  const userId = getCookie('access')!;
  const { data } = useGetUserProfile(userId);
  const { mutate: addNewOrder } = useAddOrder();
  const { mutate: clearCart } = useClearCart();
  const { data: getAllBooks } = useGetBooks();
  const { mutate: updateBooks } = useEditBook();
  const router = useRouter();

  const getUpdatedBooksInventory = () => {
    const filteredOriginalBooks = getAllBooks.filter((book: BooksEntity) =>
      data?.cart?.some((item: Partial<BooksEntity>) => item.id === book.id)
    );

    return filteredOriginalBooks.map((book: BooksEntity) => {
      const found = data?.cart?.find(
        (item: Partial<BooksEntity>) => item.id === book.id
      );

      return {
        ...book,
        inventory: book.inventory - (found?.quantity || 0),
        salesAmount: book.salesAmount + (found?.quantity || 0),
      };
    });
  };

  const submitTheOrderHandler = () => {
    addNewOrder({
      userId,
      books: data?.cart,
      delivered: false,
    });
    updateBooks(getUpdatedBooksInventory());
    clearCart(userId);
    window.location.href = '/';
  };

  return (
    <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '70%',
          margin: '5%',
          marginX: '15%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: 3,
            height: '20%',
            width: '100%',
            borderRadius: '20px',
            border: '1px solid ',
            borderColor: 'divider',
            backgroundColor: 'background.paper',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle2">کارت بانکی</Typography>
            <CreditCardRoundedIcon sx={{ color: 'text.secondary' }} />
          </Box>
          <SimCardRoundedIcon
            sx={{
              fontSize: { xs: 48, sm: 56 },
              transform: 'rotate(90deg)',
              color: 'text.secondary',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
              direction: 'ltr',
            }}
          >
            <FormGrid sx={{ flexGrow: 1 }}>
              <FormLabel
                htmlFor="card-number"
                required
                sx={{ marginBottom: '2%' }}
              >
                شماره کارت
              </FormLabel>
              <OutlinedInput
                sx={{ borderRadius: '10px' }}
                id="card-number"
                autoComplete="card-number"
                placeholder="0000 0000 0000 0000"
                required
              />
            </FormGrid>
            <FormGrid>
              <FormLabel htmlFor="cvv" required sx={{ margin: '2% 0' }}>
                شماره شناسایی دوم (cvv2)
              </FormLabel>
              <OutlinedInput
                sx={{ borderRadius: '10px' }}
                id="cvv"
                autoComplete="CVV"
                placeholder="123"
                required
              />
            </FormGrid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: 2,
              direction: 'ltr',
              alignItems: 'flex-end',
              margin: '2% 0',
            }}
          >
            <FormGrid sx={{ flexGrow: 1 }}>
              <FormLabel
                sx={{ margin: '2% 0' }}
                htmlFor="card-expiration"
                required
              >
                تاریخ انقضا
              </FormLabel>
              <OutlinedInput
                sx={{ borderRadius: '10px' }}
                id="card-expiration"
                autoComplete="card-expiration"
                placeholder="ماه"
                required
              />
            </FormGrid>
            <FormGrid sx={{ flexGrow: 1 }}>
              <FormLabel htmlFor="card-expiration"> </FormLabel>
              <OutlinedInput
                sx={{ borderRadius: '10px' }}
                id="card-expiration"
                autoComplete="card-expiration"
                placeholder="سال"
                required
              />
            </FormGrid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: 2,
              direction: 'ltr',
              alignItems: 'flex-end',
            }}
          >
            <FormGrid sx={{ flexGrow: 1 }}>
              <FormLabel
                htmlFor="security-code"
                required
                sx={{ margin: '2% 0' }}
              >
                کد امنیتی
              </FormLabel>
              <OutlinedInput
                sx={{ borderRadius: '10px' }}
                id="security-code"
                autoComplete="security-code"
                required
              />
            </FormGrid>
            <FormGrid sx={{ flexGrow: 1 }}>
              <Button
                sx={{
                  padding: '1.5% 0',
                  width: '40%',
                  color: 'rgb(55 145 171)',
                  fontSize: '25px',
                  background: '#c9ccc170',
                }}
              >
                845924
              </Button>
            </FormGrid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: 2,
              direction: 'ltr',
              alignItems: 'flex-end',
              margin: '2% 0',
            }}
          >
            <FormGrid sx={{ flexGrow: 1 }}>
              <FormLabel
                sx={{ margin: '2% 0' }}
                htmlFor="card-expiration"
                required
              >
                رمز دوم
              </FormLabel>
              <OutlinedInput
                sx={{ borderRadius: '10px' }}
                id="card-expiration"
                autoComplete="card-expiration"
                placeholder="رمز دوم"
                required
              />
            </FormGrid>
            <Button
              sx={{
                padding: '1.5% 0',
                width: '20%',
                color: 'white',
                fontSize: '16px',
                background: 'rgb(55 145 171)',
                ':hover': {
                  background: 'white',
                  color: 'rgb(55 145 171)',
                  borderRadius: '50px',
                  border: 'solid 1px rgb(55 145 171)',
                },
              }}
            >
              درخواست رمز پویا
            </Button>
          </Box>
        </Box>
        <Button
          sx={{
            padding: '1% 0',
            width: '100%',
            color: 'white',
            fontSize: '16px',
            background: 'rgb(55 145 171)',
            ':hover': {
              background: 'white',
              color: 'rgb(55 145 171)',
              borderRadius: '50px',
              border: 'solid 1px rgb(55 145 171)',
            },
          }}
          onClick={submitTheOrderHandler}
        >
          پرداخت
        </Button>
      </Box>
    </Stack>
  );
}
