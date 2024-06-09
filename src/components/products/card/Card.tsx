import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BooksEntity } from '@/types/types';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BasicModal from '@/components/shared/modal/Modal';

export default function CardOfBook({ data }: { data: BooksEntity }) {
  const [modal, setModal] = useState({
    isOpen: false,
    message: 'محصول با موفقیت به سبد خرید افزوده شد',
  });
  const { name, price, imgURL, desc, id } = data;
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/products/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="flex flex-col justify-between">
      <CardMedia
        component="img"
        alt="book"
        height="140"
        image={imgURL}
        onClick={handleNavigate}
        className="cursor-pointer"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between px-1">
        <Button
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            fontSize: '16px',
          }}
          onClick={() => setModal((prev) => ({ ...prev, isOpen: true }))}
        >
          خرید
        </Button>
        <Typography fontSize={'large'}>
          {price.toLocaleString('FA')} تومان
        </Typography>
      </CardActions>
      <BasicModal setModal={setModal} modal={modal} />
    </Card>
  );
}
