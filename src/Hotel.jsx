import { Card, CardHeader, Chip } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import weddingArch from './assets/wedding-arch.svg';

export default function Hotel({ title, googleMaps, phone, website }) {

  return (
    <Card elevation='24' sx={{ maxWidth: "500px", marginBottom: '25px', padding: '25px', backgroundColor: 'white' }}>
      <div>
        <img src={weddingArch} alt="wedding-arch" />
      </div>
      <CardHeader title={title}></CardHeader>

      <Chip
        label={phone}
        icon={<PhoneIcon />}
        component="a"
        href={'tel:' + phone}
        variant="outlined"
        clickable
        target='_blank'
        sx={{ marginBottom: '15px' }}
      />
      <div>

        <Chip
          label="Visit Website"
          component="a"
          href={website}
          variant="outlined"
          clickable
          target='_blank'
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '25px' }}>
        <td className='google-iframe' dangerouslySetInnerHTML={{ __html: googleMaps }} />
      </div>
    </Card>
  )
}