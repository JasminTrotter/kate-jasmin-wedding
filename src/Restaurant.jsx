import { Card } from '@mui/material';

export default function Restaurant({ title, menuHighlights, isAllVeg, googleMaps, hasMulipleLocations, notes }) {

  return (
    <Card sx={{ marginBottom: '10px', padding: '15px' }}>
      <h2>{title}</h2>
      {notes && <p style={{ color: '#8F8345' }}><i>NOTE: {notes}</i></p>}
      <p><b>Menu Highlights: </b>{menuHighlights}</p>
      <p><b>Dietary: </b>{isAllVeg ? 'All Vegan or Vegetarian!' : 'Meat, Vegan/Veggie Options'}</p>
      {hasMulipleLocations && <div style={{ color: '#56538F', marginBottom: '10px' }}>This restaurant has multiple locations. Please check google for the other ones</div>}
      <div style={{ textAlign: 'center' }}>

        <td className='google-iframe' dangerouslySetInnerHTML={{ __html: googleMaps }} />
      </div>
    </Card>
  )
}