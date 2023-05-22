import { Card, CardHeader, Chip } from '@mui/material';
import weddingArch from './assets/wedding-arch.svg';

export default function Hotel({ title, googleMaps, phone, website }) {

  return (
    <Card elevation='24' sx={{ maxWidth: "500px", marginBottom: '25px', padding: '25px', backgroundColor: 'white' }}>
      <div>
        <img src={weddingArch} alt="wedding-arch" />
      </div>
      <CardHeader title={title}></CardHeader>
      <p>Phone: {phone}</p>
      <Chip
        label="Visit Website"
        component="a"
        href={website}
        variant="outlined"
        clickable
        target='_blank'
      />
      <div style={{ textAlign: 'center', marginTop: '25px' }}>
        <td className='google-iframe' dangerouslySetInnerHTML={{ __html: googleMaps }} />
      </div>
    </Card>
  )
}