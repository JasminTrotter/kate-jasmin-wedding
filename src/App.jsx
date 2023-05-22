import weddingBells from './assets/wedding-bells.svg';
import weddingRings from './assets/wedding-rings.svg';
import './App.css';
import { Box, Tabs, Tab } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import { useState } from 'react';
import RestaurantCategory from './RestaurantCategory';
import ItineraryGrid from './ItineraryGrid';
import { thursItineraryRows, friItineraryRows } from './data';

const activeTabStyles = { borderRadius: '15px', borderBottom: 1, borderColor: 'divider', backgroundColor: '#34324A', color: 'white' };

function App() {
  const [currentTab, updateCurrentTab] = useState('0');

  function handleTabChange(e, newVal) { updateCurrentTab(newVal) }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <img src={weddingRings} className="App-logo" alt="wedding-rings" />
          <p style={{ color: 'black' }}>Kate & Jasmin</p>
        </div>
      </header>
      <TabContext sx={{ padding: '15px' }} value={currentTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
        <TabPanel value="0">
          <img src={weddingBells} className="App-logo" alt="wedding-bells" />
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
        </TabPanel>

        {/* ACCOMMODATIONS */}
        <TabPanel value="1">

        </TabPanel>

        {/* RESTAURANTS */}
        <TabPanel value="2">
          <h2>Some of our favorite restaurants:</h2>
          <RestaurantCategory header="Brunch" restaurants={[
            {
              title: 'The Hazel Room',
              notes: 'Long wait times',
              menuHighlights: 'Biscuit Benedict, French Toast, Vegan Scramble',
              isAllVeg: false,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.8921239786196!2d-122.63362852374036!3d45.51225017107478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a091be2d277d%3A0xb8409390813019a!2sThe%20Hazel%20Room!5e0!3m2!1sen!2sus!4v1684615979788!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: 'Off The Griddle',
              notes: 'Long wait times',
              menuHighlights: 'Full Mess (eggs or tofu, hashbrowns, sausage, hollandaise), Meatloaf Benedict, Waffles',
              isAllVeg: true,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.054643099248!2d-122.59787552374159!3d45.48884437107448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0e419b8689d%3A0x874c9670a0b0be9e!2sOff%20The%20Griddle!5e0!3m2!1sen!2sus!4v1684615049424!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: 'Pine State Biscuits',
              notes: 'Long wait times',
              menuHighlights: 'Veggie Reggie (vegan sausage patty, tofu bacon, topped with shitake mushroom gravy)',
              isAllVeg: false,
              hasMulipleLocations: true,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22365.37180358057!2d-122.64933415283241!3d45.51669157975295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a09347a627dd%3A0x5d8b5317b5535b9a!2sPine%20State%20Biscuits%20%7C%20Division!5e0!3m2!1sen!2sus!4v1684622189098!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "Junior's Cafe",
              menuHighlights: 'Vegan French Toast!',
              isAllVeg: false,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.9934205401214!2d-122.65609862374038!3d45.51021107107468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a758b301a97%3A0xb8f565bd973285ba!2sJunior&#39;s%20Cafe!5e0!3m2!1sen!2sus!4v1684617857508!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "Paradox Cafe",
              menuHighlights: 'MORE Vegan French Toast!',
              isAllVeg: false,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.673062769736!2d-122.63130952358776!3d45.5166596299368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a98480c49b1%3A0xa1779e04d5e311d5!2sParadox%20Cafe!5e0!3m2!1sen!2sus!4v1684621860492!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
          ]} />
          <RestaurantCategory header="Dinner" restaurants={[
            {
              title: "Bamboo Sushi",
              menuHighlights: 'Green Machine Roll, Crispy Garlic Tofu',
              isAllVeg: false,
              hasMulipleLocations: true,
              notes: '#1 Best Sushi in Town!',
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.4811537722135!2d-122.6396940237398!3d45.520522271074874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0be15439877%3A0xd7661c0993836182!2sBamboo%20Sushi!5e0!3m2!1sen!2sus!4v1684618054752!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "Fire on the Mountain",
              menuHighlights: 'Vegan Drumsticks. We love the Jamaican Jerk sauce!',
              hasMulipleLocations: true,
              isAllVeg: false,
              notes: "This was Kate and Jasmin's very FIRST DATE back in 2018!",
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44703.1507624979!2d-122.71874870700073!3d45.55139326263649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a1330980c9e7%3A0x2be138aab0c3960c!2sFire%20on%20the%20Mountain%20Buffalo%20Wings%20%7C%20Fremont!5e0!3m2!1sen!2sus!4v1684619364694!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "UCHU Sushi",
              menuHighlights: 'Iggy Popper Roll (you can sub vegan cream cheese!)',
              notes: "Second Best Sushi in Town and they have cool fish aquarium. And this was Kate and Jasmin's SECOND DATE :D",
              isAllVeg: false,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.9465531093756!2d-122.68012411244628!3d45.551400696495826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a76a504903af%3A0x47e03245ee0e6fc7!2sUCHU%20Sushi!5e0!3m2!1sen!2sus!4v1684619166636!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "Dove Vivi",
              notes: "Jasmin's Fav Pizza EVER. Great crust",
              menuHighlights: 'Vegan Corn Pizza',
              isAllVeg: false,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1737611841486!2d-122.64021032164563!3d45.52670877107491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0c715a27329%3A0xc98f9c468c535ee8!2sDove%20Vivi!5e0!3m2!1sen!2sus!4v1684620839038!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "Kati",
              menuHighlights: "you can't go wrong with thai food here. Get the vegan thai iced tea",
              isAllVeg: true,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2688323118914!2d-122.63756102164619!3d45.50466667107459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a08418c5ce21%3A0xade7e03a38d8e8dd!2sKati%20Portland!5e0!3m2!1sen!2sus!4v1684620952292!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "PDX Sliders",
              menuHighlights: 'Ross Island Burger (Housemade Black Bean Patty)',
              isAllVeg: false,
              hasMulipleLocations: true,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22376.2186176097!2d-122.66215531261888!3d45.48939444872893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0842983a9fb%3A0xd36274f5ed18e117!2sPDX%20Sliders%20Division%20St!5e0!3m2!1sen!2sus!4v1684618712256!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "Tacovore",
              menuHighlights: 'Cauliflower Taco, Tofu Taco',
              isAllVeg: false,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.0947250459694!2d-122.62725312373834!3d45.54841997107542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a7bb843f537d%3A0xf3e27f65a58c055a!2sTacovore!5e0!3m2!1sen!2sus!4v1684618983730!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "Kayo's Ramen Bar",
              menuHighlights: 'Ramen',
              isAllVeg: false,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.0023746484053!2d-122.6689638237382!3d45.55027777107552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a73f9657d55f%3A0xc4e71d9e52b69c9c!2sKayo&#39;s%20Ramen%20Bar!5e0!3m2!1sen!2sus!4v1684620699828!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "SuperDeluxe",
              notes: "Drive-thru burger joint that's better than Burgerville",
              hasMulipleLocations: true,
              menuHighlights: 'Vegan Deluxe Burger',
              isAllVeg: false,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11185.075426947704!2d-122.64528579840811!3d45.50466617934325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a104c9d1a181%3A0x9dffc5430eba30bc!2sSuperDeluxe!5e0!3m2!1sen!2sus!4v1684621140193!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "Next Level Burger",
              hasMulipleLocations: true,
              menuHighlights: 'Vegan Milkshakes',
              isAllVeg: true,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179043.15527753474!2d-122.7283561808776!3d45.47888222681661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0f2d2c06209%3A0x2917fae4d74b85f0!2sNext%20Level%20Burger%20Hawthorne!5e0!3m2!1sen!2sus!4v1684621626289!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
          ]} />
          <RestaurantCategory header="Late-Night" restaurants={[
            {
              title: "Victoria Bar",
              menuHighlights: 'Buffalo Cauliflower, Cornbread',
              isAllVeg: false,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.61714865741!2d-122.67785252373785!3d45.55802667107556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a712ee8d9a13%3A0xfe173a70116370f0!2sVictoria%20Bar!5e0!3m2!1sen!2sus!4v1684618169714!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "Matador",
              menuHighlights: 'Beyond Meat Street Tacos',
              isAllVeg: false,
              hasMulipleLocations: true,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44726.02366467302!2d-122.71711165136719!3d45.522629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0beba84c9eb%3A0x838dfbaf689e3cdf!2sMatador%20East%20Portland!5e0!3m2!1sen!2sus!4v1684618245565!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
              title: "Romtoms",
              notes: 'Nice outdoor seating with firepits',
              menuHighlights: 'Veggie Burger, Tofutti vegan ice cream sandwich',
              isAllVeg: false,
              googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.3710434752!2d-122.66434541245695!3d45.52273839649383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0a5fed62565%3A0x9f04265b15024d83!2sRontoms!5e0!3m2!1sen!2sus!4v1684619925999!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
          ]} />

        </TabPanel>

        {/* ITINERARY */}
        <TabPanel value="3">
          <div>
            <h2>Thursday, August 10</h2>
            <ItineraryGrid rows={thursItineraryRows} />
            <h2>Friday, August 11</h2>
            <ItineraryGrid rows={friItineraryRows} />
          </div>
        </TabPanel>

        {/* CONTACT */}
        <TabPanel value="4">
          If you have any questions, comments, or concerns, please reach out any time. We look forward to seeing you in August!
          <h3>Jasmin</h3>
          <p>
            323-376-3753
            <br />
            jasmintmail@gmail.com
          </p>
          <h3>Kate</h3>
          <p>
            503-504-1263
            <br />
            katebergie@gmail.com
          </p>
          <h3>Our Home Address</h3>
          <p>6216 SE 67th Ave<br />Portland, OR 97206</p>
          <td className='google-iframe' dangerouslySetInnerHTML={{
            __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.596830037323!2d-122.59678872358963!3d45.4779249325227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0052a741f33%3A0x49fb2491b6d52f8c!2s6216%20SE%2067th%20Ave%2C%20Portland%2C%20OR%2097206!5e0!3m2!1sen!2sus!4v1684726542432!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
          }} />
          <h3>Wedding Venue</h3>
          <h4>Portland City Grill</h4>
          <p>111 SW 5th Ave 30th Floor<br />Portland, OR 97204</p>
          <td className='google-iframe' dangerouslySetInnerHTML={{
            __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.3968838702153!2d-122.67852242358755!3d45.5222183295655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a06b0fad621%3A0x60ea32db79c16dcc!2sPortland%20City%20Grill!5e0!3m2!1sen!2sus!4v1684726670746!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
          }} />
          <p><b>Wedding Date: </b>Friday, August 11, 2023, 6pm</p>
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default App;
