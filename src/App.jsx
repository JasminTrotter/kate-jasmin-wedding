import weddingBells from './assets/wedding-bells.svg';
import weddingRings from './assets/wedding-rings.svg';
import kiss from './assets/elopement-kiss.jpeg';
import './App.css';
import { Box, Tabs, Tab, Card, Chip } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import { useState } from 'react';
import Restaurant from './Restaurant';
import ItineraryGrid from './ItineraryGrid';
import Hotel from './Hotel';
import { hotels } from './data';
import PhoneIcon from '@mui/icons-material/Phone';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { itineraryRows, brunchRestaurants, dinnerRestaurants, lateNightRestaurants } from './data';

const activeTabStyles = { borderBottom: 1, borderColor: 'divider', backgroundColor: '#34324A', color: 'white' };
const restaurantPanelStyles = { padding: '20px', position: 'relative' };

function App() {
  const [currentTab, updateCurrentTab] = useState('0');
  const [currentRestaurantTab, updateRestaurantTab] = useState('0');

  function handlePageChange(e, newVal) { updateCurrentTab(newVal) }
  function handleRestaurantCategoryChange(e, newVal) {
    window.scrollTo(0, 240);
    updateRestaurantTab(newVal);
  }
  function goToWelcome(e) {
    window.scrollTo(0, 0);
    handlePageChange(undefined, '0')
  }

  return (
    <div className="App">
      {/* cover scrolling under header for restaurants because it looks messy with sub-nav */}
      {currentTab === '2' && <div id="header-background"></div>}
      <a onClick={goToWelcome} style={{}}>
        <header className="App-header">
          <div style={{ display: 'flex' }}>
            <img src={weddingRings} alt="wedding-rings" />
            <p style={{ color: 'black', margin: '0px' }}>Kate & Jasmin</p>
          </div>
        </header>
      </a>
      <TabContext sx={{ padding: '15px' }} value={currentTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'ivory', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}>
          <Tabs onChange={handlePageChange} variant="fullWidth" orientation="vertical" centered value={currentTab} TabIndicatorProps={{
            style: { display: 'none' }
          }}>
            <Tab label="Welcome" value="0" sx={currentTab === '0' && { borderRadius: '15px', ...activeTabStyles }} />
            <Tab label="Accommodations" value="1" sx={currentTab === '1' && { borderRadius: '15px', ...activeTabStyles }} />
            <Tab label="Restaurants" value="2" sx={currentTab === '2' && { borderRadius: '15px', ...activeTabStyles }} />
            <Tab label="Itinerary" value="3" sx={currentTab === '3' && { borderRadius: '15px', ...activeTabStyles }} />
            <Tab label="Contact" value="4" sx={currentTab === '4' && { borderRadius: '15px', ...activeTabStyles }} />
          </Tabs>
        </Box>


        {/* WELCOME */}
        <TabPanel sx={{ padding: '0px', background: 'white', position: 'relative', bottom: '10px', zIndex: '-1' }} value="0">
          <img src={kiss} className="elopement-photo" alt="elopement-shoot" width="100%" maxwidth="575px" />

          <div style={{ marginTop: '25px' }}>
            <img src={weddingBells} alt="wedding-bells" />
          </div>
          <div style={{ padding: '0px 24px 24px 24px' }}>
            <p>
              Welcome to your info site for the <b>Wedding of Kate Bergsgaard and Jasmin Trotter</b>!
              We are thrilled that you could join us for our special day.
            </p>
            <p>
              On this site, you'll find our recommendations for hotels and restaurants in Portland. Simply click on the tabs above to navigate to the information.
            </p>
            <p>
              The <i>Itinerary</i> tab holds a rough plan of the scheduled group activites, which all guests are invited and encouraged to participate.
            </p>
            <p>
              We can't wait to see you in August!
            </p>
          </div>
        </TabPanel>

        {/* ACCOMMODATIONS */}
        <TabPanel value="1" sx={{ maxWidth: '500px', margin: 'auto' }}>
          {hotels.map(h => <Hotel key={h.title} title={h.title} googleMaps={h.googleMaps} phone={h.phone} website={h.website} />)}
        </TabPanel>

        {/* RESTAURANTS */}
        <TabPanel value="2" sx={{ width: '100%', margin: '0px', padding: '0px' }}>
          <TabContext sx={{ padding: '15px' }} value={currentRestaurantTab}>
            <Box sx={{
              borderBottom: 1, backgroundColor: 'ivory', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', position: 'sticky', zIndex: '4',
              top: 'calc(10vh + 40px)'
            }}>
              <Tabs onChange={handleRestaurantCategoryChange} variant="fullWidth" centered value={currentRestaurantTab} TabIndicatorProps={{
                style: { display: 'none' }
              }}>
                <Tab label="Brunch" value="0" sx={currentRestaurantTab === '0' && { ...activeTabStyles, borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                <Tab label="Dinner" value="1" sx={currentRestaurantTab === '1' && { ...activeTabStyles, borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                <Tab label="Late-Night" value="2" sx={currentRestaurantTab === '2' && { ...activeTabStyles, borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
              </Tabs>
              <div style={{ height: '10px', backgroundColor: '#34324A' }}></div>
            </Box>


            {/* BRUNCH */}
            <TabPanel sx={restaurantPanelStyles} value="0">
              {brunchRestaurants.map(r => <Restaurant title={r.title} website={r.website} menuHighlights={r.menuHighlights} isAllVeg={r.isAllVeg} googleMaps={r.googleMaps} notes={r.notes} hasMulipleLocations={r.hasMulipleLocations} />)}
            </TabPanel>

            {/* DINNER */}
            <TabPanel sx={restaurantPanelStyles} value="1">
              {dinnerRestaurants.map(r => <Restaurant title={r.title} website={r.website} menuHighlights={r.menuHighlights} isAllVeg={r.isAllVeg} googleMaps={r.googleMaps} notes={r.notes} hasMulipleLocations={r.hasMulipleLocations} />)}
            </TabPanel>

            {/* LATE-NIGHT */}
            <TabPanel sx={restaurantPanelStyles} value="2">
              {lateNightRestaurants.map(r => <Restaurant title={r.title} website={r.website} menuHighlights={r.menuHighlights} isAllVeg={r.isAllVeg} googleMaps={r.googleMaps} notes={r.notes} hasMulipleLocations={r.hasMulipleLocations} />)}
            </TabPanel>
          </TabContext>
        </TabPanel>

        {/* ITINERARY */}
        <TabPanel value="3" sx={{ maxWidth: '1000px', margin: 'auto' }}>
          <div style={{ paddingTop: '20px' }}>
            {Object.entries(itineraryRows).map(([date, rows]) => <ItineraryGrid rows={rows} date={date} />)}
          </div>
        </TabPanel>

        {/* CONTACT */}
        <TabPanel value="4" sx={{ maxWidth: '500px', margin: 'auto' }}>
          <Card sx={{ marginBottom: '25px', padding: '15px' }}>
            <div style={{ margin: '15px' }}>
              <img src={weddingBells} alt="wedding-bells" />
            </div>

            <p style={{ padding: '15px' }}>
              If you have any questions, comments, or concerns, please reach out any time. We look forward to seeing you in August!
            </p>
            <h3>Jasmin</h3>
            <p>
              <div>
                <Chip
                  icon={<PhoneIcon />}
                  label="323-376-3753"
                  sx={{ marginBottom: '15px' }}
                  component="a"
                  href='tel:323-376-3753'
                />
              </div>
              <div>
                <Chip icon={<MailOutlineIcon />}
                  component="a"
                  label="jasmintmail@gmail.com"
                  href='mailto:jasmintmail@gmail.com'
                  clickable
                  target='_blank'
                />
              </div>

            </p>
            <h3>Kate</h3>
            <div>
              <Chip
                icon={<PhoneIcon />}
                label="503-504-1263"
                sx={{ marginBottom: '15px' }}
                component="a"
                href='tel:503-504-1263'
              />
            </div>
            <div>
              <Chip icon={<MailOutlineIcon />}
                component="a"
                label="katebergie@yahoo.com"
                href='mailto:katebergie@yahoo.com'
                clickable
                target='_blank'
                sx={{ marginBottom: '20px' }}
              />
            </div>

          </Card>
          <Card sx={{ marginBottom: '25px', padding: '15px' }}>
            <h3>Our Home Address</h3>
            <p>6216 SE 67th Ave<br />Portland, OR 97206</p>
            <td className='google-iframe' dangerouslySetInnerHTML={{
              __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.596830037323!2d-122.59678872358963!3d45.4779249325227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0052a741f33%3A0x49fb2491b6d52f8c!2s6216%20SE%2067th%20Ave%2C%20Portland%2C%20OR%2097206!5e0!3m2!1sen!2sus!4v1684726542432!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }} />
          </Card>
          <Card sx={{ marginBottom: '25px', padding: '15px' }}>
            <h3>Wedding Venue</h3>
            <h4>Portland City Grill</h4>
            <p>111 SW 5th Ave 30th Floor<br />Portland, OR 97204</p>
            <div>
              <Chip
                label="Visit Website"
                icon={<OpenInNewIcon />}
                component="a"
                href='https://www.portlandcitygrill.com/location/portland-city-grill/'
                variant="outlined"
                clickable
                target='_blank'
                sx={{ marginBottom: '20px' }}
              />
            </div>
            <td className='google-iframe' dangerouslySetInnerHTML={{
              __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.3968838702153!2d-122.67852242358755!3d45.5222183295655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a06b0fad621%3A0x60ea32db79c16dcc!2sPortland%20City%20Grill!5e0!3m2!1sen!2sus!4v1684726670746!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }} />
            <p><b>Wedding Date: </b>Friday, August 11, 2023, 6pm</p>
          </Card>
        </TabPanel>

        <Chip
          component='button'
          onClick={() => window.scrollTo(0, 0)}
          label='^ Back to Top'
          sx={{ marginBottom: '25px', backgroundColor: 'white' }}
        >
        </Chip>
      </TabContext>
    </div>
  );
}

export default App;
