import styles from '../../styles/Catalog.module.css';
import Link from 'next/link';

import CatalogMenu from './CatalogMenu';
import CatalogBox from './CatalogBox';

const Catalog = ( choise ) => {

    const gallery = 
        <div className={styles.gallery}>
            <Link href={'/gallery-limbra/'}>
                <a><CatalogBox message={'Limbra'} background={'assets/products/Limra/cloudy/bulutlu'} /></a>
            </Link>
            <Link href={'/gallery-marble/'}>
                <a><CatalogBox message={'Marble'} background={'assets/products/Travertine/LIGHT-TRAVERTEN-1/LIGHT-TRAVERTEN-1'} /></a>
            </Link>
            <Link href={'/gallery-travertine/'}>
                <a><CatalogBox message={'Travertine'} background={'assets/products/Marble/CALACATTA-2/CALACATTA-2'} /></a>
            </Link>
        </div>;
    
    const limbra = 
        <div className={styles.gallery}>
            <CatalogBox message={'Bulutlu'} background={'assets/products/Limra/cloudy/bulutlu'} />
            <CatalogBox message={'Limestone'} background={'assets/products/Limra/limestone-classic/LIMESTONE-KLASIK-1'} />
            <CatalogBox message={'Stone'} background={'assets/products/Limra/stone/STONE'} />
        </div>;

    const marble = 
        <div className={styles.gallery}>
            <CatalogBox message={'Light 1'} background={'assets/products/Travertine/LIGHT-TRAVERTEN-1/LIGHT-TRAVERTEN-1'} />
            <CatalogBox message={'Light 2'} background={'assets/products/Travertine/LIGHT-TRAVERTEN-2-1/LIGHT-TRAVERTEN-2-1'} />
            <CatalogBox message={'Noche 1'} background={'assets/products/Travertine/NOCHE-TRAVERTEN-1/NOCHE-TRAVERTEN-1'} />
            <CatalogBox message={'Noche 2'} background={'assets/products/Travertine/NOCHE-TRAVERTEN-2-1/NOCHE-TRAVERTEN-2-1'} />
            <CatalogBox message={'Sarı'} background={'assets/products/Travertine/SARI-TRAVERTEN-1-1/SARI-TRAVERTEN-1-1'} />
            <CatalogBox message={'Klasik'} background={'assets/products/Travertine/TRAVERTEN-KLASIK-1/TRAVERTEN-KLASIK-1'} />
        </div>;

    const travertine = 
        <div className={styles.gallery}>
            <CatalogBox message={'Calacatta'} background={'assets/products/Marble/CALACATTA-2/CALACATTA-2'} />
            <CatalogBox message={'Cinye Bej'} background={'assets/products/Marble/CINYE-BEJ-2/CINYE-BEJ-2'} />
            <CatalogBox message={'Emirdağ Gri 1'} background={'assets/products/Marble/EMIRDAG-GRI-2-2/EMIRDAG-GRI-2-2'} />
            <CatalogBox message={'Emirdağ Gri 2'} background={'assets/products/Marble/EMIRDAG-GRI-3/EMIRDAG-GRI-3'} />
            <CatalogBox message={'Emperador'} background={'assets/products/Marble/EMPARADOR-2/EMPARADOR-2'} />
            <CatalogBox message={'Gelendost'} background={'assets/products/Marble/GELENDOST-2/GELENDOST-2'} />
            <CatalogBox message={'İzmir Gri'} background={'assets/products/Marble/Izmir-Gri/Izmir-Gri'} />
            <CatalogBox message={'Kaman Yeşil 1'} background={'assets/products/Marble/KAMAN-YESIL-2-2/KAMAN-YESIL-2-2'} />
            <CatalogBox message={'Kaman Yeşil 2'} background={'assets/products/Marble/KAMAN-YESIL-3/KAMAN-YESIL-3'} />
            <CatalogBox message={'Karacal Bej'} background={'assets/products/Marble/KARACAL-BEJ-1/KARACAL-BEJ-1'} />
            <CatalogBox message={'Karamanlı Bej'} background={'assets/products/Marble/KARAMANLI-BEJ-2-1/KARAMANLI-BEJ-2-1'} />
            <CatalogBox message={'Kemalpaşa Beyaz'} background={'assets/products/Marble/KEMALPASA-BEYAZ-2/KEMALPASA-BEYAZ-2'} />
            <CatalogBox message={'Leylak'} background={'assets/products/Marble/leylak/leylak'} />
            <CatalogBox message={'Marmara Beyaz'} background={'assets/products/Marble/MARMARA-BEYAZ-2/MARMARA-BEYAZ-2'} />
            <CatalogBox message={'Muğla Beyaz'} background={'assets/products/Marble/MUGLA-BEYAZ-2/MUGLA-BEYAZ-2'} />
            <CatalogBox message={'Picasso'} background={'assets/products/Marble/picasso/picasso'} />
            <CatalogBox message={'Sofita'} background={'assets/products/Marble/SOFITA-2/SOFITA-2'} />
            <CatalogBox message={'Sunset'} background={'assets/products/Marble/SUNSET-2/SUNSET-2'} />
            <CatalogBox message={'Toros Siyah'} background={'assets/products/Marble/TOROS-SIYAH-2/TOROS-SIYAH-2'} />
            <CatalogBox message={'Yeşilova Bej'} background={'assets/products/Marble/YESILOVA-BEJ-2/YESILOVA-BEJ-2'} />
        </div>;
    return (
        <div className={styles.block}>
            <CatalogMenu />
            {
                
                choise.choise == "limbra" ? limbra :
                choise.choise == "marble" ? marble :
                choise.choise == "travertine" ? travertine : gallery
            }
        </div>
    )
}

export default Catalog;