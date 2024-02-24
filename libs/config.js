import { PrismaClient as WerchowsgiClient } from "../prisma/generated/werchowsgi";
import { PrismaClient as WerchowsClient } from "../prisma/generated/werchow";
import { PrismaClient as WerchowCampClient } from "../prisma/generated/werchowcamp";
import { PrismaClient as WerchowSepClient } from "../prisma/generated/werchowsep";
import { PrismaClient as WerchowServClient } from "../prisma/generated/werchowserv";
import { PrismaClient as WerchowArchClient } from "../prisma/generated/werchowarch";
import { PrismaClient as WerchowClubClient } from "../prisma/generated/werchowclub";
import { PrismaClient as WerchowInfoClient } from "../prisma/generated/werchowinfo";

let SGI;
let Werchow;
let Camp;
let Sep;
let Serv;
let Arch;
let Club;
let Info;

//check if we are running in production mode
if (process.env.NODE_ENV === "production") {
  Werchow = new WerchowsClient();
  SGI = new WerchowsgiClient();
  Camp = new WerchowCampClient();
  Sep = new WerchowSepClient();
  Serv = new WerchowServClient();
  Arch = new WerchowArchClient();
  Club = new WerchowClubClient();
  Info = new WerchowInfoClient();
} else {
  //check if there is already a connection to the database
  if (!global.Werchow) {
    global.Werchow = new WerchowsClient();
  } else if (!global.SGI) {
    global.SGI = new WerchowsgiClient();
  } else if (!global.Camp) {
    global.Camp = new WerchowCampClient();
  } else if (!global.Sep) {
    global.Sep = new WerchowSepClient();
  } else if (!global.Serv) {
    global.Serv = new WerchowServClient();
  } else if (!global.Arch) {
    global.Arch = new WerchowArchClient();
  } else if (!global.Club) {
    global.Club = new WerchowClubClient();
  } else if (!global.Info) {
    global.Info = new WerchowInfoClient();
  }

  Werchow = global.Werchow;
  SGI = global.SGI;
  Camp = global.Camp;
  Sep = global.Sep;
  Serv = global.Serv;
  Arch = global.Arch;
  Club = global.Club;
  Info = global.Info;
}

export { Werchow, SGI, Camp, Sep, Serv, Arch, Club, Info };
