import { Card } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import weddingToast from './assets/wedding-toast.svg';

export default function Restaurant({ title, menuHighlights, isAllVeg, googleMaps, hasMulipleLocations, notes, website }) {

  return (
    <Card elevation='24' sx={{ marginBottom: '20px', padding: '40px 15px 15px 15px', borderRadius: '15px' }}>
      <Typography variant="h5" gutterBottom component="div">
        {title}
      </Typography>
      <Chip
        label="Visit Website"
        component="a"
        href={website}
        variant="outlined"
        clickable
        target='_blank'
        sx={{ margin: '10px' }}
      />
      <p style={{ color: '#8F8345' }}><i>{notes && `NOTE: ${notes}`}</i></p>

      {hasMulipleLocations && <div style={{ color: 'black', marginBottom: '10px' }}>This restaurant has multiple locations. Please check google for the other ones</div>}

      <div style={{ textAlign: 'center' }}>
        <td className='google-iframe' dangerouslySetInnerHTML={{ __html: googleMaps }} />
      </div>
      <Chip
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
      <div style={{ margin: '20px' }}>
        <img src={weddingToast} alt="wedding-toast" />
      </div>

    </Card>
  )
}