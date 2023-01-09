import Filter from 'components/Filter';
import Form from '../components/Form';
import ContactsList from '../components/ContactsList';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const CustomBox = styled(Box)`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
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
