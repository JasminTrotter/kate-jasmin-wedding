import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Restaurant from './Restaurant';

export default function RestaurantCategory({ header, restaurants }) {

  return (
    <Accordion sx={{ backgroundColor: '#9995DB', color: 'black', fontWeight: 'bold' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <p style={{ fontSize: 'calc(20px + 2vmin)', padding: '0px', margin: '0px', fontWeight: '400' }}>{header}</p>
      </AccordionSummary>
      <AccordionDetails>
        {restaurants.map(r => <Restaurant title={r.title} menuHighlights={r.menuHighlights} isAllVeg={r.isAllVeg} googleMaps={r.googleMaps} notes={r.notes} hasMulipleLocations={r.hasMulipleLocations} />)}
      </AccordionDetails>
    </Accordion>
  )

}