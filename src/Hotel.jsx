import { Card, CardHeader, Chip } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import heartHouse from './assets/heart-house.svg';

export default function Hotel({ title, googleMaps, phone, website }) {

  return (
    <Card elevation='24' sx={{ maxWidth: "500px", marginBottom: '25px', padding: '25px', backgroundColor: 'white', borderRadius: '15px' }}>
      <div>
        <img src={heartHouse} alt="heart-house" />
      </div>
      <CardHeader title={title}></CardHeader>

      <div style={{ display: 'flex', overflow: 'scroll' }}>
        <div style={{ textAlign: 'center', margin: 'auto' }}>
          <Chip
            label="Visit Website"
            component="a"
            href={website}
            variant="outlined"
            clickable
            target='_blank'
            icon={<OpenInNewIcon />}
            sx={{ marginLeft: '10px' }}
          />
          <Chip
            icon={<PhoneIcon />}
            label={phone}
            component="a"
            href={'tel:' + phone}
            variant="outlined"
            clickable
            target='_blank'
            sx={{ marginLeft: '15px' }}
          />

        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '25px' }}>
        <td className='google-iframe' dangerouslySetInnerHTML={{ __html: googleMaps }} />
      </div>
    </Card>
  )
}