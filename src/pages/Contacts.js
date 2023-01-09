import Filter from 'components/Filter';
import Form from '../components/Form';
import ContactsList from '../components/ContactsList';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const CustomBox = styled(Box)`
  max-width: 400px;
  margin: 25px auto 0;
  padding: 15px;
  background-image: linear-gradient(
    rgba(200, 200, 200, 0.7),
    rgba(200, 200, 200, 0.7)
  );
  border-radius: 10px;
`;

export default function Contacts() {
  return (
    <CustomBox sx={{ pt: '20px' }}>
      <Typography component="h2" variant="" sx={{ mb: '10px' }}>
        Phonebook
      </Typography>
      <Form />

      <Typography component="h2" variant="" sx={{ mb: '10px', mt: '20px' }}>
        Contacts
      </Typography>
      <Filter />
      <ContactsList />
    </CustomBox>
  );
}
