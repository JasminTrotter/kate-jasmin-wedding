import { Card } from '@mui/material';

export default function Hotel({ title, googleMaps, phone, website }) {

  return (
    <Card sx={{ marginBottom: '10px', padding: '15px' }}>
      <h2>{title}</h2>
      <p>Phone: {phone}</p>
      <a target='_blank' href={website}> Visit Website </a>
      <div style={{ textAlign: 'center', marginTop: '25px' }}>
        <td className='google-iframe' dangerouslySetInnerHTML={{ __html: googleMaps }} />
      </div>
    </Card>
  )
}