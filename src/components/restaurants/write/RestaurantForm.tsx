import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';

import { DEFAULT_RESTAURANT_FORM_VALUES, IRestaurantForm } from './helpers';

type Props = {
  defaultValues?: IRestaurantForm;
  onSubmit: (values: IRestaurantForm) => void;
};

export default function RestaurantForm({ defaultValues, onSubmit }: Props) {
  const reactHookForm = useForm<IRestaurantForm>({
    defaultValues: defaultValues
      ? { ...defaultValues }
      : DEFAULT_RESTAURANT_FORM_VALUES,
  });

  const { control, getValues } = reactHookForm;

  const name = useWatch({
    control,
    name: 'name',
  });
  const lat = useWatch({
    control,
    name: 'latLng.lat',
  });
  const lng = useWatch({
    control,
    name: 'latLng.lng',
  });

  const isValid = useMemo(() => {
    if (!name || !lat || !lng) return false;
    return true;
  }, [lat, lng, name]);

  const handleAdd = useCallback(() => {
    onSubmit(getValues());
  }, [getValues, onSubmit]);

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
        <Stack direction={'row'} spacing={1}>
          <Controller
            name="latLng.lat"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextField
                label="lat *"
                variant="outlined"
                type="number"
                fullWidth
                InputProps={{ inputProps: { min: 0, max: 30 } }}
                {...field}
              />
            )}
          />
          <Controller
            name="latLng.lng"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextField
                label="lng *"
                variant="outlined"
                type="number"
                fullWidth
                InputProps={{ inputProps: { min: 0, max: 30 } }}
                {...field}
              />
            )}
          />
        </Stack>
        <Controller
          name="point"
          control={control}
          render={({ field }) => (
            <TextField
              label="point"
              variant="outlined"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 5 } }}
              {...field}
            />
          )}
        />
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextField
              label="content"
              variant="outlined"
              multiline
              {...field}
            />
          )}
        />
        <Controller
          name="emoji"
          control={control}
          render={({ field }) => (
            <TextField label="emoji" variant="outlined" {...field} />
          )}
        />
        <Controller
          name="hashtags"
          control={control}
          render={({ field }) => (
            <TextField
              label="hashtags"
              variant="outlined"
              placeholder="미쉐린 블루리본 수요미식회 식권대장"
              {...field}
            />
          )}
        />
      </Stack>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{
            marginBottom: 2,
          }}
        >
          Links
        </Typography>
        <Stack spacing={2}>
          <Controller
            name="link.mangpl"
            control={control}
            render={({ field }) => (
              <TextField label="mangpl" variant="outlined" {...field} />
            )}
          />
          <Controller
            name="link.naver"
            control={control}
            render={({ field }) => (
              <TextField label="naver" variant="outlined" {...field} />
            )}
          />
          <Controller
            name="link.micherin"
            control={control}
            render={({ field }) => (
              <TextField label="micherin" variant="outlined" {...field} />
            )}
          />
          <Controller
            name="link.blueribbon"
            control={control}
            render={({ field }) => (
              <TextField label="blueribbon" variant="outlined" {...field} />
            )}
          />
        </Stack>
      </Box>
      <Button variant="contained" onClick={handleAdd} disabled={!isValid}>
        Submit
      </Button>
    </Stack>
  );
}
