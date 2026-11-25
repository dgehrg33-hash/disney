const fs = require('fs');
const https = require('https');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const assets = [
  {
    name: 'disney_logo_dark.png',
    url: 'https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png'
  },
  {
    name: 'disney_logo_mobile.png',
    url: 'https://static-mh.content.disney.io/matterhorn/assets/logos/disney_logo_dark-baa807690db7.png'
  },
  {
    name: 'hero_hexed.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/hb_disneymovies_hexed_get_tickets_v2_desktop_e0749500.jpeg?region=0,0,2048,878&width=1536'
  },
  {
    name: 'logo_hexed.png',
    url: 'https://lumiere-a.akamaihd.net/v1/images/logo_hexed_color-800_e2ae915c.png?region=0,0,800,412'
  },
  {
    name: 'percy_jackson_s3.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_sq_disneyplushulu_percy_jackson_and_the_olympians_s3_1276a505.jpeg?region=0,0,800,800'
  },
  {
    name: 'moana_live_action.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_sq_disneymovies_moana_live_actionn_disneyplus_deskto_3487f9aa.jpeg?region=0,0,800,800'
  },
  {
    name: 'disneystore_toptoys.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_disneystore_toptoys_sq_desktop_3140f8a0.jpeg?region=0,0,800,800'
  },
  {
    name: 'wdw_package_offer.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_disney_parks_fy27_q2_package_offer_sq_desktop_89d83262.jpeg?region=0,0,800,800'
  },
  {
    name: 'celebrate_magic_logo.png',
    url: 'https://lumiere-a.akamaihd.net/v1/images/celebrate-the-magic-horizontal-logo-800_b926123c.png?region=0,0,800,179'
  },
  {
    name: 'invisible_horse.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_maketheholidaysmagic2027_theinvisiblehorse_desktop_55dea27c.jpeg?region=0,0,800,800'
  },
  {
    name: 'holiday_magic.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_csr_maketheholidaysmagic_holidaymagic_sq_desktop_4dd8ed2d.jpeg?region=0,0,800,800'
  },
  {
    name: 'holiday_magic_shop.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_maketheholidaysmagic2027_holidaymagicshop_sq_desktop_fcfbd461.jpeg?region=0,0,800,800'
  },
  {
    name: 'hulu_disney_holidays.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_maketheholidaysmagic2027_disneyplushuluholidays_sq_d_613fa6dc.jpeg?region=0,0,800,800'
  },
  {
    name: 'toystory5.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_movies_toystory5_nowstreamingdisneyplus_hz_desktop_v_0687fbf2.jpeg?region=0,0,1460,824'
  },
  {
    name: 'proudfamily_wizmas.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_a_proud_family_wizmas_t_horizontal_desktop_0fed250d.jpeg?region=0,0,1460,824'
  },
  {
    name: 'avengers_encore.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_movies_avengersendgameencore_hz_desktop_1a78d470.jpeg?region=0,0,1460,824'
  },
  {
    name: 'wdw_spring_offer.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_disneyparks_wdw_q2boardroomoffer_hz_desktop_46084f59.jpeg?region=0,0,1460,824'
  },
  {
    name: 'dlr_winter_offer.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_parks_dlr_horizontal_tq2_winter_hotel_offer_content_523f08cf.jpeg?region=0,0,1460,824'
  },
  {
    name: 'dcl_gty_offer.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_parks_dcl_gtyofferseptember_hz_desktop_155b5ec0.jpeg?region=0,0,1460,824'
  },
  {
    name: 'fortnite_disney.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_dcp_fortnitexdisney_hz_desktop_crop_b4ef4da3.jpeg?region=0,0,1460,600'
  },
  {
    name: 'f1_disney.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_disney_disneyxf1_fuelthemagic_hz_desktop_crop_3f18b4a0.jpeg?region=0,0,1460,600'
  },
  {
    name: 'bundle_banner.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/hb_disney_disneybundle_slimbanner_desktop_2025_0ba233e2.jpeg?region=0,0,2048,600&width=1536'
  },
  {
    name: 'bundle_logo.png',
    url: 'https://lumiere-a.akamaihd.net/v1/images/hb_disney_disneybundle_slimbanner_logo_mobile_31324374.png?region=0,0,450,177'
  },
  {
    name: 'visa_rewards_banner.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/b_disney_visarewardsbanner_fall2026_desktop_5dc203ef.jpeg?region=0,0,2048,750&width=1536'
  }
];

function download(asset) {
  return new Promise((resolve, reject) => {
    const dest = path.join(assetsDir, asset.name);
    const file = fs.createWriteStream(dest);
    const urlObj = new URL(asset.url);
    const options = {
      protocol: urlObj.protocol,
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.disney.com/',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    };

    https.get(options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { headers: options.headers }, (res2) => {
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      } else {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        reject(new Error(`Failed with status ${res.statusCode} for ${asset.name}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} official assets...`);
  for (const a of assets) {
    try {
      await download(a);
      const stats = fs.statSync(path.join(assetsDir, a.name));
      console.log(`✓ Downloaded ${a.name} (${stats.size} bytes)`);
    } catch (e) {
      console.error(`✗ Error downloading ${a.name}: ${e.message}`);
    }
  }
  console.log('All downloads completed successfully.');
}

run();
