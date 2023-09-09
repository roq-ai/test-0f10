import * as yup from 'yup';

export const activityValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  customer_id: yup.string().nullable().required(),
});
