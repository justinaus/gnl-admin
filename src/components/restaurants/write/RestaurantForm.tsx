import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
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

  const { control, getValues, setValue } = reactHookForm;

  const name = useWatch({
    control,
    name: 'name',
  });
  const naverId = useWatch({
    control,
    name: 'naverId',
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
    if (!name || !lat || !lng || !naverId) return false;
    return true;
  }, [lat, lng, name, naverId]);

  const handleAdd = useCallback(() => {
    onSubmit(getValues());
  }, [getValues, onSubmit]);

  const handleGetLatLngByNaverId = useCallback(async () => {
    const { data } = await axios.get(
      `https://map.naver.com/v5/api/sites/summary/${naverId}`,
    );

    if (!data) {
      alert('failed');
      return;
    }

    if (data.x) {
      setValue('latLng.lng', data.x);
    }

    if (data.y) {
      setValue('latLng.lat', data.y);
    }
  }, [naverId, setValue]);

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
            name="naverId"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextField
                label="naverId *"
                variant="outlined"
                {...field}
                sx={{
                  flex: 1,
                }}
              />
            )}
          />
          <Button
            disabled={!naverId}
            variant="outlined"
            onClick={handleGetLatLngByNaverId}
          >
            get lat lng
          </Button>
        </Stack>
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
                placeholder="37"
                fullWidth
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
                placeholder="127"
                fullWidth
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
