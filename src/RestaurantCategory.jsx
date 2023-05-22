import { Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import weddingMeal from './assets/wedding-meal.svg';

import Restaurant from './Restaurant';

export default function RestaurantCategory({ header, restaurants }) {

  return (
    <Accordion sx={{ backgroundColor: 'ivory', color: 'black', fontWeight: 'bold' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'ivory' }}>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <img src={weddingMeal} alt="wedding-meal" />
          <p style={{ marginLeft: '15px', fontSize: 'calc(20px + 2vmin)', fontWeight: '400' }}>{header}</p>
        </AccordionSummary>
      </Box>
      <AccordionDetails>
        {restaurants.map(r => <Restaurant title={r.title} website={r.website} menuHighlights={r.menuHighlights} isAllVeg={r.isAllVeg} googleMaps={r.googleMaps} notes={r.notes} hasMulipleLocations={r.hasMulipleLocations} />)}
      </AccordionDetails>
    </Accordion>
  )

}