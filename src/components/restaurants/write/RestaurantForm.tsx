import { Button, Stack, TextField } from '@mui/material';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface IForm {
  name: string;
  // latLng: {
  //   lat: string;
  //   lng: string;
  // };
  point: string;
  // content: string;
  // link?: {
  //   mangpl?: string;
  //   naver?: string;
  //   micherin?: string;
  //   blueribbon?: string;
  // };
  // emoji: string;
  // hashtags?: string[];
}

type Props = {
  defaultValues?: IForm;
};

export default function RestaurantForm({ defaultValues }: Props) {
  const reactHookForm = useForm<IForm>({
    defaultValues: defaultValues
      ? { ...defaultValues }
      : {
          name: '',
          point: '',
        },
  });

  const { control, getValues } = reactHookForm;

  const handleAdd = useCallback(() => {
    console.log(getValues());
  }, [getValues]);

  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextField label="name *" variant="outlined" {...field} />
          )}
        />
        <Controller
          name="point"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextField
              label="point *"
              variant="outlined"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 5 } }}
              {...field}
            />
          )}
        />
      </Stack>
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Stack>
  );
}
