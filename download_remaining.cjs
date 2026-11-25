const fs = require('fs');
const https = require('https');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');

const remaining = [
  {
    name: 'holiday_magic_shop.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_maketheholidaysmagic2027_theholidaymagicshop_desktop_234906ba.jpeg?region=0,0,800,800'
  },
  {
    name: 'hulu_disney_holidays.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_maketheholidaysmagic2027_collectionart_desktop_efe27de0.jpeg?region=0,0,800,800'
  },
  {
    name: 'toystory5.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_movies_toystory5_nowstreamingdisneyplus_hz_desktop_v_0687fbf2.jpeg?region=0,0,1460,824'
  },
  {
    name: 'proudfamily_wizmas.jpeg',
    url: 'https://lumiere-a.akamaihd.net/v1/images/cg_a_proud_family_wizmas_t_horizontal_desktop_0fed250d.jpeg?region=0,0,1460,824'
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
        'Referer': 'https://www.disney.com/'
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
  for (const a of remaining) {
    try {
      await download(a);
      const stats = fs.statSync(path.join(assetsDir, a.name));
      console.log(`✓ Downloaded ${a.name} (${stats.size} bytes)`);
    } catch (e) {
      console.error(`✗ Error downloading ${a.name}: ${e.message}`);
    }
  }
}

run();
