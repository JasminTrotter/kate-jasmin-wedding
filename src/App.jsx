import weddingBells from './assets/wedding-bells.svg';
import weddingRings from './assets/wedding-rings.svg';
import kiss from './assets/elopement-kiss.jpeg';
import './App.css';
import { Box, Tabs, Tab, Card, Chip } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import { useState } from 'react';
import RestaurantCategory from './RestaurantCategory';
import ItineraryGrid from './ItineraryGrid';
import Hotel from './Hotel';
import { hotels } from './data';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { thursItineraryRows, friItineraryRows, brunchRestaurants, dinnerRestaurants, lateNightRestaurants } from './data';

const activeTabStyles = { borderRadius: '15px', borderBottom: 1, borderColor: 'divider', backgroundColor: '#34324A', color: 'white' };

function App() {
  const [currentTab, updateCurrentTab] = useState('0');

  function handleTabChange(e, newVal) { updateCurrentTab(newVal) }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <img src={weddingRings} alt="wedding-rings" />
          <p style={{ color: 'black', margin: '0px' }}>Kate & Jasmin</p>
        </div>
      </header>
      <TabContext sx={{ padding: '15px' }} value={currentTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'ivory' }}>
          <Tabs onChange={handleTabChange} variant="fullWidth" orientation="vertical" centered value={currentTab} TabIndicatorProps={{
            style: { display: 'none' }
          }}>
            <Tab label="Welcome" value="0" sx={currentTab === '0' && activeTabStyles} />
            <Tab label="Accommodations" value="1" sx={currentTab === '1' && activeTabStyles} />
            <Tab label="Restaurants" value="2" sx={currentTab === '2' && activeTabStyles} />
            <Tab label="Itinerary" value="3" sx={currentTab === '3' && activeTabStyles} />
            <Tab label="Contact" value="4" sx={currentTab === '4' && activeTabStyles} />
          </Tabs>
        </Box>


        {/* WELCOME */}
        <TabPanel sx={{ padding: '0px', background: 'white' }} value="0">
          <img src={kiss} className="elopement-photo" alt="elopement-shoot" width="100%" maxwidth="575px" />

          <div style={{ marginTop: '25px' }}>
            <img src={weddingBells} alt="wedding-bells" />
          </div>
          <div style={{ padding: '0px 24px 24px 24px' }}>
            <p>
              Welcome to our info site for the <b>Wedding of Kate Bergsgaard and Jasmin Trotter</b>!
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
        <TabPanel value="1" sx={{ backgroundColor: 'transparent' }}>
          {hotels.map(h => <Hotel key={h.title} title={h.title} googleMaps={h.googleMaps} phone={h.phone} website={h.website} />)}
        </TabPanel>

        {/* RESTAURANTS */}
        <TabPanel value="2" sx={{ backgroundColor: 'transparent' }}>
          <RestaurantCategory header="Brunch" restaurants={brunchRestaurants} />
          <RestaurantCategory header="Dinner" restaurants={dinnerRestaurants} />
          <RestaurantCategory header="Late-Night" restaurants={lateNightRestaurants} />
        </TabPanel>

        {/* ITINERARY */}
        <TabPanel sx={{ backgroundColor: 'transparent' }} value="3">
          <div style={{ paddingTop: '20px' }}>
            <ItineraryGrid rows={thursItineraryRows} date="Thursday, August 10" />
            <ItineraryGrid rows={friItineraryRows} date="Friday, August 11" />
          </div>
        </TabPanel>

        {/* CONTACT */}
        <TabPanel value="4">
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
                label="katebergie@gmail.com"
                href='mailto:katebergie@gmail.com'
                clickable
                target='_blank'
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
            <Chip
              label="Visit Website"
              component="a"
              href='https://www.portlandcitygrill.com/location/portland-city-grill/'
              variant="outlined"
              clickable
              target='_blank'
              sx={{ marginBottom: '20px' }}
            />
            <td className='google-iframe' dangerouslySetInnerHTML={{
              __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.3968838702153!2d-122.67852242358755!3d45.5222183295655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a06b0fad621%3A0x60ea32db79c16dcc!2sPortland%20City%20Grill!5e0!3m2!1sen!2sus!4v1684726670746!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }} />
            <p><b>Wedding Date: </b>Friday, August 11, 2023, 6pm</p>
          </Card>
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default App;
