import { PrismaClient as WerchowsgiClient } from '../prisma/generated/werchowsgi'
import { PrismaClient as WerchowsClient } from '../prisma/generated/werchow'
import { PrismaClient as WerchowCampClient } from '../prisma/generated/werchowcamp'
import { PrismaClient as WerchowSepClient } from '../prisma/generated/werchowsep'


let SGI;
let Werchow;
let Camp;
let Sep;


//check if we are running in production mode
if (process.env.NODE_ENV === 'production') {

    Werchow = new WerchowsClient()
    SGI = new WerchowsgiClient()
    Camp = new WerchowCampClient()
    Sep = new WerchowSepClient()

} else {
    //check if there is already a connection to the database
    if (!global.Werchow) {

        global.Werchow = new WerchowsClient()

    } else if (!global.SGI) {

        global.SGI = new WerchowsgiClient()

    } else if (!global.Camp) {

        global.Camp = new WerchowCampClient()

    } else if (!global.Sep) {

        global.Sep = new WerchowSepClient()

    }

    Werchow = global.Werchow
    SGI = global.SGI
    Camp = global.Camp
    Sep = global.Sep    
}

export { Werchow, SGI, Camp, Sep };

