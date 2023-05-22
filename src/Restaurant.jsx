import { Card } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Restaurant({ title, menuHighlights, isAllVeg, googleMaps, hasMulipleLocations, notes }) {

  return (
    <Card sx={{ marginBottom: '10px', padding: '15px', backgroundColor: '#CAC7FF' }}>
      <h2>{title}</h2>
      {notes && <p style={{ color: '#8F8345' }}><i>NOTE: {notes}</i></p>}

      {hasMulipleLocations && <div style={{ color: 'black', marginBottom: '10px' }}>This restaurant has multiple locations. Please check google for the other ones</div>}

      <div style={{ textAlign: 'center' }}>
        <td className='google-iframe' dangerouslySetInnerHTML={{ __html: googleMaps }} />
      </div>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#34324A', color: 'white' }}>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 'medium' }}>Menu Highlights</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 'medium' }}>Dietary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>{menuHighlights}</TableCell>
            <TableCell>{isAllVeg ? 'All Vegan or Vegetarian!' : 'Meat, Vegan/Veggie Options'}</TableCell>
          </TableBody>
        </Table>
      </TableContainer>

    </Card>
  )
}