import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  TextField,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import UploadFileButton from './upload-file-button/UploadFileButton';
import { pageLevelLocalization } from '@/constants/localization';
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { editedProduct, newProduct } from '../../services';
import { AxiosResponse } from 'axios';
import { NewProductType } from '@/types/types';
import { useGetBookById } from '@/components/admin-dashboard/hooks';

interface Inputs {
  name: string;
  author: string;
  translator: string;
  desc: string;
  price: number;
  imgURL: string;
  file: File | undefined;
}
interface AddProductProps {
  editId?: string;
  setEditModal?: (modal: { isOpen: boolean; id: string }) => void;
}

export default function AddProduct({ editId, setEditModal }: AddProductProps) {
  const queryClient = useQueryClient();
  const [img, setImg] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      author: '',
      translator: '',
      desc: '',
      price: 0,
      imgURL: '',
      file: undefined,
    },
  });

  //mutate the new data
  const mutation: UseMutationResult<
    AxiosResponse<any>,
    Error,
    NewProductType
  > = useMutation({
    mutationFn: newProduct,
    mutationKey: ['addBook'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Books'] });
    },
  });

  //mutate the edit data
  const editMutation: UseMutationResult<
    AxiosResponse<any>,
    Error,
    NewProductType
  > = useMutation({
    mutationFn: editedProduct,
    mutationKey: ['editedBook', editId],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Books'] });
    },
  });

  //get data for edit
  const { data } = useGetBookById(editId);
  useEffect(() => {
    if (data) {
      setValue('name', data.name);
      setValue('author', data.author);
      setValue('translator', data.translator);
      setValue('desc', data.desc);
      setValue('price', data.price);
      setImg(data.imgURL);
    }
  }, [data, setValue]);
  //submit handler
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const price = Number(data.price);
    if (editId) {
      editMutation.mutate({
        ...data,
        imgURL: img,
        id: editId!,
        price,
      });
    } else {
      mutation.mutate({
        ...data,
        imgURL: img,
        id: Date.now().toString(),
        price,
      });
    }
    reset();
  };

  //handle the button upload file
  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]!;
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileData = event?.target?.result;
      setImg(fileData as string);
    };
    reader.readAsDataURL(file);
  }

  return (
    <Box sx={{ direction: 'rtl' }}>
      <Card>
        <CardContent sx={{ width: '80%', mx: 'auto' }}>
          <form dir="rtl" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                  htmlFor={pageLevelLocalization.addProduct.name}
                >
                  {pageLevelLocalization.addProduct.name}
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  id={pageLevelLocalization.addProduct.name}
                  aria-describedby={pageLevelLocalization.addProduct.name}
                  {...register('name', { required: true })}
                  error={!!errors.name}
                  helperText={
                    errors.name
                      ? `${pageLevelLocalization.addProduct.name} ${pageLevelLocalization.addProduct.error}`
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                  htmlFor={pageLevelLocalization.addProduct.author}
                >
                  {pageLevelLocalization.addProduct.author}
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  id={pageLevelLocalization.addProduct.author}
                  aria-describedby={pageLevelLocalization.addProduct.author}
                  {...register('author', { required: true })}
                  error={!!errors.author}
                  helperText={
                    errors.author
                      ? `${pageLevelLocalization.addProduct.author} ${pageLevelLocalization.addProduct.error}`
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                  htmlFor={pageLevelLocalization.addProduct.desc}
                >
                  {pageLevelLocalization.addProduct.desc}
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  id={pageLevelLocalization.addProduct.desc}
                  aria-describedby={pageLevelLocalization.addProduct.desc}
                  {...register('desc', { required: true })}
                  error={!!errors.desc}
                  helperText={
                    errors.desc
                      ? `${pageLevelLocalization.addProduct.desc} ${pageLevelLocalization.addProduct.error}`
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                  htmlFor={pageLevelLocalization.addProduct.translator}
                >
                  {pageLevelLocalization.addProduct.translator}
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  id={pageLevelLocalization.addProduct.translator}
                  aria-describedby={pageLevelLocalization.addProduct.translator}
                  {...register('translator', { required: true })}
                  error={!!errors.translator}
                  helperText={
                    errors.translator
                      ? `${pageLevelLocalization.addProduct.translator} ${pageLevelLocalization.addProduct.error}`
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                  htmlFor={pageLevelLocalization.addProduct.price}
                >
                  {pageLevelLocalization.addProduct.price}
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  id={pageLevelLocalization.addProduct.price}
                  aria-describedby={pageLevelLocalization.addProduct.price}
                  type="number"
                  {...register('price', { required: true })}
                  error={!!errors.price}
                  helperText={
                    errors.price
                      ? `${pageLevelLocalization.addProduct.price} ${pageLevelLocalization.addProduct.error}`
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <UploadFileButton handleFile={handleFile} />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'end' }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => {
                    setEditModal({ id: '', isOpen: false });
                  }}
                >
                  ثبت
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
