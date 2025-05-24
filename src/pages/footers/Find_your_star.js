import { Spin } from "antd";
import { NavLink } from "react-router-dom";
function FindYourStart() {
  return (
    <>
      <div className="py-14 bg-[url(https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat relative z-10">
        <div className="absolute inset-0 bg-black opacity-15 -z-10"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">
                Find your star
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1">
          <div class="text-justify">
            <h2 class="text-2xl font-bold mb-4">Star Finder App</h2>

            <p class="mb-4">
              The time has come, you have received a personal&nbsp;
              <a
                href="https://www.star-registration.in/pages/name-a-star"
                class="text-blue-600 hover:underline"
              >
                Name a Star
              </a>
              &nbsp;Certificate and are on your way to find your star in the
              sky. Among all the sparkling beauties it is sometimes difficult to
              find the star with your name right away. Thanks to the&nbsp;
              <a
                href="https://software.star-register.com/"
                class="text-blue-600 hover:underline"
              >
                Web Software
              </a>
              &nbsp;and the&nbsp;
              <a
                href="https://apps.apple.com/us/app/star-registration-planetarium/id1542535191"
                class="text-blue-600 hover:underline"
              >
                iOS
              </a>
              &nbsp;and&nbsp;
              <a
                href="https://play.google.com/store/apps/details?id=com.software.starregister"
                target="_blank"
                class="text-blue-600 hover:underline"
              >
                Android App
              </a>
              &nbsp;it will now be easy for you on any device whilst home or on
              the go!
            </p>

            <div class="flex flex-wrap gap-4 mb-6">
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/star-registration-planetarium/id1542535191"
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0361/9248/5508/files/Download_on_the_App_Store_Badge_US-UK_blk_092917.png?v=1606846546"
                  alt="App Store"
                  class="w-[150px]"
                />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.software.starregister&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Google Play"
                  class="w-[180px] -mt-3"
                />
              </a>
            </div>

            <h3 class="text-xl font-semibold mb-2">How does the App work?</h3>
            <p class="mb-2">It's so easy to find your star!</p>
            <ol class="list-decimal list-inside mb-6 space-y-1">
              <li>Enter your registration number</li>
              <li>Pan your phone along the sky</li>
              <li>Find your star</li>
            </ol>

            <h3 class="text-xl font-semibold mb-2">
              Find your star easily in the night sky
            </h3>
            <p class="mb-6">
              Save time and organization effort and just download the app! After
              entering the registration number, the data of your star will be
              displayed. Follow the arrow on the screen and when you find the
              star, just look up at the sky!
              <br />
              <br />
              If you don't have a smartphone, we can recommend the desktop
              version&nbsp;
              <a
                href="https://software.star-register.com/"
                class="text-blue-600 hover:underline"
              >
                Star Finder from Star Register
              </a>
              . You can use it online.
            </p>

            <h3 class="text-xl font-semibold mb-2">
              How does the software work?
            </h3>
            <p class="mb-4">
              First enter your registration number above and your star will be
              displayed. With the cursor you can change the viewing angle by
              moving the image and scrolling the distance.
            </p>

            <p class="mb-6">
              For orientation on earth, the points of the compass are displayed,
              in the sky an azimuthal and an equatorial grid facilitate
              localization if desired. An azimuth is the horizontal angle
              oriented to the points of the compass, the equatorial grid is a
              geocentric coordinate system on the celestial sphere. These&nbsp;
              <a
                href="https://www.star-registration.in/pages/star-coordinates"
                class="text-blue-600 hover:underline"
              >
                coordinates
              </a>
              &nbsp;can be found on the certificate of your star naming. In the
              lower menu you can select the grid and also display the
              constellations (first symbol).
            </p>

            <h3 class="text-xl font-semibold mb-2">
              How do I find my named star online?
            </h3>
            <p class="mb-6">
              After you have entered the registration number, your star will be
              displayed automatically. It is marked by a crosshair. On the left
              side a window opens with interesting information about your named
              star. Enter the date and time at which you would like to view the
              stars on the bottom of the display. Thus you see the sky on the
              screen in such a way, as it extends in reality at your place over
              you.
            </p>

            <h3 class="text-xl font-semibold mb-2">
              How do I then find my named star in the night sky?
            </h3>
            <p class="mb-6">
              There is a simple trick to find your star in the night sky. Adjust
              the timeline in the software, so that the star you are looking for
              is directly above a point of the compass (north, east, south,
              west). Take a note of the time and remember which constellations
              are close to your named star. An example: According to the
              software your named star is located at 10:15 p.m. exactly in the
              north below the constellation Ursa Major. In the evening, at 10:15
              p.m., look north into the sky with the help of a compass and
              orientate yourself on the constellation of the Great Bear. You can
              now see the previously displayed image of the software in
              sparkling reality. It's that easy to enjoy the sight of your named
              star!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindYourStart;
