import { Card } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import weddingFlowers from './assets/wedding-flowers.svg';

export default function Restaurant({ title, menuHighlights, isAllVeg, googleMaps, hasMulipleLocations, notes }) {

  return (
    <Card sx={{ marginBottom: '50px', padding: '15px', borderRadius: '15px' }}>
      <h2>{title}</h2>
      {notes && <p style={{ color: '#8F8345' }}><i>NOTE: {notes}</i></p>}

      {hasMulipleLocations && <div style={{ color: 'black', marginBottom: '10px' }}>This restaurant has multiple locations. Please check google for the other ones</div>}

      <div style={{ textAlign: 'center' }}>
        <td className='google-iframe' dangerouslySetInnerHTML={{ __html: googleMaps }} />
      </div>

      {/* <TableContainer component={Paper}>
        <Table aria-label="collapsible table" sx={{ boxShadow: 'none' }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'ivory' }}>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 'medium' }}>Menu Highlights</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 'medium' }}>Dietary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>{menuHighlights}</TableCell>
            <TableCell>{isAllVeg ? 'All Vegan or Vegetarian!' : 'Meat, Vegan/Veggie Options'}</TableCell>
          </TableBody>
        </Table>
      </TableContainer> */}
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
      <div style={{ marginTop: '20px' }}>

        <img src={weddingFlowers} alt="wedding-bells" />
      </div>

    </Card>
  )
}