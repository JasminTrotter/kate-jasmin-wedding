import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Chip from '@mui/material/Chip';
import weddingToast from './assets/wedding-toast.svg';

export default function Restaurant({ title, menuHighlights, isAllVeg, googleMaps, hasMulipleLocations, notes, website }) {

  return (
    <Card elevation='24' sx={{ padding: '40px 15px 15px 15px', borderRadius: '15px', maxWidth: '500px', margin: '25px auto', zIndex: '3' }}>
      <Typography variant="h5" gutterBottom component="div">
        {title}
      </Typography>
      <div style={{ textAlign: 'center' }}>

        <Chip
          variant='outlined'
          sx={{
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
            padding: '10px',
            margin: '5px',
            backgroundColor: '#FFF9E3'
          }}
          label={'Menu Highlights: ' + menuHighlights}
        />
        <Chip
          variant='outlined'
          sx={{
            margin: '5px',
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
            padding: '10px',
            backgroundColor: (isAllVeg ? '#B5CCAB' : '#FFD7D6')
          }}
          label={isAllVeg ? 'All Vegan or Vegetarian!' : 'Meat, Vegan/Veggie Options'}
        />
        <Chip
          label="Visit Website"
          component="a"
          href={website}
          variant="outlined"
          clickable
          target='_blank'
          icon={<OpenInNewIcon />}
          sx={{
            margin: '10px'
          }}
        />
      </div>
      <p style={{ color: '#34324A' }}><b><i>{notes && `-- NOTE: ${notes} --`}</i></b></p>

      {hasMulipleLocations && <div style={{ color: 'black', marginBottom: '10px' }}>This restaurant has multiple locations. Please check google for the other ones</div>}

      <div style={{ textAlign: 'center' }}>
        <td className='google-iframe' dangerouslySetInnerHTML={{ __html: googleMaps }} />
      </div>
      <div style={{ margin: '20px' }}>
        <img src={weddingToast} alt="wedding-toast" />
      </div>

    </Card>
  )
}